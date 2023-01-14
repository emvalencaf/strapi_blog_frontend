import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";

// react component to be test
import ArticleMeta from ".";

// utils
import { formatDate } from "../../utils/format-date";

// mock
import mock from "./mock";

describe("<ArticleMeta />", () => {
	it("should render ArticleMeta component with author and category links", () => {
		renderTheme(<ArticleMeta {...mock} />);

		expect(
			screen.getByRole("link", { name: mock.author.displayName })
		).toHaveAttribute("href", `/author/${mock.author.slug}`);

		expect(
			screen.getByRole("link", { name: mock.categories[0].displayName })
		).toHaveAttribute("href", `/category/${mock.categories[0].slug}`);
	});

	it("should format date", () => {
		renderTheme(<ArticleMeta {...mock} />);

		expect(screen.getByText(formatDate(mock.createdAt))).toHaveAttribute(
			"datetime",
			mock.createdAt
		);
	});

	it("Should render ArticleMeta withou any author and category", () => {
		renderTheme(
			<ArticleMeta {...mock} author={undefined} categories={undefined} />
		);

		expect(
			screen.queryByRole("link", { name: mock.author.displayName })
		).not.toBeInTheDocument();
		expect(
			screen.queryByRole("link", { name: mock.categories[0].displayName })
		).not.toBeInTheDocument();
	});
	it("should match a snapshot", () => {
		const { container } = renderTheme(<ArticleMeta {...mock} />);

		expect(container).toMatchSnapshot();
	});
});
