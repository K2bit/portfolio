import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Hero from '../components/Hero/Hero';
import { motion, AnimatePresence } from 'framer-motion';

export default function AppRoutes() {

  function pageTransition({ distance = 500, duration = 1 } = {}) {
  return {
    initial: { opacity: 1, x: distance },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 1, x: -distance },
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
                    {...pageTransition()}
                  >
                    <Home/>
                  </motion.div>
                }
              />

              <Route 
                path={"/hero"} 
                element={
                  <motion.div
                    {...pageTransition()}
                  >
                    <Hero/>
                  </motion.div>
                }
              />
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </>
  )
}
