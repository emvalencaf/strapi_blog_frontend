import { data } from "../../api/data.json";
// types
import { BaseTemplateProps } from ".";

export default {
	settings: data.setting,
	children: data.posts[0].content,
} as BaseTemplateProps;
