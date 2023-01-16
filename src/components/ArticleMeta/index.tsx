// components
import Link from "next/link";

// types
import { Author } from "../../shared-types/author";
import { Category } from "../../shared-types/category";

// utils
import { formatDate } from "../../utils/format-date";

// styles
import * as Styled from "./styles";

// types
export type ArticleMetaProps = {
	createdAt: string;
	author?: Author;
	categories?: Category[];
};

const ArticleMeta = ({
	createdAt,
	author = undefined,
	categories = [],
}: ArticleMetaProps) => {
	return (
		<Styled.Wrapper>
			<p>
				{typeof author !== "undefined" && (
					<>
						<span>Por </span>
						<Link
							href={`/author/${author.slug}`}
							passHref
							legacyBehavior
						>
							<a>{author.displayName}</a>
						</Link>
						<span className="separator"> | </span>
					</>
				)}
				<time dateTime={createdAt}>{formatDate(createdAt)}</time>
				<span className="separator"> | </span>
				{categories.length > 0 && (
					<>
						<span className="categories">
							{categories.map((category) => (
								<span key={`article-meta-cat-${category.id}`}>
									<Link
										href={`/category/${category.slug}`}
										passHref
										legacyBehavior
									>
										<a>{category.displayName}</a>
									</Link>
								</span>
							))}
						</span>
					</>
				)}
			</p>
		</Styled.Wrapper>
	);
};

export default ArticleMeta;
