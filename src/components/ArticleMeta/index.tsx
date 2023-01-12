// types
import { Author } from "../../shared-typed/author";
import { Category } from "../../shared-typed/category";

// utils
import { formatDate } from "../../utils/format-date";

// styles
import * as Styled from "./styles";

// types
export type ArticleMetaProps = {
	createdAt: string;
	author: Author;
	categories: Category[];
};

const ArticleMeta = ({ createdAt, author, categories }: ArticleMetaProps) => {
	return (
		<Styled.Wrapper>
			<p>
				<span>Por </span>
				<a href={`/author/${author.slug}`}>{author.displayName}</a>
				<span className="separator"> | </span>
				<time dateTime={createdAt}>{formatDate(createdAt)}</time>
				<span className="separator"> | </span>
				<span className="categories">
					{categories.map((category) => (
						<span key={`article-meta-cat-${category.id}`}>
							<a href={`/category/${category.slug}`}>
								{category.displayName}
							</a>
						</span>
					))}
				</span>
			</p>
		</Styled.Wrapper>
	);
};

export default ArticleMeta;
