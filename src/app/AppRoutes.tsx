import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import Landing from '../pages/Landing';

export default function AppRoutes() {

  function pageTransition({ distance = 10, duration = 1 } = {}) {
    return {
      initial: { opacity: 0, y: distance },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -distance },
      transition: { duration }, 
    };
  }

  return (
    <>
      <AnimatePresence mode="wait">
        <BrowserRouter>
          <Routes>
              <Route 
                path={"/"} 
                element={
                  <motion.div
                    key="landing"
                    {...pageTransition()}
                  >
                    <Landing/>
                  </motion.div>
                }
              />

              <Route 
                path={"/home"} 
                element={
                  <motion.div
                    key="home"
                    {...pageTransition()}
                  >
                    <Home/>
                  </motion.div>
                }
              />
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </>
  )
}
