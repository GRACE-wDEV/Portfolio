import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Repos, Now } from "./components";

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Hero />
              </div>
              <About />
              <Experience />
              <Tech />
              <Works />
              <Feedbacks />
              <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
              </div>
            </>
          } />
          <Route path="/repos" element={
            <div className="pt-20">
              <Repos />
              <div className='relative z-0'>
                <StarsCanvas />
              </div>
            </div>
          } />
          <Route path="/now" element={
            <div className="pt-20">
              <Now />
              <div className='relative z-0'>
                <StarsCanvas />
              </div>
            </div>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
