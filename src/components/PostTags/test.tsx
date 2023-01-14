import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";

// react component to be test
import PostTags from ".";

// mock
import mock from "./mock";

describe("<PostTags />", () => {
	it("should render PostTags component without any tags", () => {
		renderTheme(<PostTags />);

		expect(
			screen.queryByRole("link", { name: mock.tags[0].displayName })
		).not.toBeInTheDocument();
	});

	it("should render PostTags with links", () => {
		renderTheme(<PostTags {...mock} />);

		expect(screen.getAllByRole("link")).toHaveLength(mock.tags.length);
	});

	it("should match a snapshot", () => {
		const { container } = renderTheme(<PostTags {...mock} />);

		expect(container).toMatchSnapshot();
	});
});
