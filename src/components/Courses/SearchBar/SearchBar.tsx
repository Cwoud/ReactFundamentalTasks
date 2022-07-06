import React from 'react'
import Button from '../../../common/Button'
import Input from '../../../common/Input'
import { AddCourseButton, SearchBarWrapper } from './styled-components'

type SearchBarProps = {
  onSearchValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSearch: () => void
  onAdd: () => void
}

function SearchBar(props: SearchBarProps) {
  const { onSearchValueChange, onSearch, onAdd } = props
  return (
    <SearchBarWrapper>
      <Input
        placeholderText={'Enter course name...'}
        onValueChange={onSearchValueChange}
        inputName={'enterCourse'}
      />
      <Button buttonName={'Search'} onButtonClick={onSearch} type={'button'} />

      <AddCourseButton
        buttonName={'Add new course'}
        onButtonClick={onAdd}
        type={'button'}
      />
    </SearchBarWrapper>
  )
}
export default SearchBar
