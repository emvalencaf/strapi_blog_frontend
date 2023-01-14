// data
import { data } from "../../api/data.json";

// types
import { PostTagsProps } from ".";

export default {
	tags: data.posts[0].tags,
} as PostTagsProps;
