import React from 'react'
import Button from '../../../common/Button'
import Input from '../../../common/Input'
import { userRole } from '../../../constants'
import { useAppSelector } from '../../hooks/hooks'
import { AddCourseButton, SearchBarWrapper } from './styled-components'

type SearchBarProps = {
  onSearchValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSearch: () => void
  onAdd: () => void
}

function SearchBar(props: SearchBarProps) {
  const user = useAppSelector((state) => state.user)
  const isAdmin = user.role === userRole.ADMIN

  const { onSearchValueChange, onSearch, onAdd } = props
  return (
    <SearchBarWrapper>
      <Input
        type={'text'}
        placeholderText={'Enter course name...'}
        onValueChange={onSearchValueChange}
        inputName={'enterCourse'}
      />
      <Button buttonName={'Search'} onButtonClick={onSearch} type={'button'} />
      {isAdmin && (
        <AddCourseButton
          buttonName={'Add new course'}
          onButtonClick={onAdd}
          type={'button'}
        />
      )}
    </SearchBarWrapper>
  )
}
export default SearchBar
