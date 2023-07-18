import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginPage } from './index'

describe('Login Page', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage title='login page' link={'/'} />} />
        </Routes>
      </BrowserRouter>,
    )

    expect(baseElement).toBeTruthy()
  })
})
