import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import PostListPreview from '../components/PostListPreview';
import TitlePage from '../components/TitlePage';
import LocalizedLink from '../components/LocalizedLink';
import useTranslations from '../components/useTranslations';
import 'bootstrap/dist/css/bootstrap.min.css';

import doanImage from '../images/doan-img.jpg';

const Index = ({ data: { allMarkdownRemark } }) => {
  // useTranslations is aware of the global context (and therefore also "locale")
  // so it'll automatically give back the right translations
  const {
    hello,
    subline,
    category,
    latestPosts,
    allPosts,
  } = useTranslations();

  const postList = allMarkdownRemark.edges;

  return (
    <div className="homepage">
      <SEO title="Home" />
      <TitlePage text={hello} />
      <p>{subline}</p>
      <img src={doanImage} alt="image of doan"/>

      <hr style={{ margin: `2rem 0` }} />
      <h1>
        <strong>{latestPosts}</strong>
      </h1>

      <br />

      <PostListPreview postList={postList} />

      <br />

      <LocalizedLink to={`/blog/`}>{allPosts}</LocalizedLink>
    </div>
  );
};

export default Index;

export const query = graphql`
  query Index($locale: String!, $dateFormat: String!, ) {
    allMarkdownRemark(
      filter: {
        fields: { locale: { eq: $locale } }
        frontmatter: { category: { eq: "Announcements" } }
        fileAbsolutePath: {regex: "/(blog)\/.*\\.md$/"}
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            category
            background
            image
            date(formatString: $dateFormat)

          }
          timeToRead
          fields {
            locale
            slug
          }
        }
      }
    }
  }
`;
