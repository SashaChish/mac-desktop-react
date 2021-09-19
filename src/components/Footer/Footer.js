import React from 'react'

import { images } from '../../data'
import { AppFooter, Wrap, Image, Seperator } from './Footer.style'

function addImage(images, toggle) {
  return images.map((name, index) => {
    if (images.length - 1 === index) {
      return (
        <>
          <Seperator key={index} />
          <Image key={name} name={name} />
        </>
      )
    }

    if (name === 'settings')
      return <Image onClick={toggle} key={name} name={name} />

    return <Image key={name} name={name} />
  })
}
export default function Footer({ toggleOnClick }) {
  return (
    <AppFooter>
      <Wrap>{addImage(images, toggleOnClick)}</Wrap>
    </AppFooter>
  )
}
