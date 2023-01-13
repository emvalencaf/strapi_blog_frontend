import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";

// react component to be test
import PostCard from ".";

// mock
import mock from "./mock";

describe("<PostCard />", () => {
	it("should render PostCard component with heading, cover, link and excerpt", () => {
		renderTheme(<PostCard {...mock} />);

		expect(
			screen.getByRole("heading", { name: mock.title })
		).toBeInTheDocument();
		expect(
			screen.getByRole("img", { name: mock.title })
		).toBeInTheDocument();
		expect(screen.getByText(mock.excerpt)).toBeInTheDocument();
		expect(
			screen.getAllByRole("link", { name: mock.title })[0]
		).toHaveAttribute("href", `/post/${mock.slug}`);
	});

	it("should match a snapshot", () => {
		const { container } = renderTheme(<PostCard {...mock} />);

		expect(container).toMatchSnapshot();
	});
});
