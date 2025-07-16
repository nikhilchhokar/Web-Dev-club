import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Events from './components/Events';
import Projects from './components/Projects';
import Resources from './components/Resources';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0b0b0c] min-h-screen text-[#d0d0d0]">
        {/* Landing Page Section */}
        <section className="flex flex-col items-center justify-center h-[60vh]">
          <h1 className="text-5xl font-extrabold text-[#6EFFC4] mb-4">The Web Dev Club</h1>
          <p className="text-xl max-w-xl text-center">Welcome to the official website of the Web Development Society of our college. Explore events, projects, resources, and join our vibrant community!</p>
        </section>
        <AboutUs />
        <Events />
        <Projects />
        <Resources />
      </main>
    </>
  );
}

export default App;
