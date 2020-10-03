import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Logo = () => {
  const { doanLogoFile } = useStaticQuery(query);

  return <Img fluid={doanLogoFile.childImageSharp.fluid} alt="TNTT Logo" />;
};

const query = graphql`
  query getDoanIcon {
    doanLogoFile: file(base: {eq:"dtg-logo.png"}) {
      base
      childImageSharp {
        fluid(maxWidth: 500, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Logo;
