import { Meta, Story } from "@storybook/react/types-6-0";

// components and it's type props
import Footer, { FooterProps } from ".";

export default {
	title: "Footer",
	component: Footer,
	args: {
		footerHtml: `<p><a href="https://beacons.page/otaviomiranda">Feito com ❤ por Otávio Miranda</a></p>`,
	},
} as Meta;

export const Template: Story<FooterProps> = (args) => {
	return (
		<div>
			<Footer {...args} />
		</div>
	);
};
