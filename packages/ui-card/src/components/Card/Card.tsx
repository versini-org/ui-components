import { useUniqueId } from "@versini/ui-hooks";
import type { CardTypes } from "@versini/ui-types";

import { CARD_CLASSNAME } from "../../common/constants";
import { getCardClasses } from "./utilities";

function CardHeader({
	id,
	content,
	userAriaLabelledby,
	className,
}: CardTypes.HeaderProps) {
	if (typeof content === "string") {
		return (
			<h2 id={id} className={className}>
				{content}
			</h2>
		);
	} else if (userAriaLabelledby) {
		return <div className={className}>{content}</div>;
	} else if (content) {
		return (
			<div className={className} id={id}>
				{content}
			</div>
		);
	}
	return null;
}

export const Card = ({
	header,
	headerClassName,
	footer,
	footerClassName,
	children,
	className,
	bodyClassName,
	"aria-labelledby": ariaLabelledby,
	spacing,
	mode = "system",
	compact = false,
	noBorder = false,

	...otherProps
}: CardTypes.Props) => {
	let headerId = null,
		sectionAriaLabelledBy = null;

	const isHeaderString = typeof header === "string";
	const uniqueIdForHeader = useUniqueId(CARD_CLASSNAME);

	const cardClassName = getCardClasses({
		className,
		headerClassName,
		bodyClassName,
		footerClassName,
		spacing,
		mode,
		compact,
		noBorder,
	});

	if (isHeaderString) {
		/**
		 * header is a string:
		 *  - we provide our own unique aria-labelledby
		 *  - we need to wrap the header with that same unique id
		 */
		headerId = uniqueIdForHeader;
		sectionAriaLabelledBy = headerId;
	} else if (!isHeaderString && header && ariaLabelledby) {
		/**
		 * header is not a string and aria-labelledby is provided.
		 * We use it to:
		 *  - add aria-labelledby to the "section" node
		 *  - but we do not provide the actual id (it's supposed to be
		 *    in the provided header)
		 */
		headerId = null;
		sectionAriaLabelledBy = ariaLabelledby;
	} else if (!isHeaderString && header && !ariaLabelledby) {
		/**
		 * header is not a string and aria-labelledby is NOT provided.
		 * We cannot assume header does not have an id (we cannot replace one),
		 * therefore, we need to wrap the header with our own id.
		 */
		headerId = uniqueIdForHeader;
		sectionAriaLabelledBy = headerId;
	} else {
		/**
		 * There is no header.
		 *  - if aria-labelledby exist, we add it to the "section" node and
		 *    hope the user is providing the corresponding id, in the body maybe?
		 */
		headerId = null;
		sectionAriaLabelledBy = ariaLabelledby || null;
	}

	return (
		<div className={cardClassName.wrapper}>
			<section
				{...(sectionAriaLabelledBy && {
					"aria-labelledby": sectionAriaLabelledBy,
				})}
				className={cardClassName.body}
				{...otherProps}
			>
				<CardHeader
					{...(headerId && { id: headerId })}
					content={header}
					className={cardClassName.header}
					userAriaLabelledby={ariaLabelledby}
				/>

				<div>{children}</div>
				{footer ? <div className={cardClassName.footer}>{footer}</div> : null}
			</section>
		</div>
	);
};
