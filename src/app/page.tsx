import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/project";
import Contact from "./components/Contact"
import HobbySkills from "./components/hobby_skills"
import Footer from "./components/Footer"
import { FloatingNav as Navbar } from "./components/ui/navbar";
export default function Page() {
  return (
    <>
      <main className="relative bg-secondary flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <Navbar
            navItems={[
              { name: "Home", link: "#" },
              { name: "About", link: "#about" },
              { name: "Content", link: "#hobby" },
              { name: "Contact", link: "#contact" },
            ]}
          />
          <Home />
          <About />
          <HobbySkills />
          <Project />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}