import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Hero from './features/hero'
import Contact from './features/contact'
import Work from './features/work'
import WorkDetail from './features/work/detail'
import WorkList from './features/work/list'

function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Contact />
    </>
  )
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<WorkList />} />
      <Route path="/work/:workLink" element={<WorkDetail />} />
    </Routes>
  )
}

export default App
