import styled, { css } from "styled-components";

export const SearchContainer = styled.div`
	${({ theme }) => css`
		margin: 0 auto;
		margin-bottom: ${theme.spacings.xlarge};
		padding: 0 ${theme.spacings.large};
		max-width: 120rem;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;

		& form {
			display: flex;
			width: 80%;
			max-width: 800px;
			border: 2px solid ${theme.colors.darkerGray};
			border-radius: 2rem;
		}
	`}
`;

export const SearchInput = styled.input`
	${({ theme }) => css`
		padding: 0.5em ${theme.spacings.small};
		width: 100%;
		border: none;
		border-radius: 20px;
		background: transparent;

		&:focus {
			outline: none;
		}
	`}
`;

export const SearchButton = styled.button`
	${({ theme }) => css`
		width: 3rem;
		height: 3rem;
		border: none;
		padding: 0 0.2rem;
		border-left: 2px solid ${theme.colors.darkerGray};
		background: transparent;
		cursor: pointer;
		transition: all 350ms ease-in-out;
		color: inherit;
		&:hover {
			color: ${theme.colors.secondary};
		}
	`}
`;
