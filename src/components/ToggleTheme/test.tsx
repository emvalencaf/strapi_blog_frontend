import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";

// react component to be test
import ToggleTheme from ".";

describe("<ToggleTheme />", () => {
	it("should render component it props default values", () => {
		renderTheme(<ToggleTheme />);

		expect(
			screen.getByLabelText("Toggle light and dark modesding")
		).toBeInTheDocument();
	});

	it("should match a snapshot", () => {
		const { container } = renderTheme(<ToggleTheme />);

		expect(container).toMatchSnapshot();
	});
});
