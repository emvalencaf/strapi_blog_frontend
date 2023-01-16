// components
import Head from "next/head";

// templates
import PostsTemplate from "../templates/PostsTemplate";

// API functions
import { loadPosts } from "../api/load-posts";

// types
import { GetStaticProps } from "next";
import { ResponseLoadPosts } from "../api/types";

export default function Index({ posts, settings }: ResponseLoadPosts) {
	return (
		<>
			<Head>
				<title>{settings.blogName}</title>
				<meta  name="description" content={settings.blogDescription}/>
			</Head>
			<PostsTemplate posts={posts} settings={settings} />
		</>
	);
}

export const getStaticProps: GetStaticProps<ResponseLoadPosts> = async () => {
	let data = null;

	try {
		data = await loadPosts();
	} catch (e) {
		data = null;
	}

	if (!data || !data.posts || !data.posts.length) {
		return {
			notFound: true,
		};
	};

	return {
		props: {
			posts: data.posts,
			settings: data.settings,
		},
		revalidate: 24 * 60 * 60
	};
};
