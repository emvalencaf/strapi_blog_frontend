// imported types
import { Author } from "../../shared-types/author";
import { Category } from "../../shared-types/category";
import { StrapImage } from "../../shared-types/strap-image";
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
			<Heading as="h2" size="huge" colorDark={true}>
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
