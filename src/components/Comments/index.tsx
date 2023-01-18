import { DiscussionEmbed } from "disqus-react";
// styles
import * as Styled from "./styles";

// types
export type CommentsProps = {
	id: string;
	slug: string;
	title: string;
	allowComments: boolean;
};

const Comments = ({ title, id, slug, allowComments }: CommentsProps) => {
	if (!allowComments) return null;

	return (
		<Styled.Wrapper>
			<DiscussionEmbed
				shortname="blog-emvalenca"
				config={{
					url: `/post/${slug}`,
					identifier: id,
					title: title,
					language: "pt_BR",
				}}
			/>
		</Styled.Wrapper>
	);
};

export default Comments;
