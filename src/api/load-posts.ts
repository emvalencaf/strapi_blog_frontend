import { request } from "graphql-request";
import config from "../config";
import { GRAPHQL_QUERIES } from "../graphql/queries";

// type
import { PostStrapi } from "../shared-types/post-strapi";
import { SettingsStrapi } from "../shared-types/settings-strapi";
import { mapDataGraphQL, PostsFromDataGraphQLAttributesProps, SettingFromDataGraphQLAttributesProps } from "./map-lod-posts";
type StringFilterInput = {
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
};
export type ResponseRequest = {
	posts: PostsFromDataGraphQLAttributesProps;
	setting: SettingFromDataGraphQLAttributesProps;
};

export type LoadPostsVariables = {
	categorySlug?: StringFilterInput;
	postSlug?: StringFilterInput;
	postSearch?: StringFilterInput;
	authorSlug?: StringFilterInput;
	tagSlug?: StringFilterInput;
	sort?: string;
	start?: number;
	limit?: number;
};

export const loadPosts = async (
	variables: LoadPostsVariables = {}
): Promise<ResponseLoadPosts> => {
	const defaultVariables: LoadPostsVariables = {
		sort: "createdAt:desc",
		start: 0,
		limit: 10,
	};
	const data: ResponseRequest = await request(
		config.graphqlURL,
		GRAPHQL_QUERIES,
		{
			...defaultVariables,
			...variables,
		}
	);
	return mapDataGraphQL(data);
};
