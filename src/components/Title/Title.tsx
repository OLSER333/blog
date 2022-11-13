import React, { FC } from 'react'
import styles from './Title.module.scss'

export enum titleColors {
  BLACK = 'black',
  BLUE = 'blue',
}

interface TitleProps {
  children: string
  color: titleColors.BLACK | titleColors.BLUE
}

const Title: FC<TitleProps> = ({ color, children }) => {
  const getClass = (color: titleColors) => {
    switch (color) {
      case titleColors.BLACK:
        return styles[titleColors.BLACK]
      case titleColors.BLUE:
        return styles[titleColors.BLUE]
    }
  }
  return <h2 className={getClass(color)}>{children}</h2>
}

export default Title
