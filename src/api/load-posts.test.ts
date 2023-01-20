import config from "../config";

import request from "graphql-request";
import { mapDataGraphQL } from "./map-load-posts";
import { defaultLoadPostsVariables, loadPosts } from "./load-posts";

jest.mock("graphql-request");
jest.mock("./map-load-posts");
jest.mock("../graphql/queries", () => {
	return {
		GRAPHQL_QUERIES: "A_QUERY",
	};
});

describe("load-posts", () => {
	it("should call request with default variables", async () => {
		await loadPosts();
		expect(request).toHaveBeenCalledWith(
			config.graphqlURL,
			"A_QUERY",
			defaultLoadPostsVariables
		);
		expect(mapDataGraphQL).toBeCalled();
	});

	it("should call request with custom variables", async () => {
		await loadPosts({
			authorSlug: {
				eq: "ok",
			},
			tagSlug: { eq: "tag" },
			categorySlug: { eq: "cat" },
			limit: 100,
			postSearch: "SEARCH",
			postSlug: { eq: "post" },
			sort: "SORT",
			start: 1,
		});

		expect(request).toHaveBeenCalledWith(config.graphqlURL, "A_QUERY", {
			authorSlug: { eq: "ok" },
			tagSlug: { eq: "tag" },
			categorySlug: { eq: "cat" },
			limit: 100,
			postSearch: "SEARCH",
			postSlug: { eq: "post" },
			sort: "SORT",
			start: 1,
		});

		expect(mapDataGraphQL).toBeCalled();
	});
});
