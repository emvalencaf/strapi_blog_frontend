import { gql } from "graphql-request";

import { GRAPHQL_FRAGMENTS } from "./fragments";

export const GRAPHQL_QUERIES = gql`
	${GRAPHQL_FRAGMENTS}

	query GET_POSTS(
		$categorySlug: StringFilterInput
		$postSlug: StringFilterInput
		$postSearch: String
		$authorSlug: StringFilterInput
		$tagSlug: StringFilterInput
		$sort: [String] = "createdAt:desc"
		$start: Int = 0
		$limit: Int = 10
	) {
		setting {
			data {
				id
				attributes {
					...settings
				}
			}
		}

		posts(
			pagination: { start: $start, limit: $limit }
			sort: $sort
			filters: {
				categories: { slug: $categorySlug }
				or: [
					{ title: { contains: $postSearch } }
					{ content: { contains: $postSearch } }
					{ excerpt: { contains: $postSearch } }
				]
				author: { slug: $authorSlug }
				tags: { slug: $tagSlug }
				slug: $postSlug
			}
		) {
			data {
				id
				attributes {
					...post
				}
			}
		}
	}
`;
