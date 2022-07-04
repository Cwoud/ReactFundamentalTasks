import React, { useEffect, useState } from 'react'
import Button from '../../../common/Button'
import Input from '../../../common/Input'
import { getCourseDuration } from '../../../helpers/getCourseDuration'
import { AuthorInfo } from '../../interface'
import { v4 as uuidv4 } from 'uuid'
import AuthorItem from '../AuthorItem'

type UseBottomContainer = {
  authorList: AuthorInfo[]
  setAuthorList: React.Dispatch<React.SetStateAction<AuthorInfo[]>>
}

function useBottomContainer(props: UseBottomContainer) {
  const { authorList, setAuthorList } = props
  const [authorName, setAuthorName] = useState('')
  const [duration, setDuration] = useState(0)
  // const [authorList, setAuthorList] = useState(mockedAuthorsList)
  const [availableAuthors, setAvailableAuthors] =
    useState<AuthorInfo[]>(authorList)
  const [courseAuthor, setCourseAuthor] = useState<AuthorInfo[]>([])

  const onAuthorNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setAuthorName(e.target.value)
  }

  const onDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setDuration(Number(e.target.value))
  }

  const getAuthorsList = () => {
    if (courseAuthor.length === 0) {
      return <div>{'Author list is empty'}</div>
    } else {
      return courseAuthor.map((author) => {
        return (
          <AuthorItem
            authorInfo={author}
            buttonName={'Delete author'}
            onClick={() => {
              onDeleteAuthor(author.id)
            }}
          />
        )
      })
    }
  }

  const onAddAuthor = (id: string) => {
    const addedAuthor = availableAuthors.filter((author) => author.id === id)
    const newAuthorList = availableAuthors.filter((author) => author.id !== id)
    setAvailableAuthors(newAuthorList)
    setCourseAuthor([...courseAuthor, ...addedAuthor])
  }

  const onDeleteAuthor = (id: string) => {
    const deletedAuthor = courseAuthor.filter((author) => author.id === id)
    const newCourseAuthorList = courseAuthor.filter(
      (author) => author.id !== id
    )
    setCourseAuthor(newCourseAuthorList)
    setAvailableAuthors([...availableAuthors, ...deletedAuthor])
  }

  const onCreateAuthor = () => {
    const id = uuidv4()
    const newAuthor: AuthorInfo = {
      id,
      name: authorName,
    }
    setAvailableAuthors([...availableAuthors, newAuthor])
    setAuthorList([...authorList, newAuthor])
  }

  const renderAddAuthor = () => {
    return (
      <div>
        <h3>{'Add Author'}</h3>
        <div>
          <label>{'Author name'}</label>
        </div>
        <Input
          inputName={'addAuthor'}
          onValueChange={onAuthorNameChange}
          placeholderText={'Enter author name...'}
        />
        <Button
          buttonName={'Create author'}
          onButtonClick={onCreateAuthor}
          type={'button'}
        />
      </div>
    )
  }

  const renderDuration = () => {
    return (
      <div>
        <h3>{'Duration'}</h3>
        <div>
          <label>{'Duration'}</label>
        </div>
        <Input
          inputName={'duration'}
          onValueChange={onDurationChange}
          placeholderText={'Enter duration in minutes...'}
        />
        <p>{'Duration:'}</p>
        <h3>{getCourseDuration(duration)}</h3>
      </div>
    )
  }

  const renderAuthorsAvailable = () => {
    return (
      <div>
        <h3>{'Authors'}</h3>
        {availableAuthors.map((author) => {
          return (
            <AuthorItem
              authorInfo={author}
              buttonName={'Add author'}
              onClick={() => {
                onAddAuthor(author.id)
              }}
            />
          )
        })}
      </div>
    )
  }

  const renderAuthorsList = () => {
    return (
      <div>
        <h3>{'Course authors'}</h3>
        {getAuthorsList()}
      </div>
    )
  }

  useEffect(() => {}, [courseAuthor])

  return {
    authorName,
    duration,
    courseAuthor,
    renderAddAuthor,
    renderDuration,
    renderAuthorsAvailable,
    getAuthorsList,
    renderAuthorsList,
  }
}

export default useBottomContainer
