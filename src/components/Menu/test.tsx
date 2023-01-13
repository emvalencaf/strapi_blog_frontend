import { fireEvent, screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";

// react component to be test
import Menu from ".";

// mock
import mock from "./mock";

describe("<Menu />", () => {
	it("should render Menu component with open menu icon and <nav> hidden", () => {
		renderTheme(<Menu {...mock} />);

		const buttonLink = screen.getByRole("link", {
			name: "Open or close menu",
		});
		const openMenuIcon = screen.getByLabelText("Open menu");

		expect(buttonLink).toBeInTheDocument();
		expect(openMenuIcon).toBeInTheDocument();
		expect(screen.queryByLabelText("Close menu")).not.toBeInTheDocument();
		expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
	});

	it("should render Menu component with proper logic to open and close menu", () => {
		renderTheme(<Menu {...mock} />);

		const buttonLink = screen.getByRole("link", {
			name: "Open or close menu",
		});

		fireEvent.click(buttonLink);

		expect(screen.getByLabelText("Close menu")).toBeInTheDocument();
		expect(screen.queryByLabelText("Open menu")).not.toBeInTheDocument();
		expect(screen.getByRole("navigation")).toBeInTheDocument();
		expect(
			screen.getByRole("heading", { name: mock.blogName })
		).toBeInTheDocument();
		expect(
			screen.getByRole("img", { name: mock.blogName })
		).toHaveAttribute("src", mock.logo);
		expect(
			screen.getByRole("navigation").querySelectorAll(`a:not([href="/"])`)
		).toHaveLength(mock.links.length);

		fireEvent.click(buttonLink);

		expect(buttonLink).toBeInTheDocument();
		expect(screen.queryByLabelText("Close menu")).not.toBeInTheDocument();
		expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
	});

	it("Should match a snapshot", () => {
		const { container } = renderTheme(<Menu {...mock} />);

		expect(container).toMatchSnapshot();
	});
});
