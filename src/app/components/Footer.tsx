import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-800 mt-20"> 
    <div className="w-full px-6 py-10"> 
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold text-white">Novel</h2>
          <p className="text-sm text-gray-400 mt-2">
            Portfolio pribadi yang berisi Project, skill, hobby, and anything About me.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-3 text-gray-300">Navigation</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#hobby" className="hover:text-white">Hobby & Skill</a></li>
            <li><a href="#project" className="hover:text-white">Projects</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-3 text-gray-300">Connect</h3>
          <div className="flex gap-4 text-xl">
            <a href="https://github.com/Huove" target="_blank" className="hover:text-gray-400">
              <FaGithub />
            </a>
            <a href="https://instagram.com/username" target="_blank" className="hover:text-pink-400">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-novel-679918381/" target="_blank" className="hover:text-blue-400">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      </div>
      <div className="border-t border-neutral-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Muhammad Novel. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;