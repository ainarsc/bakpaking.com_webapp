import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { LargeText } from "../components/elements/LargeText"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <LargeText>
      <p>
        NOT FOUND <br />
        You just hit a route that doesn&#39;t exist... the sadness. &#59;&#40;
      </p>
    </LargeText>
  </Layout>
)

export default NotFoundPage
