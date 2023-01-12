import * as Styled from "./styles";

export type HtmlComponentProps = {
	html: string;
};

const HtmlComponent = ({ html }: HtmlComponentProps) => {
	return <Styled.Container dangerouslySetInnerHTML={{ __html: html }} />;
};

export default HtmlComponent;
