// template
import BaseTemplate from "../Base";

// components
import Post from "../../components/Post";
import PostTags from "../../components/PostTags";

// styles
import * as Styled from "./styles";

// types
import { PostStrapi } from "../../shared-types/post-strapi";
import { SettingsStrapi } from "../../shared-types/settings-strapi";
export type PostTemplateProps = {
	settings: SettingsStrapi;
	post: PostStrapi;
};

const PostTemplate = ({ settings, post }: PostTemplateProps) => {
	return (
		<BaseTemplate settings={settings}>
			<Post {...post} />
			<Styled.TagsContainer>
				<PostTags tags={post.tags} />
			</Styled.TagsContainer>
		</BaseTemplate>
	);
};

export default PostTemplate;
