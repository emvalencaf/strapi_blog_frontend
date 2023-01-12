import { Meta, Story } from "@storybook/react/types-6-0";
import Header, { HeaderProps } from ".";

export default {
	title: "Header",
	component: Header,
	args: {
		blogName: "seu blog",
		blogDescription: "A descrição do blog",
		logo: "assets/images/zangetsu.jpg",
		showText: false,
	},
	argTypes: {
		blogName: { type: "string" },
		blogDescription: { type: "string" },
		logo: { type: "string" },
		showText: { type: "boolean" },
	},
} as Meta<HeaderProps>;

export const Template: Story<HeaderProps> = (args) => {
	return (
		<div>
			<Header {...args} />
		</div>
	);
};
