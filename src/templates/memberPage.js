import React from 'react';
import { graphql } from 'gatsby';
import TitlePage from '../components/TitlePage';
import SEO from '../components/seo';
import PostListPreview from '../components/PostListPreview';
import Carousel from 'react-bootstrap/Carousel';
import Img from 'gatsby-image';

import * as S from '../components/Content/styled';

const MemberPage = props => {
  const post = props.data.markdownRemark;
  const category = post.frontmatter.category;
  const postList = props.data.allMarkdownRemark.edges;
  const images = props.data.allFile.edges;
  
  return (
    <>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />
      <TitlePage text={post.frontmatter.title} category={category} />
      <S.Content>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        <h1>Gallery</h1>
      </S.Content>

      <Carousel className='w-auto mx-lg-5 mb-5'>
        {images.map((image) => (
          <Carousel.Item>
            <Img
              fluid={image.node.childImageSharp.fluid}
              alt={image.node.base.split('.')[0]}
            />
          </Carousel.Item>
        ))} 
      </Carousel>
      
      {postList.length > 0 && (
        <>
          <S.Content>
            <h1>Announcements</h1>
          </S.Content>
          <PostListPreview postList={postList} />
        </>
      )}
    </>
  );
};

export const query = graphql`
  query MemberPage($locale: String!, $title: String!, $category: String!, $dateFormat: String!) {
    markdownRemark(
      frontmatter: { title: { eq: $title } }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        title
        description
        image
        category
      }
      html
    }
    allMarkdownRemark(
      filter: {
        fields: { locale: { eq: $locale } }
        frontmatter: { category: { eq: $category } }
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
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: $category }
      }
    ) {
      edges {
        node {
          base
          childImageSharp {
            fluid(maxWidth: 1040, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default MemberPage;
