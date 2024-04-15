import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import { Layout } from "../layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div>My home page</div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
