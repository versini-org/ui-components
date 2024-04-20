import { act, fireEvent, render } from "@testing-library/react";
import React from "react";

import { LiveRegion } from "../LiveRegion";
import {
	ACTION_CLEAR_ANNOUNCEMENT,
	ACTION_SET_ANNOUNCEMENT,
	ROLES,
} from "../constants";
import { reducer } from "../reducer";

const getContent = (renderResult: any) =>
	renderResult.container.firstChild.textContent;
const getPoliteness = (renderResult: any) =>
	renderResult.container.firstChild.getAttribute("aria-live");
const getRole = (renderResult: any) =>
	renderResult.container.firstChild.getAttribute("role");

const content = "Foo Bar Baz";
const content2 = "Biz Buzz";

/**
 * This is a helper component that renders a LiveRegion and a button. It accepts all of LiveRegion's
 * props as well as a `children2` prop. On the first render, it will use the value
 * of `props.children`.
 *
 * Clicking on the "toggle children value" button will cause it to toggle between the `children` and
 * `children2` props.
 *
 * This allows us to simulate click events in order to cause re-renders with different prop values,
 * and test the behavior of the LiveRegion as it would be used in an application.
 */
interface LiveRegionProps {
	children?: React.ReactNode;
	children2?: React.ReactNode;
	politeness?: "polite" | "assertive" | null | undefined;
	politeness2?: "polite" | "assertive" | null | undefined;
	role?: string;
	toggleChildrenButtonLabel?: string;
	togglePolitenessButtonLabel?: string;
}
class LiveRegionPropChanger extends React.PureComponent<LiveRegionProps> {
	static defaultProps = {
		toggleChildrenButtonLabel: "toggle children value",
		togglePolitenessButtonLabel: "toggle politeness value",
	};

	state = {
		renderChildren2: false,
		renderPoliteness2: false,
	};

	onToggleChildrenClick = () => {
		this.setState((prevState: any) => ({
			renderChildren2: !prevState.renderChildren2,
		}));
	};

	onTogglePolitenessClick = () => {
		this.setState((prevState: any) => ({
			renderPoliteness2: !prevState.renderPoliteness2,
		}));
	};

	render() {
		const {
			children,
			children2,
			politeness,
			politeness2,
			toggleChildrenButtonLabel,
			togglePolitenessButtonLabel,
			...liveRegionProps
		} = this.props;
		const { renderChildren2, renderPoliteness2 } = this.state;

		return (
			<React.Fragment>
				<LiveRegion
					politeness={renderPoliteness2 ? politeness2 : politeness}
					{...liveRegionProps}
				>
					{renderChildren2 ? children2 : children}
				</LiveRegion>
				<button onClick={this.onToggleChildrenClick}>
					{toggleChildrenButtonLabel}
				</button>
				<button onClick={this.onTogglePolitenessClick}>
					{togglePolitenessButtonLabel}
				</button>
			</React.Fragment>
		);
	}
}

describe(`The LiveRegion Component`, () => {
	describe("reducer tests", () => {
		it("should return the initial state", () => {
			const state = {
				announcement: "foo",
			};
			expect(
				reducer(state, {
					type: "UNKNOWN_ACTION" as any,
				}),
			).toEqual(state);
		});

		it("should update the data state on action", () => {
			const previousState = {
				announcement: "foo",
			};
			const actionPayload = <p>hello world</p>;
			expect(
				reducer(previousState, {
					type: ACTION_SET_ANNOUNCEMENT,
					payload: actionPayload,
				}),
			).toEqual({
				announcement: actionPayload,
			});
		});

		it("should clear the data state on action", () => {
			const previousState = {
				announcement: "foo",
			};
			expect(
				reducer(previousState, {
					type: ACTION_CLEAR_ANNOUNCEMENT,
				}),
			).toEqual({
				announcement: null,
			});
		});
	});
	describe(`When it renders without any props`, () => {
		let renderResult: any;
		beforeEach(() => {
			renderResult = render(<LiveRegion>yo</LiveRegion>);
		});

		it(`Then it should render with the "assertive" politeness level`, () => {
			expect(getPoliteness(renderResult)).toEqual("assertive");
		});

		it(`Then it should not render with a role`, () => {
			expect(getRole(renderResult)).toBeNull();
		});

		it(`Then it should not render any content into the live region`, () => {
			expect(renderResult.container.textContent).toEqual("yo");
		});
	});
	describe(`When announcementDelay is supplied`, () => {
		it(`Then it should render with some delay`, () => {
			vi.useFakeTimers();

			const timeout = 3000;
			const renderResult = render(
				<LiveRegion announcementDelay={timeout}>{content}</LiveRegion>,
			);
			expect(getContent(renderResult)).toEqual("");
			act(() => {
				vi.advanceTimersByTime(timeout);
			});
			expect(getContent(renderResult)).toEqual(content);
		});

		it(`and with children as React Component Then it should render with some delay`, () => {
			vi.useFakeTimers();
			const timeout = 3000;
			const children = <p>{content}</p>;
			const renderResult = render(
				<LiveRegion announcementDelay={timeout}>{children}</LiveRegion>,
			);
			expect(renderResult.queryByText(content)).toBeNull();
			act(() => {
				vi.advanceTimersByTime(timeout);
			});
			expect(renderResult.getByText(content)).toBeInTheDocument();
		});
	});
	describe(`When clearAnnouncementDelay is supplied`, () => {
		it(`Then it should clear the content with some delay`, () => {
			vi.useFakeTimers();
			const timeout = 3000;
			const renderResult = render(
				<LiveRegion clearAnnouncementDelay={timeout}>{content}</LiveRegion>,
			);
			expect(getContent(renderResult)).toEqual(content);
			act(() => {
				vi.advanceTimersByTime(timeout);
			});
			expect(getContent(renderResult)).toBe("");
		});

		it(`and with children as React Component Then it should render with some delay`, () => {
			vi.useFakeTimers();
			const timeout = 3000;
			const children = <p>{content}</p>;
			const renderResult = render(
				<LiveRegion clearAnnouncementDelay={timeout}>{children}</LiveRegion>,
			);
			expect(renderResult.getByText(content)).toBeInTheDocument();
			act(() => {
				vi.advanceTimersByTime(timeout);
			});
			expect(renderResult.queryByText(content)).toBeNull();
		});
	});
	describe(`When onAnnouncementClear is supplied`, () => {
		it(`Then it should call the callback function after clearing the timeout`, () => {
			vi.useFakeTimers();
			const timeout = 3000;
			const onAnnouncementClearMock = vi.fn();
			render(
				<LiveRegion
					clearAnnouncementDelay={timeout}
					onAnnouncementClear={onAnnouncementClearMock}
				>
					{content}
				</LiveRegion>,
			);
			expect(onAnnouncementClearMock).toHaveBeenCalledTimes(0);
			act(() => {
				vi.advanceTimersByTime(timeout);
			});
			expect(onAnnouncementClearMock).toHaveBeenCalledTimes(1);
		});
	});
	describe(`Given a known role with a default politeness is supplied`, () => {
		const role = ROLES.ALERT;

		describe(`And the politeness prop is also supplied`, () => {
			describe(`When the LiveRegion renders with a different, non-null politeness`, () => {
				const politeness = "off";
				let renderResult: any;
				beforeEach(() => {
					renderResult = render(
						<LiveRegion politeness={politeness} role={role}>
							{content}
						</LiveRegion>,
					);
				});

				it(`Then it honors the supplied politeness`, () => {
					expect(getPoliteness(renderResult)).toEqual(politeness);
				});

				it(`Then it honors the supplied role`, () => {
					expect(getRole(renderResult)).toEqual(role);
				});

				it(`Then it renders the provided children`, () => {
					expect(renderResult.getByText(content)).toBeInTheDocument();
				});
			});

			describe(`When the LiveRegion renders with a null politeness`, () => {
				const politeness = null;
				let renderResult: any;
				beforeEach(() => {
					renderResult = render(
						<LiveRegion politeness={politeness} role={role}>
							{content}
						</LiveRegion>,
					);
				});

				it(`Then it should not render with the "aria-live" attribute`, () => {
					expect(getPoliteness(renderResult)).toBeNull();
				});

				it(`Then it honors the supplied role`, () => {
					expect(getRole(renderResult)).toEqual(role);
				});

				it(`Then it renders the provided children`, () => {
					expect(renderResult.getByText(content)).toBeInTheDocument();
				});
			});
		});
	});
	describe(`When the "visible" prop is set to true`, () => {
		it("Then the content should be visible in the DOM", () => {
			const { container } = render(<LiveRegion visible>Foo</LiveRegion>);

			expect(container.firstChild).not.toHaveClass("sr-only");
		});
	});

	describe.each`
		type                           | children            | children2
		${"string"}                    | ${content}          | ${content2}
		${"React Element"}             | ${<p>{content}</p>} | ${<div>{content2}</div>}
		${"string then React Element"} | ${content}          | ${<div>{content2}</div>}
	`(
		`Given that a $type is passed for "props.children"`,
		({ children, children2 }) => {
			describe.each`
				role                 | expectedPoliteness | politeness2
				${null}              | ${"assertive"}     | ${"polite"}
				${ROLES.ALERT}       | ${null}            | ${"off"}
				${ROLES.ALERTDIALOG} | ${null}            | ${"off"}
				${ROLES.LOG}         | ${"polite"}        | ${"assertive"}
				${ROLES.MARQUEE}     | ${null}            | ${"off"}
				${ROLES.PROGRESSBAR} | ${null}            | ${"off"}
				${ROLES.STATUS}      | ${"polite"}        | ${"assertive"}
				${ROLES.TIMER}       | ${"assertive"}     | ${"polite"}
			`(
				`And the role is "$role"`,
				({ role, expectedPoliteness, politeness2 }) => {
					describe(`When it renders`, () => {
						let renderResult: any;
						beforeEach(() => {
							renderResult = render(
								<LiveRegionPropChanger
									children2={children2}
									politeness2={politeness2}
									role={role}
								>
									{children}
								</LiveRegionPropChanger>,
							);
						});

						it(`Then it inserts the content into the DOM on first render`, () => {
							expect(getContent(renderResult)).toEqual(content);
						});

						it(`Then the politeness is set to "${expectedPoliteness}"`, () => {
							expect(getPoliteness(renderResult)).toEqual(expectedPoliteness);
						});

						it(`Then the role is set to "${role}"`, () => {
							expect(getRole(renderResult)).toEqual(role);
						});

						it(`Then the content is visually hidden`, () => {
							expect(renderResult.container.firstChild).toHaveClass("sr-only");
						});

						describe(`And the "children" prop changes`, () => {
							beforeEach(() => {
								/**
								 * Click the toggle children button to update
								 *  `children` to `children2`.
								 */
								fireEvent.click(
									renderResult.getByText(
										LiveRegionPropChanger.defaultProps
											.toggleChildrenButtonLabel,
									),
								);
							});

							it(`Then it should replace the initial children with the new children`, () => {
								expect(renderResult.queryByText(content)).toBeNull();
								expect(renderResult.getByText(content2)).toBeInTheDocument();
							});
						});

						describe(`And the "politeness" prop changes`, () => {
							beforeEach(() => {
								// Click the toggle politeness button to update `politeness` to `politeness2`
								fireEvent.click(
									renderResult.getByText(
										LiveRegionPropChanger.defaultProps
											.togglePolitenessButtonLabel,
									),
								);
							});

							it(`Then it should not re-announce`, () => {
								/*
								 * This isn't a great test, but we don't have MutationObserver, and we can't / don't want
								 * to access the component instance to white box test whether or not it called the method
								 * that would announce.
								 */
								expect(getContent(renderResult)).toEqual(content);
							});

							it(`Then it should replace the initial politeness with the new politeness`, () => {
								expect(getPoliteness(renderResult)).toEqual(politeness2);
							});
						});
					});
				},
			);
		},
	);
});
