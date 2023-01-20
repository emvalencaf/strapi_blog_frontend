import { renderTheme } from "../../styles/render-theme";

// react component to be test
import SearchForm from ".";
import { fireEvent, logDOM, screen } from "@testing-library/react";

describe("<SearchForm />", () => {
	it("should fired component handleChange", () => {
		const setSearch = jest.fn((v) => v);
		renderTheme(<SearchForm handleChange={setSearch} />);

		const input = screen.queryByPlaceholderText("encontre posts");
		fireEvent.change(input, { target: { value: "test" } });

		expect(setSearch).toHaveBeenCalled();
	});

	it("should render a cancel-icon within the input", () => {
		const setSearch = jest.fn();
		renderTheme(<SearchForm handleChange={setSearch} disabled />);

		expect(screen.getByLabelText("Input disabled")).toBeInTheDocument();
	});

	it("should match a snapshot", () => {
		const setSearch = jest.fn();
		const { container } = renderTheme(
			<SearchForm handleChange={setSearch} />
		);

		expect(container).toMatchSnapshot();
	});
});
