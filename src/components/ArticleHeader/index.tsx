// imported types
import { Author } from "../../shared-typed/author";
import { Category } from "../../shared-typed/category";
import { StrapImage } from "../../shared-typed/strap-image";
import ArticleMeta from "../ArticleMeta";
import Heading from "../Heading";

// styles
import * as Styled from "./styles";

// types
export type ArticleHeaderProps = {
	title: string;
	excerpt: string;
	createdAt: string;
	cover: StrapImage;
	author: Author;
	categories: Category[];
};

const ArticleHeader = ({
	title,
	excerpt,
	cover,
	createdAt,
	author,
	categories,
}: ArticleHeaderProps) => {
	return (
		<Styled.Wrapper>
			<Heading as="h2" size="medium" colorDark={true}>
				{title}
			</Heading>
			<Styled.Excerpt>{excerpt}</Styled.Excerpt>
			<Styled.Cover src={cover.url} alt={title} />
			<ArticleMeta
				createdAt={createdAt}
				author={author}
				categories={categories}
			/>
		</Styled.Wrapper>
	);
};

export default ArticleHeader;
