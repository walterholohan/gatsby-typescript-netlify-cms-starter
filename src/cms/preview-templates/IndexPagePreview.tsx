import React from "react"

import { IndexPageTemplate } from "../../templates/index-page"

const IndexPagePreview: React.FunctionComponent = ({ entry }: any) => {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        image={data.image}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default IndexPagePreview
