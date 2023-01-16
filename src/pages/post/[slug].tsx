// components
import Head from "next/head";

// templates
import PostTemplate from "../../templates/PostTemplate";

// hooks
import { useRouter } from "next/router";

// API functions
import { loadPosts } from "../../api/load-posts";

// types
import { GetStaticPaths, GetStaticProps } from "next";
import { ResponseLoadPosts } from "../../api/types";

export default function PostPage({ posts, settings }: ResponseLoadPosts) {
	const router = useRouter();
	const post = posts[0];

	if (router.isFallback) return <h1>Loading...</h1>

	return (
		<>
			<Head>
				<title>{settings.blogName}</title>
				<meta  name="description" content={post.excerpt}/>
			</Head>
			<PostTemplate post={post} settings={settings} />
		</>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	let data: ResponseLoadPosts | null = null;
	let paths = [];

	try {
		data = await loadPosts();
		paths = data.posts.map(({slug}) => ({
			params: { slug },
		}))
	} catch (e) {
		data = null;
	}

	if (!data || !data.posts || !data.posts.length) {
		paths: [];
	}

	return {
		paths,
		fallback: true,
	}
};

export const getStaticProps: GetStaticProps<ResponseLoadPosts> = async (ctx) => {
	let data = null;

	try {
		data = await loadPosts({ postSlug: {
			eq: ctx.params.slug as string,
		} });
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
