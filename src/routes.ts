import { createBrowserRouter } from 'react-router'
import Root from './Root'
import Home from './pages/Home'
import Modes from './pages/Modes'
import Esports from './pages/Esports'
import Heroes from './pages/Heroes'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'heroes', Component: Heroes },
      { path: 'modes', Component: Modes },
      { path: 'esports', Component: Esports },
    ],
  },
])
