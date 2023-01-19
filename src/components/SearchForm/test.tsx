import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";

// react component to be test
import SearchForm, { SearchFormProps } from ".";

const mock = {
	query: "testando",
} as SearchFormProps;

describe("<SearchForm />", () => {
	it("should match a snapshot", () => {
		const { container } = renderTheme(<SearchForm />);

		expect(container).toMatchSnapshot();
	});
});
