import { gql } from "graphql-request";

export const GRAPHQL_FRAGMENTS = gql`
	fragment image on UploadFile {
		alternativeText
		url
	}

	fragment cover on Post {
		cover {
			data {
				id
				attributes {
					...image
				}
			}
		}
	}

	fragment menuLink on ComponentMenuMenuLink {
		id
		link
		text
		newTab
	}

	fragment settings on Setting {
		blogName
		blogDescription
		menuLink {
			...menuLink
		}
		logo {
			data {
				attributes {
					...image
				}
			}
		}
		footer
	}

	fragment author on Author {
		displayName
		slug
	}

	fragment authorPost on Post {
		author {
			data {
				id
				attributes {
					...author
				}
			}
		}
	}

	fragment tag on Tag {
		displayName
		slug
	}

	fragment tags on Post {
		tags {
			data {
				id
				attributes {
					...tag
				}
			}
		}
	}

	fragment category on Category {
		displayName
		slug
	}

	fragment categories on Post {
		categories {
			data {
				id
				attributes {
					...category
				}
			}
		}
	}

	fragment post on Post {
		title
		slug
		title
		excerpt
		content
		allowComments
		...cover
		...categories
		...tags
		...authorPost
	}
`;
