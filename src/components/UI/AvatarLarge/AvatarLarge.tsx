import React, { FC } from 'react'
import { Avatar } from 'antd'

interface IAvatarLargeProps {
  src: string
}

const AvatarLarge: FC<IAvatarLargeProps> = ({ src }) => <Avatar src={src} size={'large'} />

export default AvatarLarge
