import { Meta, Story } from "@storybook/react/types-6-0";

// components and it's type props
import HtmlComponent, { HtmlComponentProps } from ".";

export default {
  title: "TextComponent",
  component: HtmlComponent,
  args: {
    html: `
      Lorem ipsum, dolor sit amet consectetur adipisicing
      elit. Nihil, iure quaerat! Voluptates ducimus exercitationem,
      reprehenderit laborum, libero cum porro necessitatibus sint incidunt,
      praesentium ipsa quaerat debitis delectus nemo aliquid! Facere.
    `,
  },
  argTypes: {
    children: { type: "string" },
  },
} as Meta;

export const Template: Story<HtmlComponentProps> = (args) => (
  <div>
    <HtmlComponent {...args} />
  </div>
);
