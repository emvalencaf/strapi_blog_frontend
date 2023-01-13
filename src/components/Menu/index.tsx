//icons
import { Menu as MenuIcon } from "@styled-icons/material-outlined";
// components
import LogoLink from "../LogoLink";
import MenuLink from "../MenuLink";

// styles
import * as Styled from "./styles";

// types
export type MenuPropsLink = {
	id: string;
	text: string;
	link: string;
	newTab?: boolean;
};
export type MenuProps = {
	logo: string;
	blogName: string;
	links: MenuPropsLink[];
};

const Menu = ({ logo, blogName, links }: MenuProps) => {
	return (
		<>
			<Styled.OpenClose
				href="#"
				aria-label="Open or close menu"
				title="Open or close menu"
			>
				<MenuIcon aria-label="Open menu" />
			</Styled.OpenClose>
			<Styled.Wrapper>
				<Styled.Nav>
					<Styled.Logo>
						<LogoLink srcImg={logo} text={blogName} link="/" />
					</Styled.Logo>
					{links.map((link) => (
						<MenuLink
							key={link.id}
							link={link.link}
							newTab={link.newTab}
						>
							{link.text}
						</MenuLink>
					))}
				</Styled.Nav>
			</Styled.Wrapper>
		</>
	);
};

export default Menu;
