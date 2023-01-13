// data
import { data } from "../../api/data.json";

// type
import { PostCardProps } from ".";

export default {
	title: data.posts[0].title,
	excerpt: data.posts[0].excerpt,
	cover: data.posts[0].cover,
	slug: data.posts[0].slug,
} as PostCardProps;
