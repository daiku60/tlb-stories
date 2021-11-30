import { graphql } from "gatsby";
import TagsComponent from "@lekoarts/gatsby-theme-minimal-blog-core/src/components/tags";

export default TagsComponent;

export const query = graphql`
    query {
        allPost(sort: { fields: tags___name, order: DESC }) {
            group(field: tags___name) {
                fieldValue
                totalCount
            }
            nodes {
                tags {
                    name
                }
                ... on MdxPost {
                    parent {
                        ... on Mdx {
                            frontmatter {
                                hidden
                            }
                        }
                    }
                }
            }
        }
    }
`;
