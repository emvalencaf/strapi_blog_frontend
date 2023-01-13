import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";

// react component to be test
import Menu from ".";

// mock
import mock from "./mock";

describe("<Menu />", () => {
	it("should render Menu component with MenuLink and LogoLink", () => {
		renderTheme(<Menu {...mock} />);

		expect(
			screen.getByRole("link", { name: mock.links[0].text })
		).toBeInTheDocument();
		expect(screen.getByAltText(mock.blogName)).toHaveAttribute(
			"src",
			mock.logo
		);
	});
});
