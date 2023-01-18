// icons
import { SearchAlt } from "@styled-icons/boxicons-regular";

// styles
import * as Styled from "./styles";

// types
export type SearchFormProps = {
	query?: string | string[];
};

const SearchForm = ({ query = "" }: SearchFormProps) => {
	return (
		<Styled.SearchContainer>
			<form action="/search/" method="GET">
				<Styled.SearchInput
					type="search"
					placeholder="encontre posts"
					name="q"
					defaultValue={query}
				/>
				<Styled.SearchButton>
					<SearchAlt aria-label="search button" />
				</Styled.SearchButton>
			</form>
		</Styled.SearchContainer>
	);
};

export default SearchForm;
