import React from 'react'

import { images } from '../../data'
import { AppFooter, Wrap, Image, Seperator } from './Footer.style'

export default function Footer({ toggleOnClick }) {
  return (
    <AppFooter>
      <Wrap>
        {images.map((name, index) => {
          if (images.length - 1 === index) {
            return (
              <>
                <Seperator key={index} />
                <Image key={name} name={name} />
              </>
            )
          }

          if (name === 'settings')
            return <Image onClick={toggleOnClick} key={name} name={name} />

          return <Image key={name} name={name} />
        })}
      </Wrap>
    </AppFooter>
  )
}
