import { TextField, InputLabel, MenuItem, FormControl, Select } from '@mui/material'

interface InformationInputProps {
  id: string
  label: string
  setValue: any
  value: any
  options?: string[]
  type?: 'number' | 'string'
  sx?: Record<string, unknown>
}

export const InformationInput = (props: InformationInputProps) => {
  const { id, label, setValue, value, options, type, sx } = props

  // return options && options.length > 0 ? (
  //   <FormControl variant='standard' sx={{ width: '250px', marginTop: '30px' }} required aria-label='drop-down'>
  //     <InputLabel id='demo-simple-select-standard-label'>{label}</InputLabel>
  //     <Select
  //       required
  //       labelId={label + 'label-id'}
  //       id={id}
  //       value={value}
  //       onChange={(e) => setValue(e.target.value)}
  //       label={label}
  //     >
  //       {options.map((option) => {
  //         return (
  //           <MenuItem key={1} value={option}>
  //             {option}
  //           </MenuItem>
  //         )
  //       })}
  //     </Select>
  //   </FormControl>
  // ) : (
  //   <TextField
  //     required
  //     id={id}
  //     label={label}
  //     aria-label='text-field'
  //     variant='standard'
  //     type={type ? type : 'string'}
  //     value={value}
  //     onChange={(e) => setValue(e.target.value)}
  //     InputLabelProps={{
  //       shrink: true,
  //     }}
  //     sx={{ width: '250px', marginTop: '30px', ...sx }}
  //   />
  // )
  return (
    <TextField
      required
      id={id}
      label={label}
      aria-label='text-field'
      variant='standard'
      type={type ? type : 'string'}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      InputLabelProps={{
        shrink: true,
      }}
      sx={{ width: '250px', marginTop: '30px', ...sx }}
    />)
}
