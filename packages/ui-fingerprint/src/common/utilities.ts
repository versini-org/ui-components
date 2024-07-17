import { MaybePromise } from "./types";

export const hashFromFloat32Array = (array: Float32Array): string => {
	const hashArray = Array.from(array)
		.map((b) => b.toString(16).padStart(2, "0"))
		.join("");
	return hashArray;
};

export const hashFromString = (val: string): string => {
	let hash = 0;
	if (val.length === 0) {
		return hash.toString();
	}
	for (let i = 0; i < val.length; i++) {
		const char = val.charCodeAt(i);
		hash = (hash << 5) - hash + char;
		hash = hash & hash;
	}
	return hash.toString();
};

export function wait<T = void>(
	durationMs: number,
	resolveWith?: T,
): Promise<T> {
	return new Promise((resolve) => setTimeout(resolve, durationMs, resolveWith));
}

/**
 * Creates and keeps an invisible iframe while the given function runs.
 * The given function is called when the iframe is loaded and has a body.
 * The iframe allows to measure DOM sizes inside itself.
 *
 * Notice: passing an initial HTML code doesn't work in IE.
 *
 * Warning for package users:
 * This function is out of Semantic Versioning, i.e. can change unexpectedly. Usage is at your own risk.
 */
export async function withIframe<T>(
	action: (
		iframe: HTMLIFrameElement,
		iWindow: typeof window,
	) => MaybePromise<T>,
	initialHtml?: string,
	domPollInterval = 50,
): Promise<T> {
	const d = document;

	// document.body can be null while the page is loading
	while (!d.body) {
		await wait(domPollInterval);
	}

	const iframe = d.createElement("iframe");

	try {
		await new Promise<void>((_resolve, _reject) => {
			let isComplete = false;
			const resolve = () => {
				isComplete = true;
				_resolve();
			};
			const reject = (error: unknown) => {
				isComplete = true;
				_reject(error);
			};

			iframe.onload = resolve;
			iframe.onerror = reject;
			const { style } = iframe;
			// Required for browsers to calculate the layout
			style.setProperty("display", "block", "important");
			style.position = "absolute";
			style.top = "0";
			style.left = "0";
			style.visibility = "hidden";
			if (initialHtml && "srcdoc" in iframe) {
				iframe.srcdoc = initialHtml;
			} else {
				iframe.src = "about:blank";
			}
			d.body.appendChild(iframe);

			// WebKit in WeChat doesn't fire the iframe's `onload` for some reason.
			// This code checks for the loading state manually.
			// See https://github.com/fingerprintjs/fingerprintjs/issues/645
			const checkReadyState = () => {
				// The ready state may never become 'complete' in Firefox despite the 'load' event being fired.
				// So an infinite setTimeout loop can happen without this check.
				// See https://github.com/fingerprintjs/fingerprintjs/pull/716#issuecomment-986898796
				if (isComplete) {
					return;
				}

				// Make sure iframe.contentWindow and iframe.contentWindow.document are both loaded
				// The contentWindow.document can miss in JSDOM (https://github.com/jsdom/jsdom).
				if (iframe.contentWindow?.document?.readyState === "complete") {
					resolve();
				} else {
					setTimeout(checkReadyState, 10);
				}
			};
			checkReadyState();
		});

		while (!iframe.contentWindow?.document?.body) {
			await wait(domPollInterval);
		}

		return await action(iframe, iframe.contentWindow as typeof window);
	} finally {
		iframe.parentNode?.removeChild(iframe);
	}
}
