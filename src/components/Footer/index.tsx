import * as Styled from "./styles";
import TextComponent from "../TextComponent";

export type FooterProps = {
  footerHtml: string;
};

const Footer = ({ footerHtml }: FooterProps) => {
  return (
    <Styled.Container>
      <TextComponent>{footerHtml}</TextComponent>
    </Styled.Container>
  );
};

export default Footer;
