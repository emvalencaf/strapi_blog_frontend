// imported types
import { Author } from "../../shared-typed/author";
import { Category } from "../../shared-typed/category";
import { StrapImage } from "../../shared-typed/strap-image";

// components
import ArticleHeader from "../ArticleHeader";
import HtmlComponent from "../HtmlComponent";

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
			<ArticleHeader
				title={title}
				excerpt={excerpt}
				author={author}
				cover={cover}
				categories={categories}
				createdAt={createdAt}
			/>
			<HtmlComponent html={content} />
		</Styled.Wrapper>
	);
};

export default Post;
