import React from "react"

import BlogRoll from "../../components/blogRoll"
import Layout from "../../components/layout"

export default class BlogIndexPage extends React.Component {
  public render() {
    return (
      <Layout>
        <div>
          <h1>Latest Stories</h1>
        </div>
        <section className="section">
          <div>
            <div>
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
