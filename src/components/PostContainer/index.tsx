// styles
import * as Styled from "./styles";

// types
export type PostContainerProps = {
	size: "max" | "content";
	children: React.ReactNode;
};

const PostContainer = ({ size, children }: PostContainerProps) => {
	return (
		<Styled.PostContainerStyled size={size}>
			{children}
		</Styled.PostContainerStyled>
	);
};

export default PostContainer;
