import styled, { css } from "styled-components";

import { Title as HeadingStyles } from "../Heading/styles";

export const Wrapper = styled.div`
	${({ theme }) => css`
		${HeadingStyles} {
			margin-left: 0;
			margin-right: 0;
			margin-top: calc(${theme.spacings.small} - 1.4rem);
			margin-bottom: calc(${theme.spacings.small} - 1rem);
		}

		a {
			text-decoration: none;
			color: inherit;
			transition: all 350ms ease-in-out;
		}

		&:hover a {
			color: ${theme.colors.secondary};
		}

		&:hover img {
			opacity: 0.8;
		}
	`}
`;

export const Cover = styled.img`
	${() => css`
		max-width: 100%;
		transition: opacity 350ms ease-in-out;
	`}
`;

export const Excerpt = styled.p``;
