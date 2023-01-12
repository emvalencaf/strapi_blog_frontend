// components
import Heading from "../Heading";
import LogoLink from "../LogoLink";

// styles
import * as Styled from "./styles";

// types
export type HeaderProps = {
	blogName: string;
	blogDescription: string;
	logo: string;
	showText?: boolean;
};

const Header = ({
	blogName,
	blogDescription,
	logo,
	showText = false,
}: HeaderProps) => {
	return (
		<Styled.Wrapper>
			<LogoLink
				srcImg={logo}
				text={`${blogName} - ${blogDescription}`}
				link="/"
			/>
			{showText && (
				<Styled.Content>
					<Heading size="small" as="h2" colorDark={true}>
						{blogName}
					</Heading>
					<p>{blogDescription}</p>
				</Styled.Content>
			)}
		</Styled.Wrapper>
	);
};

export default Header;
