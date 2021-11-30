/** @jsx jsx */
import { jsx, Heading, Link as TLink, Flex } from 'theme-ui'
import { Link } from 'gatsby'
import Layout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout'
import Listing from '@lekoarts/gatsby-theme-minimal-blog/src/components/listing'
import useMinimalBlogConfig from '@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config'
import replaceSlashes from '@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes'
import Seo from '@lekoarts/gatsby-theme-minimal-blog/src/components/seo'

type PostsProps = {
    posts: {
        slug: string
        title: string
        date: string
        excerpt: string
        description: string
        timeToRead?: number
        tags?: {
            name: string
            slug: string
        }[]
        parent: {
            frontmatter: {
                hidden?: boolean
            }
        }
    }[]
}

const Blog = ({ posts }: PostsProps) => {
    const { tagsPath, basePath } = useMinimalBlogConfig()
    const filteredPosts = posts.filter(p => {
        const { hidden } = p.parent.frontmatter
        return hidden !== true
    })
    
    return (
        <Layout>
            <Seo title="Blog" />
            <Flex
                sx={{
                    alignItems: `center`,
                    justifyContent: `space-between`,
                    flexFlow: `wrap`,
                }}
            >
                <Heading as="h1" variant="styles.h1" sx={{ marginY: 2 }}>
                    Blog
                </Heading>
                <TLink
                    as={Link}
                    sx={{ variant: `links.secondary`, marginY: 2 }}
                    to={replaceSlashes(`/${basePath}/${tagsPath}`)}
                >
                    View all tags
                </TLink>
            </Flex>
            <Listing posts={filteredPosts} sx={{ mt: [4, 5] }} />
        </Layout>
    )
}

export default Blog
