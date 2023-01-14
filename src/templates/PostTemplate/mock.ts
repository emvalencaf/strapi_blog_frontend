import { data } from "../../api/data.json";
// type
import { PostTemplateProps } from ".";

export default {
	settings: data.setting,
	post: data.posts[0],
} as PostTemplateProps;
