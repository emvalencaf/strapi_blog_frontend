import { renderTheme } from "../../styles/render-theme";

// react component to be test
import PostTemplate from ".";

// mock
import mock from "./mock";

describe("<PostTemplate />", () => {
	it("should match a snapshot", () => {
		const { container } = renderTheme(<PostTemplate {...mock} />);

		expect(container).toMatchSnapshot();
	});
});
