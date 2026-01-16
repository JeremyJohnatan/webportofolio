import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

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
    <>
      {isLoading ? (
        <LoadingScreen isLoading={isLoading} />
      ) : (
        <div className="w-full min-h-screen bg-paper text-ink">
          <Home />
        </div>
      )}
    </>
  );
}

export default App;