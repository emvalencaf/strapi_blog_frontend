// hooks
import { useRouter } from "next/router";

// icons
import { SearchAlt } from "@styled-icons/boxicons-regular";
// components
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GoTop from "../../components/GoTop";

// styles
import * as Styled from "./styles";

// types
import { SettingsStrapi } from "../../shared-types/settings-strapi";

export type BaseTemplateProps = {
	settings: SettingsStrapi;
	children: React.ReactNode;
};

const BaseTemplate = ({ settings, children }: BaseTemplateProps) => {
	const router = useRouter();
	return (
		<Styled.Wrapper>
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
			<Styled.SearchContainer>
				<form action="/search/" method="GET">
					<Styled.SearchInput
						type="search"
						placeholder="encontre posts"
						name="q"
						defaultValue={router.query.q}
					/>
					<Styled.SearchButton>
						<SearchAlt aria-label="search button" />
					</Styled.SearchButton>
				</form>
			</Styled.SearchContainer>
			<Styled.ContentContainer>{children}</Styled.ContentContainer>
			<Styled.FooterContainer>
				<Footer footerHtml={settings.footer} />
			</Styled.FooterContainer>
			<GoTop />
		</Styled.Wrapper>
	);
};

export default BaseTemplate;
