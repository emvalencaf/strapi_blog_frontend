import styled, { css } from "styled-components";

export const Wrapper = styled.footer`
	${({ theme }) => css`
		font-size: ${theme.font.sizes.small};
		color: ${theme.colors.darkerGray};

		.categories span::after {
			content: ", ";
		}

		.categories span:last-child::after {
			content: "";
		}

		a {
			color: ${theme.colors.secondary};
			text-decoration: none;
			transition: : all 350ms ease-in-out;

			&:hover {
				filter: brightness(50%);
			}
		}


	`}
`;
