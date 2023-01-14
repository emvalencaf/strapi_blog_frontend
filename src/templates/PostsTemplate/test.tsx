import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";

// react component to be test
import PostsTemplate from ".";

// mock
import mock from "./mock";

describe("<PostsTemplate />", () => {
	it("should render a PostsTempalte without posts", () => {
		renderTheme(<PostsTemplate {...mock} posts={undefined} />);

		expect(screen.getByText("Nenhum post encontrado")).toBeInTheDocument();
	});
	it("should match a snapshot", () => {
		const { container } = renderTheme(<PostsTemplate {...mock} />);

		expect(container).toMatchSnapshot();
	});
});
