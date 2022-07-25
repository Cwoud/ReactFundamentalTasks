import React from 'react'
import Button from '../../../common/Button'
import { AuthorInfo } from '../../interface'

type AuthorItemProps = {
  authorInfo: AuthorInfo
  buttonName: string
  onClick: () => void
}
function AuthorItem(props: AuthorItemProps) {
  const { authorInfo, buttonName, onClick } = props
  return (
    <div>
      {authorInfo.name}
      <Button buttonName={buttonName} onButtonClick={onClick} type={'button'} />
    </div>
  )
}

export default AuthorItem
