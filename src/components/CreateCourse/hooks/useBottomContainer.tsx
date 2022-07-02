import React, { useState } from 'react'
import Button from '../../../common/Button'
import Input from '../../../common/Input'
import { mockedAuthorsList } from '../../../constants'
import { getCourseDuration } from '../../../helpers/getCourseDuration'
import { AuthorInfo } from '../../interface'
import { v4 as uuidv4 } from 'uuid'
import AuthorItem from '../AuthorItem'

function useBottomContainer() {
  const [authorName, setAuthorName] = useState('')
  const [duration, setDuration] = useState(0)
  const [authorList, setAuthorList] = useState(mockedAuthorsList)
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
    const addedAuthor = authorList.filter((author) => {
      if (author.id === id) {
        return author
      }
    })
    const newAuthorList = authorList.filter((author) => {
      if (author.id !== id) {
        return author
      }
    })
    setAuthorList(newAuthorList)
    setCourseAuthor([...courseAuthor, ...addedAuthor])
  }

  const onDeleteAuthor = (id: string) => {
    const deletedAuthor = courseAuthor.filter((author) => {
      if (author.id === id) {
        return author
      }
    })
    const newCourseAuthorList = courseAuthor.filter((author) => {
      if (author.id !== id) {
        return author
      }
    })
    setCourseAuthor(newCourseAuthorList)
    setAuthorList([...authorList, ...deletedAuthor])
  }

  const onCreateAuthor = () => {
    const id = uuidv4()
    const newAuthor: AuthorInfo = {
      id,
      name: authorName,
    }
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
        {authorList.map((author) => {
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

  return {
    authorName,
    duration,
    renderAddAuthor,
    renderDuration,
    renderAuthorsAvailable,
    getAuthorsList,
    renderAuthorsList,
    courseAuthor,
  }
}

export default useBottomContainer
