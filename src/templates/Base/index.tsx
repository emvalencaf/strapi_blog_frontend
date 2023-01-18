// hooks
import { useRouter } from "next/router";

// icons
import { SearchAlt } from "@styled-icons/boxicons-regular";
// components
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GoTop from "../../components/GoTop";
import ToggleTheme from "../../components/ToggleTheme";
// styles
import * as Styled from "./styles";

// types
import { SettingsStrapi } from "../../shared-types/settings-strapi";
import SearchForm from "../../components/SearchForm";

export type BaseTemplateProps = {
	settings: SettingsStrapi;
	children: React.ReactNode;
};

const BaseTemplate = ({ settings, children }: BaseTemplateProps) => {
	const router = useRouter();
	return (
		<Styled.Wrapper>
			<ToggleTheme />
			<Menu
				links={settings.menuLink}
				blogName={settings.blogName}
				logo={settings.logo.url}
			/>
			<Styled.HeaderContainer>
				<Header
					blogName={settings.blogName}
					blogDescription={settings.blogDescription}
					logo={settings.logo.url}
				/>
			</Styled.HeaderContainer>
			<SearchForm query={router?.query?.q || ""} />
			<Styled.ContentContainer>{children}</Styled.ContentContainer>
			<Styled.FooterContainer>
				<Footer footerHtml={settings.footer} />
			</Styled.FooterContainer>
			<GoTop />
		</Styled.Wrapper>
	);
};

export default BaseTemplate;
