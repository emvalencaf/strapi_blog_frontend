// hooks
import { useRouter } from "next/router";

// icons
import { SearchAlt } from "@styled-icons/boxicons-regular";

// styles
import * as Styled from "./styles";

// types
export type SearchFormProps = {
	title?: string;
};

const SearchForm = () => {
	const router = useRouter();
	return (
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
	);
};

export default SearchForm;
