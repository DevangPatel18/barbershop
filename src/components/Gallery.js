import React from 'react'
import SectionHeader from './SectionHeader'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const GalleryStyles = styled.section`
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  z-index: 0;

  @media (max-width: 760px) {
    padding-top: 3rem;
  }
`

const GalleryGridStyles = styled.div`
  display: grid;
  padding-top: 6rem;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2px;

  @media (min-width: 761px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 760px) {
    padding-top: 2rem;
  }
`

const GalleryGridPhotoStyles = styled.div`
  overflow: hidden;
`

const GalleryGridImgStyles = styled(Img)`
  height: 0;
  padding-bottom: 100%;
  transition: all 0.2s;

  :hover {
    transform: scale(1.2);
  }
`

const Gallery = () => (
  <StaticQuery
    query={graphql`
      query GalleryQuery {
        GalleryImgs: allFile(filter: { absolutePath: { regex: "/gallery/" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 512) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { edges: galleryImgData } = data.GalleryImgs

      return (
        <GalleryStyles id="gallery">
          <SectionHeader
            center
            centerText
            headerTitle="Gallery"
            content="Incididunt magna nostrud id mollit dolor fugiat occaecat in nisi commodo in velit incididunt sint. In incididunt aliqua sunt ad ut nostrud commo."
          />
          <GalleryGridStyles>
            {galleryImgData.map((data, i) => (
              <GalleryGridPhotoStyles key={i}>
                <GalleryGridImgStyles fluid={data.node.childImageSharp.fluid} />
              </GalleryGridPhotoStyles>
            ))}
          </GalleryGridStyles>
        </GalleryStyles>
      )
    }}
  />
)

export default Gallery
