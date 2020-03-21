import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"

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
    <h1>{title}</h1>
    <h2>{heading}</h2>
    <h3>{subheading}</h3>
    <Link className="btn" to="/blog">
      Link to blog page
    </Link>
    <h1>h1. Heading</h1>
    <h2>h2. Heading</h2>
    <h3>h3. Heading</h3>
    <h4>h4. Heading</h4>
    <h5>h5. Heading</h5>
    <h6>h6. Heading</h6>
    <p>
      body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
      neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
      Eum quasi quidem quibusdam.
    </p>
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
