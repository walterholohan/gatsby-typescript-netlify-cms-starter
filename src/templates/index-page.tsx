import { graphql, Link } from "gatsby"
import React from "react"

import Typography from "@material-ui/core/Typography"
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
    <Typography variant="h1" gutterBottom={true}>
      h1. Heading
    </Typography>
    <Typography variant="h2" gutterBottom={true}>
      h2. Heading
    </Typography>
    <Typography variant="h3" gutterBottom={true}>
      h3. Heading
    </Typography>
    <Typography variant="h4" gutterBottom={true}>
      h4. Heading
    </Typography>
    <Typography variant="h5" gutterBottom={true}>
      h5. Heading
    </Typography>
    <Typography variant="h6" gutterBottom={true}>
      h6. Heading
    </Typography>
    <Typography variant="subtitle1" gutterBottom={true}>
      subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur
    </Typography>
    <Typography variant="subtitle2" gutterBottom={true}>
      subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur
    </Typography>
    <Typography variant="body1" gutterBottom={true}>
      body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
      neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
      Eum quasi quidem quibusdam.
    </Typography>
    <Typography variant="body2" gutterBottom={true}>
      body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
      neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
      Eum quasi quidem quibusdam.
    </Typography>
    <Typography variant="button" display="block" gutterBottom={true}>
      button text
    </Typography>
    <Typography variant="caption" display="block" gutterBottom={true}>
      caption text
    </Typography>
    <Typography variant="overline" display="block" gutterBottom={true}>
      overline text
    </Typography>
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
