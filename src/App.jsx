// App.jsx
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Events from './components/Events';
import Projects from './components/Projects';
import Resources from './components/Resources';
import Hyperspeed from './background/Hyperspeed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faUsers } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  return (
    <>
    <Navbar />
      {/* Hyperspeed as the full-page animated background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Hyperspeed
  effectOptions={{
    onSpeedUp: () => {},
    onSlowDown: () => {},
    distortion: 'mountainDistortion',
    length: 400,
    roadWidth: 14,
    islandWidth: 5,
    lanesPerRoad: 6,
    fov: 110,
    fovSpeedUp: 150,
    speedUp: 2,
    carLightsFade: 0.4,
    totalSideLightSticks: 50,
    lightPairsPerRoadWay: 50,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [60, 80],
    movingCloserSpeed: [-120, -160],
    carLightsLength: [400 * 0.05, 400 * 0.15],
    carLightsRadius: [0.05, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.2, 0.2],
    carFloorSeparation: [0.05, 1],
    colors: {
      roadColor: 0x050505,
      islandColor: 0x0b0f0d,
      background: 0x000000,

      // accents changed to #45D4FF
      shoulderLines: 0x45d4ff,
      brokenLines: 0x45d4ff,

      // left/right car light palettes aligned to the new brand blue
      leftCars: [0x45d4ff, 0x1fbfff, 0x6fe0ff],   // neon blue range
      rightCars: [0x6fe0ff, 0x47e5ff, 0x25caff],  // keep sky-leaning blues
      sticks: 0x45d4ff
    }
  }}
/>
      </div>

      <main className="bg-[#0b0b0c]/80 min-h-screen text-[#d0d0d0] relative z-10">
        
        {/* 🔥 Home Page / Landing Section */}
        <header className="flex flex-col items-center justify-center h-screen text-center px-4">
          {/* Main Heading */}
          <h1
            style={{
              fontFamily: "'Urbanist', sans-serif",
              fontWeight: 900,
              fontStyle:"Italic"
            }}
            className="text-5xl sm:text-7xl md:text-9xl text-brand ext-[#45D4FF] mb-6  drop-shadow-lg"
          >
            The Web Dev Club
          </h1>

          {/* Tagline below main heading */}
          <p className="text-xl sm:text-2xl md:text-3xl text-white tracking-wide mb-10 font-light">
            Code. Create. Collaborate.
          </p>

          {/* Cool Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 z-10">
            <a
              href="https://forms.gle/your-google-form-link" // 🔗 Replace with actual Google Form link
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-brand text-black font-semibold rounded-full shadow-brand hover:shadow-brandStrong hover:bg-dark transition-transform transform hover:scale-110"
            >
              <FontAwesomeIcon className="text-[#00000]"icon={faRocket} /> Join Us
            </a>

            <a
              href="https://forms.gle/your-google-form-link" // 🔗 Replace with actual Google Form link
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-transparent border-2 border-brand text-brand font-semibold rounded-full hover:bg-brand/10 hover:shadow-brandStrong shadow-brand transition-transform transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faUsers} /> Apply for Interview
            </a>
          </div>
        </header>

        {/* Other Sections */}
        <section>
          <AboutUs className="h-[100vh]" />
          <Events />
          <Projects />
          <Resources />
        </section>
      </main>
    </>
  );
}

export default App;