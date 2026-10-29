import { Routes, Route } from 'react-router-dom'

import Layout from './components/layout/Layout'

import Home from './pages/Home'
import Careers from './pages/Careers'
import CareerDetail from './pages/CareerDetail'
import Roadmap from './pages/Roadmap'
import Discover from './pages/Discover'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Bookmarks from './pages/Bookmarks'

function App() {
  return (
    <Layout>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/careers"
          element={<Careers />}
        />

        <Route
          path="/careers/:slug"
          element={<CareerDetail />}
        />

        <Route
          path="/roadmaps/:slug"
          element={<Roadmap />}
        />

        <Route
          path="/discover"
          element={<Discover />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/bookmarks"
          element={<Bookmarks />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

      </Routes>

    </Layout>
  )
}

export default App