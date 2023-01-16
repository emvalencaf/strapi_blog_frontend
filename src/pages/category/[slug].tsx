// components
import Head from "next/head";

// templates
import PostsTemplate from "../../templates/PostsTemplate";

// hooks
import { useRouter } from "next/router";

// API functions
import { loadPosts } from "../../api/load-posts";

// types
import { GetStaticPaths, GetStaticProps } from "next";
import { ResponseLoadPosts } from "../../api/types";

export default function CategoryPage({ posts, settings }: ResponseLoadPosts) {
	const router = useRouter();

	if (router.isFallback) return <h1>Loading...</h1>

	const categoryName = posts[0].categories.filter(category => category.slug === router.query.slug)[0].displayName;
	return (
		<>
			<Head>
				<title>Category:{categoryName} - {settings.blogName}</title>
				<meta  name="description" content={settings.blogDescription}/>
			</Head>
			<PostsTemplate posts={posts} settings={settings} />
		</>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [],
		fallback: true,
	}
};

export const getStaticProps: GetStaticProps<ResponseLoadPosts> = async (ctx) => {
	let data = null;

	try {
		data = await loadPosts({ categorySlug: {
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
