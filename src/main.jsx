import ReactDOM from 'react-dom/client'
import App from './App'
import { RouterProvider } from 'react-router-dom'
import { router } from './components/appRoutes/AppRoutes'

ReactDOM.createRoot(document.getElementById("root")).render(

  <RouterProvider router={router}>
    <App />
  </RouterProvider>
)