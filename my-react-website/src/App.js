import './App.css';
import Navbar from './components/navbar';
import About from './components/about';
import Contact from "./components/contact";
import Projects from "./components/projects";
import Skills from "./components/skills";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
