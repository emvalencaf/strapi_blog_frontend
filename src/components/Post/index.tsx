// imported types
import { Author } from "../../shared-types/author";
import { Category } from "../../shared-types/category";
import { StrapImage } from "../../shared-types/strap-image";

// components
import ArticleHeader from "../ArticleHeader";
import HtmlComponent from "../HtmlComponent";
import PostContainer from "../PostContainer";

// styles
import * as Styled from "./styles";

// types
export type PostProps = {
	id: string;
	title: string;
	excerpt: string;
	cover: StrapImage;
	author: Author;
	categories: Category[];
	createdAt: string;
	content: string;
};

const Post = ({
	id,
	title,
	excerpt,
	cover,
	author,
	categories,
	createdAt,
	content,
}: PostProps) => {
	return (
		<Styled.Wrapper key={id}>
			<PostContainer size={"max"}>
				<ArticleHeader
					title={title}
					excerpt={excerpt}
					author={author}
					cover={cover}
					categories={categories}
					createdAt={createdAt}
				/>
			</PostContainer>
			<PostContainer size={"content"}>
				<HtmlComponent html={content} />
			</PostContainer>
		</Styled.Wrapper>
	);
};

export default Post;
