import { Typography } from '@mui/material'
import React, { useState } from 'react'
import imageCompression from 'browser-image-compression'
import { Loading } from '@arkitema/datafetching'

interface FileInputProps {
  data: string
  setData: React.Dispatch<React.SetStateAction<string>>
  text: string
  allowedExtensions: string[]
  fileType: 'image' | 'json'
  loading?: boolean
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>
}

export const FileInput = (props: FileInputProps) => {
  const { data, setData, text, allowedExtensions, fileType, loading, setLoading } = props
  const [error, setError] = useState<string | null>(null)
  const [updateData, setUpdateData] = useState(false)

  // If loading is not passed from the parent, a local state is used
  const [localLoading, setLocalLoading] = useState(false)
  const isLoading = props.loading !== undefined ? props.loading : localLoading

  const handleSetLoading = (loadingState: boolean) => {
    if (props.setLoading !== undefined) {
      props.setLoading(loadingState)
    } else {
      setLocalLoading(loadingState)
    }
  }

  const fileToBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result.replace(/^data:.+;base64,/, ''))
        }
      }
      reader.onerror = () => {
        reject(new Error('Failed to read file.'))
      }
      reader.readAsDataURL(file)
    })
  }

  const options = {
    maxSizeMB: 0.1,
    maxWidthOrHeight: 500,
  }

  const handleFileInputChange = async (event: any) => {
    handleSetLoading(true)
    const fileExist = event.target.files && event.target.files[0]
    if (!fileExist) {
      setError('No file selected.')
      handleSetLoading(false)
      return
    }
    const file = event.target.files[0]
    const fileName = file.name.toLowerCase()
    const isValidExtension = allowedExtensions.some((ext) => fileName.endsWith(ext))

    if (!isValidExtension) {
      handleSetLoading(false)
      setError(
        'Invalid file format. Please upload one of these file types: ' +
          allowedExtensions.map((type: string) => {
            return type
          }),
      )
      return
    }

    try {
      if (fileType == 'image') {
        const compressedFile = await imageCompression(file, options)
        const base64 = await fileToBase64(compressedFile)
        handleSetLoading(false)
        setData(base64 as string)
      } else if (fileType == 'json') {
        const base64 = await fileToBase64(file)
        handleSetLoading(false)
        setData(base64 as string)
      }
      setError(null)
      handleSetLoading(false)
      setUpdateData && setUpdateData(true)
    } catch (error) {
      setError('Failed to process the file.')
    }
  }

  return (
    <div style={{ width: '250px', marginTop: '30px' }} aria-label='file-input'>
      <Typography
        component='div'
        sx={{
          color: '#333333',
          font: 'Matter',
          fontSize: '12px',
          paddingBottom: '20px',
        }}
      >
        {text}
      </Typography>
      <input type='file' onChange={handleFileInputChange} />
      <Typography
        component='div'
        sx={{
          color: 'Red',
          font: 'Matter',
          fontSize: '12px',
          paddingBottom: '20px',
          paddingTop: '10px',
        }}
      >
        {error}
      </Typography>
      {isLoading ? (
        <Loading />
      ) : updateData && fileType == 'image' ? (
        <img src={data} alt='uploaded image' />
      ) : (
        <Typography
          component='div'
          sx={{
            color: '#333333',
            font: 'Matter',
            fontSize: '12px',
            paddingBottom: '20px',
            paddingTop: '10px',
          }}
        >
          {data && 'Added file: ' + data}
        </Typography>
      )}
    </div>
  )
}
