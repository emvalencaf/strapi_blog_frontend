import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";

// react component to be test
import Post from ".";

// utils
import { formatDate } from "../../utils/format-date";

// mock
import mock from "./mock";

describe("<Post />", () => {
	it("should render Post component with header, excerpt, cover, metadata and content", () => {
		renderTheme(<Post {...mock} />);

		expect(
			screen.getByRole("heading", { name: mock.title })
		).toBeInTheDocument();
		expect(
			screen.getByRole("img", { name: mock.title })
		).toBeInTheDocument();
		expect(
			screen.getByText(formatDate(mock.createdAt))
		).toBeInTheDocument();
	});
	it("should match a snapshot", () => {
		const { container } = renderTheme(<Post {...mock} />);

		expect(container).toMatchSnapshot();
	});
});
