import '@testing-library/jest-dom'
import { ArkitemaTable } from './arkitemaTable'
import { render, screen } from '@testing-library/react'

describe('ArkitemaTable', () => {
  it('renders table rows with correct data', () => {
    const data: any = {
      name: 'John Doe',
      age: 30,
      email: 'johndoe@example.com',
    }

    render(<ArkitemaTable data={data} />)

    const rows = Object.keys(data)
    const tableRows = screen.queryAllByRole('row')
    expect(tableRows.length).toBe(rows.length)

    rows.forEach((key) => {
      expect(screen.queryByText(key)).toBeInTheDocument()
      expect(screen.queryByText(String(data[key]))).toBeInTheDocument()
    })
  })
})
