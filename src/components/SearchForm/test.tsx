import { renderTheme } from "../../styles/render-theme";

// react component to be test
import SearchForm from ".";

describe("<SearchForm />", () => {
	it("should match a snapshot", () => {
		const { container } = renderTheme(<SearchForm />);

		expect(container).toMatchSnapshot();
	});
});
