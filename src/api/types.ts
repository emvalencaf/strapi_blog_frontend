import { MenuPropsLink } from "../components/Menu";
import { PostStrapi } from "../shared-types/post-strapi";
import { SettingsStrapi } from "../shared-types/settings-strapi";
export type StringFilterInput = {
	and?: string;
	or?: string;
	not?: StringFilterInput;
	eq?: string;
	ne?: string;
	startsWith?: string;
	endsWith?: string;
	contains?: string;
	notContains?: string;
	containsi?: string;
	notContainsi?: string;
	gt?: string;
	gte?: string;
	lt?: string;
	lte?: string;
	null?: boolean;
	notNull?: boolean;
	in?: string;
	notIn?: string;
	between?: string;
};
export type ResponseLoadPosts = {
	posts: PostStrapi[];
	settings: SettingsStrapi;
	variables?: LoadPostsVariables;
};

export type ResponseRequest = {
	posts: PostsFromDataGraphQLAttributesProps;
	setting: SettingFromDataGraphQLAttributesProps;
};

export type LoadPostsVariables = {
	categorySlug?: StringFilterInput;
	postSlug?: StringFilterInput;
	postSearch?: string;
	authorSlug?: StringFilterInput;
	tagSlug?: StringFilterInput;
	sort?: string;
	start?: number;
	limit?: number;
};

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

type PostsFromDataGraphQLAttributesProps = {
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

type SettingFromDataGraphQLAttributesProps = {
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

export type MapDataGraphQL = (
	dataGraphQL: ResponseRequest
) => ResponseLoadPosts;
