import React, {useState, useEffect, useRef} from "react";
import Pages from "components/js/pages";
import "assets/style/App.css";
import { BarLoader } from "react-spinners";



function App() {
  // Spinner
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, []);

  // Responsive
  const rendering = useRef(null);
  const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  const width = windowSize[0];
  const height = windowSize[1];

  rendering.current = 
    <>
      <div className="animationresponsive">
        <div class="phone"></div>
        <div class="computer"></div>
      </div>
      <div class="message">
        Please rotate your device or expand the window!
      </div>
    </>;
  if (width > height) {
    rendering.current = 
      <>
        {(isLoading) ? 
          <BarLoader color="#fff" className="spinner" width={200} height={8}/>
          :
          <Pages />
        }
      </>;
  }

  return rendering.current
}

export default App;
