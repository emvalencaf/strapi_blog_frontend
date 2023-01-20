// hooks
import { useEffect, useState } from "react";

// API functions
import { loadPosts } from "../../api/load-posts";

// template
import BaseTemplate from "../Base";

// components
import PostGrid from "../../components/PostGrid";

// types
import { PostStrapi } from "../../shared-types/post-strapi";
import { SettingsStrapi } from "../../shared-types/settings-strapi";
import { LoadPostsVariables } from "../../api/types";
export type PostsTemplateProps = {
	settings: SettingsStrapi;
	posts?: PostStrapi[];
	variables?: LoadPostsVariables;
};

// styles
import * as Styled from "./styles";

const PostsTemplate = ({
	settings,
	posts = [],
	variables,
}: PostsTemplateProps) => {
	// states
	const [statePosts, setStatePosts] = useState(posts);
	const [stateVariables, setStateVariables] = useState(variables);
	const [buttonDisabled, setButtonDisabled] = useState(false);
	const [noMorePosts, setNoMorePosts] = useState(false);

	useEffect(() => {
		setStatePosts(posts);
		setNoMorePosts(false);
		setButtonDisabled(false);
		setStateVariables(variables);
	}, [posts, variables]);

	// synthetic event functions
	const handleLoadMorePosts = async () => {
		setButtonDisabled(true);

		const newVariables = {
			...stateVariables,
			start: stateVariables.start + stateVariables.limit,
			limit: stateVariables.limit,
		};

		const morePosts = await loadPosts(newVariables);

		if (!morePosts || !morePosts.posts || !morePosts.posts.length) {
			setNoMorePosts(true);
			return;
		}

		setButtonDisabled(false);
		setStateVariables(newVariables);
		setStatePosts((posts) => [...posts, ...morePosts.posts]);
	};

	return (
		<BaseTemplate settings={settings}>
			<PostGrid posts={statePosts} />
			<Styled.ButtonContainer>
				{statePosts && statePosts.length ? (
					<Styled.Button
						onClick={handleLoadMorePosts}
						disabled={buttonDisabled}
					>
						{noMorePosts ? "sem mais posts" : "Carregar mais"}
					</Styled.Button>
				) : null}
			</Styled.ButtonContainer>
		</BaseTemplate>
	);
};

export default PostsTemplate;
