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

  .grid-container {
    display: grid;
    padding-top: 6rem;
    grid-template-columns: repeat(2, 1fr);

    @media (min-width: 761px) {
      grid-template-columns: repeat(4, 1fr);
    }

    grid-gap: 2px;

    .a {
      background: url('https://res.cloudinary.com/dbeqp2lyo/image/upload/v1543501159/Barbershop/Gallery/allefvinicius-354911-unsplash.jpg');
    }

    .b {
      background: url('https://res.cloudinary.com/dbeqp2lyo/image/upload/v1543501159/Barbershop/Gallery/tim-mossholder-572791-unsplash.jpg');
    }

    .c {
      background: url('https://res.cloudinary.com/dbeqp2lyo/image/upload/v1543501159/Barbershop/Gallery/andi-whiskey-599136-unsplash.jpg');
    }

    .d {
      background: url('https://res.cloudinary.com/dbeqp2lyo/image/upload/v1543501159/Barbershop/Gallery/hai-phung-247271-unsplash.jpg');
    }

    .e {
      background: url('https://res.cloudinary.com/dbeqp2lyo/image/upload/v1543501158/Barbershop/Gallery/fabio-alves-764007-unsplash.jpg');
    }

    .f {
      background: url('https://res.cloudinary.com/dbeqp2lyo/image/upload/v1543501159/Barbershop/Gallery/jonathan-weiss-780000-unsplash.jpg');
    }

    .g {
      background: url('https://res.cloudinary.com/dbeqp2lyo/image/upload/v1543501159/Barbershop/Gallery/chris-knight-473205-unsplash.jpg');
    }

    .h {
      background: url('https://res.cloudinary.com/dbeqp2lyo/image/upload/v1543501159/Barbershop/Gallery/arthur-humeau-756067-unsplash.jpg');
    }

    .photo-container {
      overflow: hidden;
    }

    .photo {
      background-size: cover;
      background-position: center;
      padding-bottom: 100%;
      transition: all 0.2s;

      :hover {
        transform: scale(1.2);
      }
    }
  }

  @media (max-width: 760px) {
    padding-top: 5rem;

    .grid-container {
      padding-top: 3rem;
    }
  }
`

const Gallery = () => {
  return (
    <GalleryStyles id="gallery">
      <SectionHeader
        center
        centerText
        headerTitle="Gallery"
        content="Incididunt magna nostrud id mollit dolor fugiat occaecat in nisi commodo in velit incididunt sint. In incididunt aliqua sunt ad ut nostrud commo."
      />
      <div className="grid-container">
        <div className="photo-container">
          <div className="a photo" />
        </div>
        <div className="photo-container">
          <div className="b photo" />
        </div>
        <div className="photo-container">
          <div className="c photo" />
        </div>
        <div className="photo-container">
          <div className="d photo" />
        </div>
        <div className="photo-container">
          <div className="e photo" />
        </div>
        <div className="photo-container">
          <div className="f photo" />
        </div>
        <div className="photo-container">
          <div className="g photo" />
        </div>
        <div className="photo-container">
          <div className="h photo" />
        </div>
      </div>
    </GalleryStyles>
  )
}

export default Gallery
