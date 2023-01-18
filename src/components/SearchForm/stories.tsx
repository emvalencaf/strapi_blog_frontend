import { Meta, Story } from "@storybook/react/types-6-0";
import SearchForm, { SearchFormProps } from ".";

export default {
	title: "SearchForm",
	component: SearchForm,
	args: {
		query: "query",
	},
	argTypes: {
		query: { type: "string" },
	},
} as Meta<SearchFormProps>;

export const Template: Story<SearchFormProps> = () => {
	return (
		<div>
			<SearchForm />
		</div>
	);
};
