// hooks
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

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
	const [searchValue, setSearchValue] = useState(router?.query?.q || "");
	const [searchDisabled, setSearchDisabled] = useState(true);
	const [isReady, setIsReady] = useState(true);
	const inputTimeout = useRef(null);

	useEffect(() => {
		isReady ? setSearchDisabled(false) : setSearchDisabled(true);
	}, [isReady]);

	useEffect(() => {
		clearTimeout(inputTimeout.current);

		if (router?.query?.q === searchValue) return;

		const q = searchValue;

		if (!q || q.length < 3) return;

		inputTimeout.current = setTimeout(() => {
			setIsReady(false);
			router
				.push({
					pathname: "/search/",
					query: { q: searchValue },
				})
				.then(() => setIsReady(true));
		}, 600);

		return () => clearTimeout(inputTimeout.current);
	}, [searchValue, router]);

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
			<SearchForm
				searchValue={searchValue}
				handleChange={(e) => setSearchValue(e.target.value)}
				disabled={searchDisabled}
			/>
			<Styled.ContentContainer>{children}</Styled.ContentContainer>
			<Styled.FooterContainer>
				<Footer footerHtml={settings.footer} />
			</Styled.FooterContainer>
			<GoTop />
		</Styled.Wrapper>
	);
};

export default BaseTemplate;
