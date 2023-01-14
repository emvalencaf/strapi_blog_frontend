// components
import Link from "next/link";

// styles
import * as Styled from "./styles";

// imported type
import { Tag } from "../../shared-types/tags";

// types
export type PostTagsProps = {
	tags?: Tag[];
};

const PostTags = ({ tags = [] }: PostTagsProps) => {
	if (tags.length === 0) return null;

	return (
		<Styled.Wrapper>
			tags:
			{tags.length > 0 &&
				tags.map((tag) => (
					<span key={tag.id}>
						<Link href={`/ag/${tag.slug}`} legacyBehavior passHref>
							<a>{tag.displayName}</a>
						</Link>
					</span>
				))}
		</Styled.Wrapper>
	);
};

export default PostTags;
