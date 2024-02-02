import { HomePage } from '../pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NotFoundPage } from '../pages/NotFoundPage'
import { BlogsPage } from '../pages/BlogsPage'

const URL = process.env.PUBLIC_URL

export const Router = () => (
  <BrowserRouter>
    <Routes location={location} key={location.pathname}>
      {/* <Route path="/login" element={<SignIn />} /> */}
      {/* <Route path="/signup" element={<SignUp />} /> */}
      <Route path={`${URL}/`} element={<HomePage />} />
      {/* <Route path="/profile" element={<Profile />} /> */}
      {/* <Route path="/new" element={<New />} /> */}
      {/* <Route path="/detail/:bookId" element={<Detail />} /> */}
      <Route path={`${URL}/blogs/:blogId`} element={<BlogsPage />} />
      <Route path={`${URL}/*`} element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
)
