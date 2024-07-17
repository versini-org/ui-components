import { getBrowser } from "../components/system/browser";
import { getSystem } from "../components/system/system";
import { hash } from "./hash";

export const getFingerprint = async (): Promise<string> => {
	try {
		const b = await getBrowser();
		const s = await getSystem();
		return await hash(JSON.stringify({ b, s }));
	} catch (_error) {
		return "";
	}
};
