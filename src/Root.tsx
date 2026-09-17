import { Outlet } from 'react-router'
import Nav from './components/Nav'

export default function Root() {
  return (
    <div className="min-h-screen bg-[#04070f] text-white overflow-x-hidden">
      <Nav />
      <Outlet />
    </div>
  )
}
