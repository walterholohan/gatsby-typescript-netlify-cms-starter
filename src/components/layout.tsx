/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import Header from "./header"
import Grid, { GridSpacing } from "@material-ui/core/Grid"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import "./layout.css"

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  })
)

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <main>{children}</main>
        </Grid>
        <Grid item xs={12}>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </Grid>
      </Grid>
    </>
  )
}

export default Layout
