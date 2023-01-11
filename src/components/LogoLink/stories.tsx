import { Meta, Story } from "@storybook/react/types-6-0";
import LogoLink, { LogoLinkProps } from ".";

export default {
  title: "LogoLink",
  component: LogoLink,
  args: {
    text: "Logo",
    srcImg: "assets/images/zangetsu.jpg",
    link: "http://localhost",
    newTab: false,
  },
  argTypes: {
    text: { type: "string" },
    srcImg: { type: "string" },
    link: { type: "string" },
  },
} as Meta;

export const ImageOnly: Story<LogoLinkProps> = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const TextOnly: Story<LogoLinkProps> = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

TextOnly.args = {
  srcImg: "",
};
