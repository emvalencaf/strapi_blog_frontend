import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";

// react component to be test
import Header from ".";

// mock
import mock from "./mock";

describe("<Header />", () => {
	it("should render Header component only with logo image", () => {
		renderTheme(<Header {...mock} />);
		expect(
			screen.getByAltText(`${mock.blogName} - ${mock.blogDescription}`)
		).toHaveAttribute("src", mock.logo);
		expect(
			screen.queryByRole("heading", { name: mock.blogName })
		).not.toBeInTheDocument();
	});

	it("should render Header component with logo image, text and a heading", () => {
		renderTheme(<Header {...mock} showText={true} />);

		expect(screen.getByText(mock.blogDescription)).toBeInTheDocument();
		expect(
			screen.getByRole("heading", { name: mock.blogName })
		).toBeInTheDocument();
	});

	it("should match snapshot", () => {
		const { container } = renderTheme(<Header {...mock} />);

		expect(container).toMatchSnapshot();
	});
});
