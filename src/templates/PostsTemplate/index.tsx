// template
import BaseTemplate from "../Base";

// components
import PostGrid from "../../components/PostGrid";

// types
import { PostStrapi } from "../../shared-types/post-strapi";
import { SettingsStrapi } from "../../shared-types/settings-strapi";
export type PostsTemplateProps = {
	settings: SettingsStrapi;
	posts?: PostStrapi[];
};

const PostsTemplate = ({ settings, posts = [] }: PostsTemplateProps) => {
	return (
		<BaseTemplate settings={settings}>
			<PostGrid posts={posts} />
		</BaseTemplate>
	);
};

export default PostsTemplate;
