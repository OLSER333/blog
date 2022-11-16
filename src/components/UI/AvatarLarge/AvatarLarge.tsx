import React, { FC } from 'react'
import styles from './AvatarLarge.module.scss'
import { Avatar } from 'antd'

interface IAvatarLargeProps {
  src: string
}

const AvatarLarge: FC<IAvatarLargeProps> = ({ src }) => <Avatar src={src} size={'large'} />

export default AvatarLarge
