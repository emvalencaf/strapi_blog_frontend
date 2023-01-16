// components
import Head from "next/head";

// templates
import PostsTemplate from "../../templates/PostsTemplate";

// hooks
import { useRouter } from "next/router";

// API functions
import { defaultLoadPostsVariables, loadPosts } from "../../api/load-posts";

// types
import { GetStaticPaths, GetStaticProps } from "next";
import { ResponseLoadPosts } from "../../api/types";

export default function AuthorPage({
	posts,
	settings,
	variables,
}: ResponseLoadPosts) {
	const router = useRouter();

	if (router.isFallback) return <h1>Loading...</h1>;

	return (
		<>
			<Head>
				<title>
					Author:{posts[0].author.displayName} - {settings.blogName}
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

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [],
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps<ResponseLoadPosts> = async (
	ctx
) => {
	let data = null;
	const variables = {
		authorSlug: {
			eq: ctx.params.slug as string,
		},
	};
	try {
		data = await loadPosts(variables);
	} catch (e) {
		data = null;
	}

	if (!data || !data.posts || !data.posts.length) {
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
		revalidate: 24 * 60 * 60,
	};
};
