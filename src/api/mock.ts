import { ResponseLoadPosts, ResponseRequest } from "./types";

export const mockResponseRequest = {
	setting: {
		data: {
			id: "1",
			attributes: {
				blogName: "lorem ipsum blog",
				blogDescription: "lorem ipsum blog",
				menuLink: [
					{
						id: "1",
						link: "#link1",
						text: "link1",
						newTab: false,
					},
					{
						id: "2",
						link: "#link2",
						text: "link2",
						newTab: false,
					},
				],
				logo: {
					data: {
						attributes: {
							alternativeText: null,
							url: "https://res.cloudinary.com/dnk5clykr/image/upload/v1673403271/coding_logo_design_template_vector_70ae4b4683.jpg",
						},
					},
				},
				footer: "<p>lorem ipsum footer</p>",
			},
		},
	},
	posts: {
		data: [
			{
				id: "1",
				attributes: {
					title: "Lorem ipsum",
					slug: "lorem-ipsum",
					excerpt:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet cursus diam, et hendrerit tortor suscipit at. Praesent quis felis turpis. Nullam a neque ante. Praesent scelerisque pharetra.",
					content:
						'<h2>HTML Ipsum Presents</h2><p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <i>Aenean ultricies mi vitae est.</i> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p><h2>Header Level 2</h2><ol><li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li><li>Aliquam tincidunt mauris eu risus.</li></ol><blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote><h3>Header Level 3</h3><ul><li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li><li>Aliquam tincidunt mauris eu risus.</li></ul><p>\n\t\t\t\t#header h1 a {\n\t\t\t\t &nbsp;display: block;\n\t\t\t\t &nbsp;width: 300px;\n\t\t\t\t &nbsp;height: 80px;\n\t\t\t\t}\n\t\t\t\t</p>',
					allowComments: true,
					cover: {
						data: {
							id: "9",
							attributes: {
								alternativeText: null,
								url: "https://res.cloudinary.com/dnk5clykr/image/upload/v1673378509/what_is_coding_1024x683_b9743d63c6.jpg",
							},
						},
					},
					categories: {
						data: [
							{
								id: "1",
								attributes: {
									displayName: "javascript",
									slug: "javascript",
								},
							},
						],
					},
					tags: {
						data: [
							{
								id: "3",
								attributes: {
									displayName: "frontend",
									slug: "frontend",
								},
							},
							{
								id: "1",
								attributes: {
									displayName: "reactjs",
									slug: "reactjs",
								},
							},
							{
								id: "2",
								attributes: {
									displayName: "nextjs",
									slug: "nextjs",
								},
							},
						],
					},
					author: {
						data: {
							id: "1",
							attributes: {
								displayName: "Edson Valença",
								slug: "edson-valenca",
							},
						},
					},
				},
			},
		],
	},
} as ResponseRequest;

export const mockResponseLoadPost = {
	settings: {
		id: "1",

		blogName: "lorem ipsum blog",
		blogDescription: "lorem ipsum blog",
		menuLink: [
			{
				id: "1",
				link: "#link1",
				text: "link1",
				newTab: false,
			},
			{
				id: "2",
				link: "#link2",
				text: "link2",
				newTab: false,
			},
		],
		logo: {
			id: null,
			alternativeText: null,
			url: "https://res.cloudinary.com/dnk5clykr/image/upload/v1673403271/coding_logo_design_template_vector_70ae4b4683.jpg",
		},
		footer: "<p>lorem ipsum footer</p>",
	},
	posts: [
		{
			id: "1",

			title: "Lorem ipsum",
			slug: "lorem-ipsum",
			excerpt:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet cursus diam, et hendrerit tortor suscipit at. Praesent quis felis turpis. Nullam a neque ante. Praesent scelerisque pharetra.",
			content:
				'<h2>HTML Ipsum Presents</h2><p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <i>Aenean ultricies mi vitae est.</i> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p><h2>Header Level 2</h2><ol><li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li><li>Aliquam tincidunt mauris eu risus.</li></ol><blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote><h3>Header Level 3</h3><ul><li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li><li>Aliquam tincidunt mauris eu risus.</li></ul><p>\n\t\t\t\t#header h1 a {\n\t\t\t\t &nbsp;display: block;\n\t\t\t\t &nbsp;width: 300px;\n\t\t\t\t &nbsp;height: 80px;\n\t\t\t\t}\n\t\t\t\t</p>',
			allowComments: true,
			cover: {
				id: "9",

				alternativeText: null,
				url: "https://res.cloudinary.com/dnk5clykr/image/upload/v1673378509/what_is_coding_1024x683_b9743d63c6.jpg",
			},
			categories: [
				{
					id: "1",

					displayName: "javascript",
					slug: "javascript",
				},
			],

			tags: [
				{
					id: "3",

					displayName: "frontend",
					slug: "frontend",
				},
				{
					id: "1",

					displayName: "reactjs",
					slug: "reactjs",
				},
				{
					id: "2",

					displayName: "nextjs",
					slug: "nextjs",
				},
			],

			author: {
				id: "1",

				displayName: "Edson Valença",
				slug: "edson-valenca",
			},
		},
	],
} as ResponseLoadPosts;
