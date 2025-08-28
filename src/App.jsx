// App.jsx
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Events from './components/Events';
import Projects from './components/Projects';
import Resources from './components/Resources';
import Hyperspeed from './background/Hyperspeed';
import './App.css';

function App() {
  return (
    <>
      <Navbar />

      {/* Hyperspeed as the full-page animated background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Hyperspeed 
          effectOptions={{
            onSpeedUp: () => { },
            onSlowDown: () => { },
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
              shoulderLines: 0x6effc4,
              brokenLines: 0x6effc4,
              leftCars: [0x6effc4, 0x47ffaa, 0x25ff99],
              rightCars: [0x6efff4, 0x47e5ff, 0x25caff],
              sticks: 0x6effc4
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
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700
            }}
            className="text-5xl sm:text-7xl md:text-9xl text-[#6EFFC4] mb-6 font-heading drop-shadow-lg"
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
              className="px-8 py-3 bg-[#6EFFC4] text-black font-semibold rounded-full shadow-[0_0_20px_rgba(110,255,196,0.6)] hover:bg-[#5ee1ad] transition-transform transform hover:scale-110"
            >
              🚀 Join Us
            </a>

            <a
              href="https://forms.gle/your-google-form-link" // 🔗 Replace with actual Google Form link
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-transparent border-2 border-[#6EFFC4] text-[#6EFFC4] font-semibold rounded-full hover:bg-[#6EFFC4]/10 shadow-[0_0_15px_rgba(110,255,196,0.4)] transition-transform transform hover:scale-110"
            >
              🎯 Apply for Interview
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