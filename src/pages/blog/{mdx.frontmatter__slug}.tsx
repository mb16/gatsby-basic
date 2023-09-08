import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

interface IBlogPost {
  data: any;
  children: any;
}

const BlogPost = ({ data, children }: IBlogPost) => {
  const image = getImage(data.mdx.frontmatter.hero_image)

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      { /* <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
        /> */ }
      <p>
        Photo Credit:{" "}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
      {children}
    </Layout>
  )
  }



/*
{
  "data": {
    "allMdx": {
      "nodes": [
        {
          "frontmatter": {
            "slug": "my-second-post"
          },
          "id": "63284837-d1d6-52af-9509-472aa426c80a"
        },
        {
          "frontmatter": {
            "slug": "my-third-post"
          },
          "id": "488588ea-753f-53f0-bac8-25a21af1272c"
        },
        {
          "frontmatter": {
            "slug": "my-first-post"
          },
          "id": "2d3e612a-e58c-5734-9784-369d201ea52a"
        }
      ]
    }
  },
  "extensions": {}
}
*/


export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        
      }
    }
  }
`

/*

this part of the query doesn't work.  Supposed to auto recognize the hero_image type is a file type.

        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }

*/


interface IHead {
  data: any;
}

export const Head = ({ data }: IHead) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost