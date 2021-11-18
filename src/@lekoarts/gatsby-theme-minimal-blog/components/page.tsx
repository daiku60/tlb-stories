/** @jsx jsx */
/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout'
import Seo from '@lekoarts/gatsby-theme-minimal-blog/src/components/seo'

type PageProps = {
    data: {
        page: {
            title: string
            slug: string
            excerpt: string
            body: string
            parent: {
                frontmatter: {
                    embeddedImagesLocal?: {
                        childImageSharp: {
                            gatsbyImageData: any
                        }
                    }
                }
            }
        }
    }
    [key: string]: any
}

const Page = ({ data }: PageProps) => {
    const { page } = data
    return (
        <Layout>
            <Seo title={page.title} description={page.excerpt} />
            <Heading as="h1" variant="styles.h1">
                {page.title}
            </Heading>
            <section sx={{ my: 5, variant: `layout.content` }}>
                <MDXRenderer localImages={page.parent.frontmatter.embeddedImagesLocal}>
                    {page.body}
                </MDXRenderer>
            </section>
        </Layout>
    )
}

export default Page
