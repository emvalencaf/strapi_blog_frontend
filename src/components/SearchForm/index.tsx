// icons
import { SearchAlt } from "@styled-icons/boxicons-regular";
import { Cancel, CheckCircleOutline } from "@styled-icons/material-outlined";

// styles
import * as Styled from "./styles";

// types
import { ChangeEvent } from "react";
export type SearchFormProps = {
	searchValue?: string | string[];
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
	disabled?: boolean;
};

const SearchForm = ({
	searchValue = "",
	handleChange,
	disabled = false,
}: SearchFormProps) => {
	return (
		<Styled.SearchContainer>
			<div>
				<Styled.SearchInput
					type="search"
					placeholder="encontre posts"
					name="q"
					value={searchValue}
					onChange={handleChange}
					disabled={disabled}
				/>
				{disabled ? (
					<Cancel
						className="search-cancel-icon"
						aria-label="Input disabled"
					/>
				) : (
					<CheckCircleOutline
						className={"search-ok-icon"}
						aria-label="Input enabled"
					/>
				)}
				<Styled.SearchButton>
					<SearchAlt aria-label="search button" />
				</Styled.SearchButton>
			</div>
		</Styled.SearchContainer>
	);
};

export default SearchForm;
