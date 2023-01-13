import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";

// react component to be test
import ArticleHeader from ".";

// mock
import mock from "./mock";

describe("<ArticleHeader />", () => {
	it("should render ArticleHeader component with image, heading and ArticleMeta", () => {
		renderTheme(<ArticleHeader {...mock} />);

		expect(
			screen.getByRole("heading", { name: mock.title })
		).toBeInTheDocument();
		expect(screen.getByAltText(mock.title)).toHaveAttribute(
			"src",
			mock.cover.url
		);
		expect(
			screen.getByRole("link", { name: mock.author.displayName })
		).toHaveAttribute("href", `/author/${mock.author.slug}`);
	});

	it("should match snapshot", () => {
		const { container } = renderTheme(<ArticleHeader {...mock} />);

		expect(container).toMatchSnapshot();
	});
});
