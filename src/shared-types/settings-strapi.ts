import { MenuPropsLink } from "../components/Menu";
import { StrapImage } from "./strap-image";

export type SettingsStrapi = {
	id: string;
	blogName: string;
	blogDescription: string;
	logo: StrapImage;
	menuLink: MenuPropsLink[];
	footer: string;
};
