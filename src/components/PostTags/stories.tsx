import { Meta, Story } from "@storybook/react/types-6-0";

// component
import PostTags, { PostTagsProps } from ".";

// mock
import mock from "./mock";

export default {
	title: "PostTags",
	component: PostTags,
	args: mock,
} as Meta<PostTagsProps>;

export const Template: Story<PostTagsProps> = (args) => {
	return (
		<div>
			<PostTags {...args} />
		</div>
	);
};

export const NoTags: Story<PostTagsProps> = () => {
	return (
		<div>
			<PostTags tags={undefined} />
		</div>
	);
};
