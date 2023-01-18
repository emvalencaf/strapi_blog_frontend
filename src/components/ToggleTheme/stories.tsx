import { Meta, Story } from "@storybook/react/types-6-0";
import ToggleTheme from ".";

export default {
	title: "ToggleTheme",
	component: ToggleTheme,
} as Meta;

export const Template: Story = () => {
	return (
		<div>
			<ToggleTheme />
		</div>
	);
};
