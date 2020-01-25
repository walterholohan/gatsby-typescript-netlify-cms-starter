import { graphql, Link, StaticQuery } from "gatsby"
import React from "react"
import PreviewCompatibleImage from "./previewCompatibleImage"

interface Props {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            excerpt: string
            id: string
            fields: {
              slug: string
            }
            frontmatter: {
              [key: string]: any
            }
          }
        }
      ]
    }
  }
}

class BlogRoll extends React.Component<Props> {
  public render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
        {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id}>
              <article>
                <header>
                  {post.frontmatter.featuredimage ? (
                    <div>
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                  <p>
                    <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                    <span> &bull; </span>
                    <span>{post.frontmatter.date}</span>
                  </p>
                </header>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <BlogRoll data={data} />}
  />
)
