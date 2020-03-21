/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import Grid from "@material-ui/core/Grid"
import {
  createMuiTheme,
  createStyles,
  makeStyles,
  MuiThemeProvider,
} from "@material-ui/core/styles"
import Header from "./header"
import "./layout.css"

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Fira Sans", "sans-serif"].join(","),
  },
})

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
    <MuiThemeProvider theme={theme}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Grid container={true} className={classes.root}>
        <Grid item={true} xs={12}>
          <main>{children}</main>
        </Grid>
        <Grid item={true} xs={12}>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  )
}

export default Layout
