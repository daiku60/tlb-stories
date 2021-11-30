/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";
import Bio from "./bio";
// @ts-ignore
import DaikuBio from "../texts/bio/daiku";
// @ts-ignore
import PierBio from "../texts/bio/pier";

type PostFooterProps = {
    post: {
        slug: string;
        title: string;
        date: string;
        tags?: {
            name: string;
            slug: string;
        }[];
        description?: string;
        canonicalUrl?: string;
        body: string;
        excerpt: string;
        timeToRead?: number;
        banner?: {
            childImageSharp: {
                resize: {
                    src: string;
                };
            };
        };
        parent: {
            frontmatter: {
                author;
            };
        };
    };
};

const PostFooter = ({ post }: PostFooterProps) => {
    const { author } = post.parent.frontmatter;
    if (!author) {
        return null;
    }
    return (
        <footer
            sx={{
                boxSizing: `border-box`,
                display: `flex`,
                justifyContent: `space-between`,
                mt: [6],
                color: `secondary`,
                a: {
                    variant: `links.secondary`,
                },
                flexDirection: [`column`, `column`, `row`],
                variant: `dividers.top`,
            }}
        >
            <Bio author={author} />
        </footer>
    );
};

export default PostFooter;
