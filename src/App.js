import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import SocialLink from "./components/SocialLink";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";


function App() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <SocialLink />
      <About/>
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
