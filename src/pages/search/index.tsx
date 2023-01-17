// components
import Head from "next/head";

// templates
import PostsTemplate from "../../templates/PostsTemplate";

// hooks
import { useRouter } from "next/router";

// API functions
import { defaultLoadPostsVariables, loadPosts } from "../../api/load-posts";

// types
import { GetServerSideProps } from "next";
import { ResponseLoadPosts } from "../../api/types";

export default function SearchPage({
	posts,
	settings,
	variables,
}: ResponseLoadPosts) {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>
					Pesquisa:{router.query.q} - {settings.blogName}
				</title>
				<meta name="description" content={settings.blogDescription} />
			</Head>
			<PostsTemplate
				posts={posts}
				settings={settings}
				variables={variables}
			/>
		</>
	);
}

export const getServerSideProps: GetServerSideProps<ResponseLoadPosts> = async (
	ctx
) => {
	let data = null;
	const query = ctx.query.q || "";

	if (!query) {
		return {
			notFound: true,
		};
	}

	const variables = {
		postSearch: query as string,
	};

	try {
		data = await loadPosts(variables);
	} catch (e) {
		data = null;
	}

	if (!data || !data.posts) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			posts: data.posts,
			settings: data.settings,
			variables: {
				...defaultLoadPostsVariables,
				...variables,
			},
		},
	};
};
