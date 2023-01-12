import styled, { css } from "styled-components";

export const Container = styled.div`
	${({ theme }) => css`
    @media ${theme.media.lteMedium} {
      font-size: 2rem;

      .image-style-side {
        max-width: 100%;
        float: none;
      }
    }

    font-size: ${theme.font.sizes.medium};


    p {
      margin: ${theme.spacings.xlarge} 0;
    }

    a, a:visited, a:link {
      color: ${theme.colors.secondary};
      text-decoration: none;
      transition: all 350ms ease-in-out;
    }

    a:hover {
      filter: brightness(50%);
    }

    pre {
      font-size: ${theme.font.sizes.small};
      background-color: ${theme.colors.primary};
      padding: ${theme.spacings.medium};
      font-family: monospace;
      color: ${theme.colors.white}
      margin: ${theme.spacings.xlarge};
      width: 100%;
      overflow-x: auto;
    }

    .image {
      background: ${theme.colors.mediumGray};
      line-height: 0;
      margin: ${theme.spacings.xlarge} 0;
    }

    .image figcaption {
      font-size: ${theme.font.sizes.small};
      padding: ${theme.spacings.small};
      text-align: center;
      line-height: 1.3;
    }


    .image-style-side {
      max-width: 50%;
      float: right;
      margin: ${theme.spacings.medium};
    }

    hr {
      border: none;
      border-bottom: 0.1rem solid $${theme.colors.mediumGray};
    }

    ul, ol {
      margin: ${theme.spacings.xlarge};
    }

    .table {
      width: 100%;
      overflow: hidden;
      overflow-x: auto;

    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    .table td, .table th {
      padding: ${theme.spacings.small};
      border: 0.1rem solid ${theme.colors.mediumGray};
    }
  `}
`;
