import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allMdx.nodes.map(({ id, slug, frontmatter: { title, date } }) => (
          <article key={id}>
            <h2>
              <Link to={`/blog/${slug}`}>
                {title}
              </Link>
            </h2>
            <p>Posted: {date}</p>
          </article>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`

export default BlogPage
