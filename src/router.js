// e.g. src/router.js
import { createBrowserRouter } from 'react-router-dom'
import routes from './routes'

export const router = createBrowserRouter(routes, {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
})
