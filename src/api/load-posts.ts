import { request } from "graphql-request";
import config from "../config";
import { GRAPHQL_QUERIES } from "../graphql/queries";

// imported functions
import { mapDataGraphQL } from "./map-load-posts";

// type
import {
	LoadPostsVariables,
	ResponseLoadPosts,
	ResponseRequest,
} from "./types";

export const defaultLoadPostsVariables: LoadPostsVariables = {
	sort: "createdAt:desc",
	start: 0,
	limit: 10,
};

export const loadPosts = async (
	variables: LoadPostsVariables = {}
): Promise<ResponseLoadPosts> => {
	const data: ResponseRequest = await request(
		config.graphqlURL,
		GRAPHQL_QUERIES,
		{
			...defaultLoadPostsVariables,
			...variables,
		}
	);
	return mapDataGraphQL(data);
};
