import { data } from "../../api/data.json";

// type
import { PostsTemplateProps } from ".";

export default {
	settings: data.setting,
	posts: data.posts,
} as PostsTemplateProps;
