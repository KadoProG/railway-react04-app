import { HomePage } from '../pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NotFoundPage } from '../pages/NotFoundPage'
import { BlogsPage } from '../pages/BlogsPage'

export const Router = () => (
  <BrowserRouter>
    <Routes>
      {/* <Route path="/login" element={<SignIn />} /> */}
      {/* <Route path="/signup" element={<SignUp />} /> */}
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/profile" element={<Profile />} /> */}
      {/* <Route path="/new" element={<New />} /> */}
      {/* <Route path="/detail/:bookId" element={<Detail />} /> */}
      <Route path="/blogs/:blogId" element={<BlogsPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
)
