// styles
import * as Styled from "./styles";

// imported types
import PostCard, { PostCardProps } from "../PostCard";

// types
export type PostGridProps = {
	posts?: PostCardProps[];
};

const PostGrid = ({ posts = [] }: PostGridProps) => {
	return (
		<Styled.Wrapper>
			{posts.length > 0 ? (
				<Styled.Grid>
					{posts.map((post) => (
						<PostCard key={post.id} {...post} />
					))}
				</Styled.Grid>
			) : (
				<Styled.NotFound>Nenhum post encontrado</Styled.NotFound>
			)}
		</Styled.Wrapper>
	);
};

export default PostGrid;
