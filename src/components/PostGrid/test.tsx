import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";

// react component to be test
import PostGrid from ".";

// mock
import mock from "./mock";

describe("<PostGrid />", () => {
	it("Should render a PostGrid component without any posts", () => {
		renderTheme(<PostGrid />);

		expect(screen.getByText("Nenhum post encontrado")).toBeInTheDocument();
		expect(
			screen.queryByRole("heading", { name: mock.posts[0].title })
		).not.toBeInTheDocument();
	});

	it("Should render a PostGrid component with posts", () => {
		renderTheme(<PostGrid {...mock} />);

		expect(
			screen.getByRole("heading", { name: mock.posts[0].title })
		).toBeInTheDocument();
	});

	it("match a snapshot", () => {
		const { container } = renderTheme(<PostGrid {...mock} />);

		expect(container).toMatchSnapshot();
	});
});
