import { Typography } from '@mui/material'
import React, { ChangeEvent, useState } from 'react'
import imageCompression from 'browser-image-compression'
import { ErrorMessage } from '@arkitema/errorhandling'
import { ArkitemaButton } from '../arkitemaButton'
import { UploadFileOutlined } from '@mui/icons-material'

interface FileInputProps {
  data: string
  setData: React.Dispatch<React.SetStateAction<string>>
  fileName?: string
  setFileName?: React.Dispatch<React.SetStateAction<string>>
  text: string
  allowedExtensions: string[]
  fileType: 'image' | 'json'
  loading?: boolean
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>
}

export const FileInput = (props: FileInputProps) => {
  const { data, setData, fileName, setFileName, text, allowedExtensions, fileType } = props
  const [error, setError] = useState<Error | null>(null)

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

  const fileToBase64 = (file: File): Promise<string> => {
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

  const handleFileInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    handleSetLoading(true)
    const fileExist = event.target.files && event.target.files[0]
    if (!fileExist) {
      setError(new Error('No file selected.'))
      handleSetLoading(false)
      return
    }
    const file = event.target.files ? event.target.files[0] : null
    if (!file) {
      handleSetLoading(false)
      setError(new Error('Invalid file'))
      return
    }
    const fileName = file.name.toLowerCase()
    const isValidExtension = allowedExtensions.some((ext) => fileName.endsWith(ext))

    if (!isValidExtension) {
      handleSetLoading(false)
      setError(
        new Error(
          `Invalid file format. Please upload one of these file types: ${allowedExtensions.map(
            (type: string) => type,
          )}`,
        ),
      )
      return
    }

    try {
      let base64 = ''
      if (fileType == 'image') {
        const compressedFile = await imageCompression(file, options)
        base64 = await fileToBase64(compressedFile)
      } else if (fileType == 'json') {
        base64 = await fileToBase64(file)
      }
      setError(null)
      handleSetLoading(false)
      setData(base64 as string)
      setFileName ? setFileName(file.name) : null
    } catch (error) {
      setError(new Error('Failed to process the file.'))
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
      <ArkitemaButton text='Upload File' component='label' startIcon={<UploadFileOutlined />} loading={isLoading}>
        <input onChange={handleFileInputChange} type='file' hidden />
      </ArkitemaButton>
      <ErrorMessage error={error} />
      <ShowUploadedFile fileType={fileType} show={!isLoading && !!data} data={data} fileName={fileName} />
    </div>
  )
}

interface ShowUploadedFileProps {
  show: boolean
  fileType: 'image' | 'json'
  data: string
  fileName?: string
}

const ShowUploadedFile = ({ show, fileType, data, fileName }: ShowUploadedFileProps) => {
  if (!show) {
    return null
  }

  return (
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
      {`Added file: ${fileName}`}
      {fileType == 'image' ? <img src={`data:image/png;base64,${data}`} alt={fileName} /> : null}
    </Typography>
  )
}
