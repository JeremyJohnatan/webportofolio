import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import LoadingScreen from './components/LoadingScreen';
import ThemeToggle from './components/ThemeToggle';
import useTheme from './hooks/useTheme';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    // Scroll ke top saat app mount
    window.scrollTo(0, 0);
    
    // Set scroll behavior manual
    window.history.scrollRestoration = 'manual';

    // Simulate loading - bisa dikurangi/ditambah sesuai kebutuhan
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {isLoading ? (
                <LoadingScreen isLoading={isLoading} />
              ) : (
                <div className="w-full min-h-screen bg-paper text-ink">
                  <ThemeToggle theme={theme} toggle={toggle} />
                  <Home />
                </div>
              )}
            </>
          }
        />
        <Route
          path="/experience"
          element={
            <div className="w-full bg-paper text-ink">
              <ThemeToggle theme={theme} toggle={toggle} />
              <Experience />
            </div>
          }
        />
        <Route
          path="/projects"
          element={
            <div className="w-full bg-paper text-ink">
              <ThemeToggle theme={theme} toggle={toggle} />
              <Projects />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;