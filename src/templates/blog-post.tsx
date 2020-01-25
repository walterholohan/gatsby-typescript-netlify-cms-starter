import { graphql } from "gatsby"
import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/Layout"

interface Props {
  content: string
  description: string
  title: string
  helmet?: JSX.Element
}

export const BlogPostTemplate = ({
  content,
  description,
  title,
  helmet,
}: Props) => {
  return (
    <section className="section">
      {helmet || ""}
      <div>
        <div>
          <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </div>
    </section>
  )
}

interface BlogPostProps {
  data: {
    markdownRemark: {
      id: string
      html: string
      frontmatter: {
        [key: string]: any
      }
    }
  }
}

const BlogPost = ({ data }: BlogPostProps) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`
