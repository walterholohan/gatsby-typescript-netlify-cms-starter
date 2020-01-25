import { graphql, Link } from "gatsby"
import React from "react"

import Layout from "../components/Layout"

interface Props {
  title: string
  heading: string
  subheading: string
  image?: {
    childImageSharp: {
      fluid: {
        src: string
      }
    }
  }
}

export const IndexPageTemplate = ({ title, heading, subheading }: Props) => (
  <div>
    <div>
      <div>
        <h1>{title}</h1>
        <h2>{heading}</h2>
        <h3>{subheading}</h3>
        <Link className="btn" to="/blog">
          Link to blog page
        </Link>
      </div>
    </div>
  </div>
)

interface IndexPageProps {
  data: {
    markdownRemark: {
      frontmatter: {
        [key: string]: any
      }
    }
  }
}

const IndexPage = ({ data }: IndexPageProps) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
      />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
      }
    }
  }
`
