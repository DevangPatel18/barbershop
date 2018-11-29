import React from 'react';
import SectionHeader from './SectionHeader'
import styled from 'styled-components'

const GalleryStyles = styled.section`
  padding-top: 10rem;
  display: flex;
  justify-content: center;
`

const Gallery = () => {
  return (
    <GalleryStyles>
      <SectionHeader
        center
        centerText
        headerTitle="Gallery"
        content="Incididunt magna nostrud id mollit dolor fugiat occaecat in nisi commodo in velit incididunt sint. In incididunt aliqua sunt ad ut nostrud commo."
      />
    </GalleryStyles>
  );
};

export default Gallery;
