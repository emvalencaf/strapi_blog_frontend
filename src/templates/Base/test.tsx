import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";

// react component to be test
import BaseTemplate from ".";

// mock
import mock from "./mock";

describe("<BaseTemplate />", () => {
	it("should render BaseTemplate with Menu, Header, GoTop and Footer, components", () => {
		renderTheme(<BaseTemplate {...mock} />);
		const htmlRegexG = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;

		expect(
			screen.getByRole("img", {
				name: `${mock.settings.blogName} - ${mock.settings.blogDescription}`,
			})
		).toBeInTheDocument();
		expect(screen.getByLabelText("Open or close menu")).toBeInTheDocument();
		expect(
			screen.getByText(mock.settings.text.replaceAll(htmlRegexG, ""))
		).toBeInTheDocument();
		expect(screen.getByLabelText("Go to top")).toBeInTheDocument();
	});

	it("should match a snapshot", () => {
		const { container } = renderTheme(<BaseTemplate {...mock} />);

		expect(container).toMatchSnapshot();
	});
});
