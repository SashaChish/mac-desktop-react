import React from 'react'

import { images } from '../../data'
import { AppFooter, Wrap, Image, Separator } from './Footer.style'

export default function Footer({ toggleOnClick }) {
  return (
    <AppFooter>
      <Wrap>
        {images.map(name => {
          if (name === 'settings')
            return <Image onClick={toggleOnClick} key={name} name={name} />

          if (name === 'trash-bin')
            return (
              <React.Fragment key={name}>
                <Separator />
                <Image name={name} />
              </React.Fragment>
            )
          return <Image key={name} name={name} />
        })}
      </Wrap>
    </AppFooter>
  )
}
