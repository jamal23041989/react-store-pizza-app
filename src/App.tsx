import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import Home from './pages/Home'
import MainLayouts from './layouts/MainLayouts'

import './scss/app.scss'

const Cart = lazy(() => import('./pages/Cart'))
const NotFound = lazy(() => import('./pages/NotFound'))
const FullPizza = lazy(() => import('./pages/FullPizza'))

function App() {
  return (
    <div className="content">
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path="/" element={<MainLayouts />}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<FullPizza />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
