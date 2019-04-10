import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import TipsList from '../components/styles/TipsListStyles';

export default function TipsPage({ data }) {
  const tips = data.allMdx.nodes;
  return (
    <Layout>
      <TipsList>
        {tips.map(tip => (
          <li key={tip.id}>
            <Link to={`/tips/${tip.frontmatter.slug}`}>
              {tip.frontmatter.title}
            </Link>
          </li>
        ))}
      </TipsList>
    </Layout>
  );
}

// this page will query ALL the tips from our markdown files
export const query = graphql`
  query {
    allMdx(filter: { frontmatter: { type: { eq: "tip" } } }) {
      nodes {
        id
        frontmatter {
          slug
          title
        }
      }
    }
  }
`;
