import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  Route, RouterProvider, createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Roles from './Components/Roles/Roles.jsx'
import Access from './Components/Access/Access.jsx'
import { store } from './store/store.js'
import {Provider} from 'react-redux'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path = '/' element = {<Layout />}>
        <Route path = '' element = {<Home />} />
        <Route path='/roles' element = {<Roles />}/>
        <Route path='/access' element = {<Access />}/>
      </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
      <RouterProvider router={router} />  
    </Provider>
  </StrictMode>,
)
