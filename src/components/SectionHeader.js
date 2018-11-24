import React, { Component } from 'react'

const SectionHeader = props => {
  const { headerTitle, content } = props

  return (
    <>
      <h2>{headerTitle}</h2>
      <p>{content}</p>
    </>
  )
}

export default SectionHeader
