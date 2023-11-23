import { PolitenessByRole } from "./LiveRegionTypes";

export const ACTION_SET_ANNOUNCEMENT = "SET_ANNOUNCEMENT";
export const ACTION_CLEAR_ANNOUNCEMENT = "CLEAR_ANNOUNCEMENT";

/**
 * The default politeness value for each role.
 *
 * @enum {String}
 */
export const DEFAULT_POLITENESS_BY_ROLE: PolitenessByRole = {
	alert: null,
	alertdialog: null,
	log: "polite",
	marquee: null,
	progressbar: null,
	status: "polite",
	timer: "assertive",
};

/**
 * All supported `LiveRegion` roles.
 *
 * @enum {String}
 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#Live_Region_Roles
 */
export const ROLES = {
	/**
	 * A message with important, and usually time-sensitive
	 * information.
	 *
	 * Default politeness is `null` (does not add the
	 * `aria-live` attribute).
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Alert_Role
	 * @see https://www.w3.org/TR/2009/WD-wai-aria-20091215/roles#alert
	 */
	ALERT: "alert",

	/**
	 * A type of dialog that contains an alert message, where
	 * initial focus goes to the dialog or an element
	 * within it.
	 *
	 * Authors SHOULD use aria-describedby on an alertdialog
	 * to point to the alert message element in the
	 * dialog.
	 *
	 * Default politeness is `null` (does not add the
	 * `aria-live` attribute).
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_alertdialog_role
	 * @see https://www.w3.org/TR/2009/WD-wai-aria-20091215/roles#alertdialog
	 */
	ALERTDIALOG: "alertdialog",

	/**
	 * A type of live region where new information is added in
	 * meaningful order and old information may
	 * disappear.
	 *
	 * Default politeness is `"polite"`.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_log_role
	 * @see https://www.w3.org/TR/2009/WD-wai-aria-20091215/roles#log
	 */
	LOG: "log",

	/**
	 * A type of live region where non-essential information
	 * changes frequently. The primary difference
	 * between a marquee and a log is that logs usually have
	 * a meaningful order or sequence of important
	 * content changes.
	 *
	 * Default politeness is `null` (does not add the
	 * `aria-live` attribute).
	 */
	MARQUEE: "marquee",

	/**
	 * An element that displays the progress status for tasks
	 * that take a long time.
	 *
	 * Default politeness is `null` (does not add the
	 * `aria-live` attribute).
	 *
	 * @see https://www.w3.org/TR/2009/WD-wai-aria-20091215/roles#progressbar
	 */
	PROGRESSBAR: "progressbar",

	/**
	 * A container whose content is advisory information for
	 * the user but is not important enough to justify
	 * an alert.
	 *
	 * Default politeness is `"polite"`.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_status_role
	 * @see https://www.w3.org/TR/2009/WD-wai-aria-20091215/roles#status
	 */
	STATUS: "status",

	/**
	 * A numerical counter which indicates an amount of
	 * elapsed time from a start point, or the time remaining
	 * until an end point.
	 *
	 * Default politeness is `"assertive"`.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/ARIA_timer_role
	 * @see https://www.w3.org/TR/2009/WD-wai-aria-20091215/roles#timer
	 */
	TIMER: "timer",
};
