import * as React from "react";
import Tags from "@lekoarts/gatsby-theme-minimal-blog/src/components/tags";

type Props = {
    data: {
        allPost: {
            group: {
                fieldValue: string;
                totalCount: number;
            }[];
            nodes: {
                tags: {
                    name: string;
                }[];
                parent: {
                    frontmatter: {
                        hidden: boolean;
                    };
                };
            }[];
        };
    };
    [key: string]: any;
};

export default function MinimalBlogCoreTags({ ...props }: Props) {
    var {
        data: { allPost },
    } = props;

    const tagsGroup = allPost.nodes.reduce((accum, post) => {
        const { hidden } = post.parent.frontmatter;
        if (hidden === true || !post.tags) {
            return accum;
        }
        const postTags = post.tags.map((t) => t.name);
        postTags.forEach((pt) => {
            accum = {
                ...accum,
                [pt]: accum[pt] ? accum[pt] + 1 : 1,
            };
        });
        return accum;
    }, {});
    const list: any = Object.entries(
        tagsGroup
    ).map((entry) => ({
        fieldValue: entry[0],
        totalCount: entry[1],
    }));
    return <Tags list={list} {...props} />;
}
