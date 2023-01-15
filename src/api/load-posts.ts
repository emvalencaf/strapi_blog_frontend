import { request } from "graphql-request";
import config from "../config";
import { GRAPHQL_QUERIES } from "../graphql/queries";

// imported functions
import { mapDataGraphQL } from "./map-lod-posts";

// type
import { LoadPostsVariables, ResponseLoadPosts, ResponseRequest } from "./types";

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
