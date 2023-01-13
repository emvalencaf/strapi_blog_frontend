import { PostProps } from ".";

// content mock
import mock from "../HtmlComponent/mock";

export default {
	title: "lorem ipsum title",
	excerpt: "lorem ipsum lorem impsum",
	cover: {
		url: "image.jpg",
	},
	createdAt: "2021-03-02T15:16:09.246+00:00",
	author: {
		id: "woek2131239481",
		slug: "lorem-ipsum",
		displayName: "Lorem ipsum",
	},
	categories: [
		{
			id: "ijmwerw19212",
			displayName: "Tech",
			slug: "tech",
		},
		{
			id: "wiejj293888923",
			displayName: "Javascript",
			slug: "javascript",
		},
	],
	content: mock,
} as PostProps;
