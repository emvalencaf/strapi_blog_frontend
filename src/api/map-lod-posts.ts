// types
import { MenuPropsLink } from "../components/Menu";
import { ResponseLoadPosts, ResponseRequest } from "./load-posts";
type CoverFromDataGraphQLAttributesProps = {
	data: {
		id: string;
		attributes: {
			alternativeText: string;
			url: string;
		};
	};
};
type LogoFromDataGraphQLAttributesProps = {
	data: {
		id: string;
		attributes: {
			alternativeText: string;
			url: string;
		};
	};
};
type CategoriesFromDataGraphQLAttributesProps = {
	data: {
		id: string;
		attributes: {
			displayName: string;
			slug: string;
		};
	}[];
};
type TagsFromDataGraphQLAttributesProps = {
	data: {
		id: string;
		attributes: {
			displayName: string;
			slug: string;
		};
	}[];
};
type AuthorFromDataGraphQLAttributesProps = {
	data: {
		id: string;
		attributes: {
			displayName: string;
			slug: string;
		};
	};
};
export type PostsFromDataGraphQLAttributesProps = {
	data: {
		id: string;
		attributes: {
			title: string;
			slug: string;
			excerpt: string;
			content: string;
			displayName: string;
			allowComments: boolean;
			logo: LogoFromDataGraphQLAttributesProps;
			cover: CoverFromDataGraphQLAttributesProps;
			tags: TagsFromDataGraphQLAttributesProps;
			categories: CategoriesFromDataGraphQLAttributesProps;
			author: AuthorFromDataGraphQLAttributesProps;
			createdAt: string;
		};
	}[];
};
export type SettingFromDataGraphQLAttributesProps = {
	data: {
		id: string;
		attributes: {
			blogName: string;
			blogDescription: string;
			menuLink: MenuPropsLink[];
			logo: LogoFromDataGraphQLAttributesProps;
			footer: string;
		};
	};
};
type DataGraphQLAttributesProps = {
	blogName?: string;
	blogDescription?: string;
	menuLink?: MenuPropsLink[];
	footer?: string;
	alternativeText?: string;
	url?: string;
	title?: string;
	slug?: string;
	excerpt?: string;
	content?: string;
	displayName?: string;
	allowComments?: boolean;
	logo?: LogoFromDataGraphQLAttributesProps;
	cover?: CoverFromDataGraphQLAttributesProps;
	tags?: TagsFromDataGraphQLAttributesProps;
	categories?: CategoriesFromDataGraphQLAttributesProps;
	author?: AuthorFromDataGraphQLAttributesProps;
};
type MapDataGraphQL = (dataGraphQL:ResponseRequest) => ResponseLoadPosts;
export const mapDataGraphQL: MapDataGraphQL = (dataGraphQL) => {
	const logo = {
		...dataGraphQL.setting.data.attributes.logo.data.attributes,
		id: dataGraphQL.setting.data.attributes.logo.data.id,
	};
	return {
		posts: {
			...dataGraphQL.posts.data.map((post) => {
				const author = {
					...post.attributes.author.data.attributes,
					id: post.attributes.author.data.id
				};
				const categories = post.attributes.categories.data.map((category) => {
					return {
						...category.attributes,
						id: category.id,
					};
				});
				const tags = post.attributes.tags.data.map((tag) => {
					return {
						...tag.attributes,
						id: tag.id,
					}
				});
				const cover = {
					...post.attributes.cover.data.attributes,
					id: post.attributes.cover.data.id,
				};

				return {
					...post.attributes,
					author,
					categories,
					tags,
					cover,
					id: post.id,
				};
			})
		},
		settings: {
			...dataGraphQL.setting.data.attributes,
			logo,
			id: dataGraphQL.setting.data.id,
		}
	}
};
