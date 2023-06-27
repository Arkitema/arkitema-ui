import { Typography } from '@mui/material'
import React from 'react'
import imageCompression from 'browser-image-compression'
import { theme } from '@arkitema/brand'

interface FileInputProps {
  imageData: string
  setImageData: React.Dispatch<React.SetStateAction<string>>
  setUpdateImageData?: any
  text: string
}

export const FileInput = (props: FileInputProps) => {
  const { imageData, setImageData, setUpdateImageData, text } = props

  const fileToBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result.replace(/^data:.+;base64,/, ''))
        }
      }
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }

  const options = {
    maxSizeMB: 0.1,
    maxWidthOrHeight: 500,
  }

  const handleFileInputChange = async (event: any) => {
    const file = event.target.files[0]
    const compressedFile = await imageCompression(file, options)
    const base64 = await fileToBase64(compressedFile)
    setImageData(base64 as string)
    setUpdateImageData && setUpdateImageData(true)
  }

  return (
    <div style={{ width: '250px', marginTop: '30px' }} aria-label='file-input' >
      <Typography
        component='div'
        sx={{
          color: '#333333',
          font: theme.typography.fontFamily,
          fontSize: '12px',
          paddingBottom: '20px',
        }}
      >
        {text}
      </Typography>
      <input type='file' onChange={handleFileInputChange} />
      {imageData && <img src={imageData} alt='uploaded image' />}
    </div>
  )
}
