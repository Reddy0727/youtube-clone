import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Pages/Home'
import WatchScreen from './Pages/WatchScreen'
import SearchFeed from './Pages/SearchFeed'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { useSelector } from "react-redux"
import { AnimatePresence,motion } from "framer-motion"

function App() {
  const {isToggle} = useSelector((state)=>state.toggle)

  return (
    <>
      <BrowserRouter >
         <header className="sticky top-0 z-10 bg-[#212121] ">
           <Navbar />
         </header>
        <section className="flex gap-4  relative ">
        <AnimatePresence>
        {isToggle && (
          <motion.aside
            className="flex-[0.2]"
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }} 
          >
            <Sidebar />
          </motion.aside>
        )}
      </AnimatePresence>
        <main className="flex-1 p-4">
         <Routes>
           <Route path='/' element={<Home />}/>
           <Route path='/search/:searchTerm' element={<SearchFeed />}/>
           <Route path='/watch/:id' element={<WatchScreen />}/>
         </Routes>
        </main>
        </section>
      </BrowserRouter>
    </>
  )
}

export default App
