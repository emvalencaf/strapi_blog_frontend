// components
import Link from "next/link";
import Heading from "../Heading";

// imported types
import { StrapImage } from "../../shared-types/strap-image";

// styles
import * as Styled from "./styles";

// types
export type PostCardProps = {
	id: string;
	title: string;
	cover: StrapImage;
	excerpt: string;
	slug: string;
};

const PostCard = ({ title, excerpt, cover, slug }: PostCardProps) => {
	return (
		<Styled.Wrapper>
			<Link href={`/post/${slug}`} passHref legacyBehavior>
				<a>
					<Styled.Cover src={cover.url} alt={title} />
				</a>
			</Link>
			<Heading as="h3" size="small">
				<Link href={`/post/${slug}`} passHref legacyBehavior>
					<a>{title}</a>
				</Link>
			</Heading>
			<Styled.Excerpt>{excerpt}</Styled.Excerpt>
		</Styled.Wrapper>
	);
};

export default PostCard;
