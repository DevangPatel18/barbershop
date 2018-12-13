import React from 'react'
import SectionHeader from './SectionHeader'
import styled from 'styled-components'

const GalleryStyles = styled.section`
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  z-index: 0;

  @media (max-width: 760px) {
    padding-top: 5rem;
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
    padding-top: 3rem;
  }
`

const GalleryGridPhotoStyles = styled.div`
  overflow: hidden;

  div {
    background: url(${props => props.url});
    background-size: cover;
    background-position: center;
    padding-bottom: 100%;
    transition: all 0.2s;

    :hover {
      transform: scale(1.2);
    }
  }
`

const GalleryGridUrls = [
  'https://res.cloudinary.com/dbeqp2lyo/image/upload/v1543501159/Barbershop/Gallery/allefvinicius-354911-unsplash.jpg',
  'https://res.cloudinary.com/dbeqp2lyo/image/upload/v1543501159/Barbershop/Gallery/tim-mossholder-572791-unsplash.jpg',
  'https://res.cloudinary.com/dbeqp2lyo/image/upload/v1543501159/Barbershop/Gallery/andi-whiskey-599136-unsplash.jpg',
  'https://res.cloudinary.com/dbeqp2lyo/image/upload/v1543501159/Barbershop/Gallery/hai-phung-247271-unsplash.jpg',
  'https://res.cloudinary.com/dbeqp2lyo/image/upload/v1543501158/Barbershop/Gallery/fabio-alves-764007-unsplash.jpg',
  'https://res.cloudinary.com/dbeqp2lyo/image/upload/v1543501159/Barbershop/Gallery/jonathan-weiss-780000-unsplash.jpg',
  'https://res.cloudinary.com/dbeqp2lyo/image/upload/v1543501159/Barbershop/Gallery/chris-knight-473205-unsplash.jpg',
  'https://res.cloudinary.com/dbeqp2lyo/image/upload/v1543501159/Barbershop/Gallery/arthur-humeau-756067-unsplash.jpg',
]

const Gallery = () => {
  return (
    <GalleryStyles id="gallery">
      <SectionHeader
        center
        centerText
        headerTitle="Gallery"
        content="Incididunt magna nostrud id mollit dolor fugiat occaecat in nisi commodo in velit incididunt sint. In incididunt aliqua sunt ad ut nostrud commo."
      />
      <GalleryGridStyles>
        {GalleryGridUrls.map((photo, i) => (
          <GalleryGridPhotoStyles url={photo} key={i}>
            <div />
          </GalleryGridPhotoStyles>
        ))}
      </GalleryGridStyles>
    </GalleryStyles>
  )
}

export default Gallery
