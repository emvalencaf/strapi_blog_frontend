import styled, { css, DefaultTheme } from "styled-components";

// imported styled
import { Title as HeadingStyles } from "../Heading/styles";

// types
type MenuBehaviorParams = {
	menuVisible: boolean;
	theme: DefaultTheme;
};

const wrapperChanger = (menuVisible: boolean, theme: DefaultTheme) => css`
	@media ${theme.media.lteMedium} {
		left: ${menuVisible ? "0" : "-32rem"};
	}

	left: ${menuVisible ? "0" : "-30rem"};
	overflow-y: ${menuVisible ? "auto" : "hidden"};
`;

const buttonChanger = (menuVisible: boolean, theme: DefaultTheme) => css`
	@media ${theme.media.lteMedium} {
		left: ${menuVisible ? "26rem" : "1rem"};
	}

	left: ${menuVisible ? "26rem" : "-1rem"};
	color: ${menuVisible ? theme.colors.secondary : theme.colors.white};
`;

export const Wrapper = styled.div<MenuBehaviorParams>`
	${({ theme, menuVisible }) => css`
		background: ${theme.colors.primary};
		padding: ${theme.spacings.large};
		display: flex;
		position: fixed;
		z-index: 1;
		width: 100%;
		max-width: 32rem;
		height: 100vh;
		top: 0;
		left: 0;
		transition: all 350ms ease-in-out;
		${wrapperChanger(menuVisible, theme)}
	`}
`;

export const Nav = styled.nav`
	${() => css`
		margin: auto;
		width: 100%;
	`}
`;

export const Logo = styled.div`
	${({ theme }) => css`
		${HeadingStyles} {
			display: flex;
			justify-content: center;
			margin: 0;
			margin-bottom: ${theme.spacings.xlarge};

			img {
				border: 0.5rem solid ${theme.colors.secondary};
			}
		}
	`}
`;

export const OpenClose = styled.a<MenuBehaviorParams>`
	${({ theme, menuVisible }) => css`
		position: fixed;
		top: ${theme.spacings.medium};
		color: ${theme.colors.white};
		background: ${theme.colors.primary};
		z-index: 2;
		width: 3rem;
		height: 3rem;
		left: 26rem;
		transition: all 350ms ease-in-out;
		${buttonChanger(menuVisible, theme)}
	`}
`;
