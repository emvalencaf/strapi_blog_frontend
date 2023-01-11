import { renderTheme } from "../../styles/render-theme";
import HtmlComponent from ".";
import { screen } from "@testing-library/react";

describe("<HtmlComponent />", () => {
  it("should render a html", () => {
    renderTheme(<HtmlComponent html={'<b>Children</b>'} />);
    const element = screen.getByText('Children');
    expect(element).toBeInTheDocument();
  });

  it("should match a snapshot", () => {
    const { container } = renderTheme(<HtmlComponent html={'<b>Children</b>'} />);
    expect(container).toMatchSnapshot();
  });
});
