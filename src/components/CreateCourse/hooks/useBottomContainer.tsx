import React, { useEffect, useState } from 'react'
import Button from '../../../common/Button'
import Input from '../../../common/Input'
import { getCourseDuration } from '../../../helpers/getCourseDuration'
import { AuthorInfo, NewAuthor } from '../../interface'
import AuthorItem from '../AuthorItem'
import { useAppSelector } from '../../hooks/hooks'
import { addAuthor } from '../../../services'
import { useDispatch } from 'react-redux'

function useBottomContainer() {
  const dispatch = useDispatch()
  const authors: AuthorInfo[] = useAppSelector((state) => state.authors)
  const [authorName, setAuthorName] = useState('')
  const [duration, setDuration] = useState(0)

  const [courseAuthor, setCourseAuthor] = useState<AuthorInfo[]>([])

  const availableAuthors = authors.filter(
    (availableAuthor) => !courseAuthor.includes(availableAuthor)
  )

  //On input changes
  const onAuthorNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setAuthorName(e.target.value)
  }

  const onDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setDuration(Number(e.target.value))
  }

  //Get data for course authors list
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
    const addedAuthor = authors.filter((author) => author.id === id)
    setCourseAuthor([...courseAuthor, ...addedAuthor])
  }

  const onDeleteAuthor = (id: string) => {
    const newCourseAuthorList = courseAuthor.filter(
      (author) => author.id !== id
    )
    setCourseAuthor(newCourseAuthorList)
  }

  const onCreateAuthor = () => {
    const newAuthor: NewAuthor = {
      name: authorName,
    }
    addAuthor(newAuthor, dispatch)
  }

  const renderAddAuthor = () => {
    return (
      <div>
        <h3>{'Add Author'}</h3>
        <div>
          <label>{'Author name'}</label>
        </div>
        <Input
          type={'text'}
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
          type={'text'}
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
