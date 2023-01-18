import { PostProps } from "../components/Post";
import { Tag } from "./tags";

export type PostStrapi = PostProps & {
	tags: Tag[];
	slug: string;
	allowComments: boolean;
};
