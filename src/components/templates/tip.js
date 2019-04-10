import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { MDXRenderer } from 'gatsby-mdx';
import Layout from '../Layout';
import TipStyles from '../styles/TipStyles';

export default function TipPage({ data }) {
  return (
    <Layout>
      <Helmet>
        <title>{data.mdx.frontmatter.title}</title>
      </Helmet>
      <TipStyles>
        <h2>{data.mdx.frontmatter.title}</h2>
        <MDXRenderer>{data.mdx.code.body}</MDXRenderer>
      </TipStyles>
    </Layout>
  );
}

// Write a page query that is DYNAMIC

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id

      code {
        body
      }
      frontmatter {
        title
        slug
      }
    }
  }
`;
