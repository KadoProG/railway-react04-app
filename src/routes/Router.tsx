import { HomePage } from '../pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NotFoundPage } from '../pages/NotFoundPage'

export const Router = () => (
  <BrowserRouter>
    <Routes>
      {/* <Route path="/login" element={<SignIn />} /> */}
      {/* <Route path="/signup" element={<SignUp />} /> */}
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/profile" element={<Profile />} /> */}
      {/* <Route path="/new" element={<New />} /> */}
      {/* <Route path="/detail/:bookId" element={<Detail />} /> */}
      {/* <Route path="/edit/:bookId" element={<Edit />} /> */}
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
)
