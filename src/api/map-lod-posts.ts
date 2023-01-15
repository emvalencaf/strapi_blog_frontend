// types
import { MapDataGraphQL } from "./types";

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
