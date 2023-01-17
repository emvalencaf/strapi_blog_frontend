import { Meta } from "@storybook/react/types-6-0";
import SearchForm from ".";

export default {
	title: "SearchForm",
	component: SearchForm,
} as Meta;

export const Template = () => {
	return (
		<div>
			<SearchForm />
		</div>
	);
};
