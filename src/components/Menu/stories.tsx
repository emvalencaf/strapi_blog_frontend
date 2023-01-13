import { Meta, Story } from "@storybook/react/types-6-0";

// components
import Menu, { MenuProps } from ".";

// mock
import mock from "./mock";

export default {
	title: "Menu",
	component: Menu,
	args: mock,
} as Meta<MenuProps>;

export const Template: Story<MenuProps> = (args) => {
	return (
		<div>
			<Menu {...args} />
		</div>
	);
};
