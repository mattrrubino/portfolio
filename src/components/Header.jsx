import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="h-16 z-50 sticky top-0 bg-white border-black border-2">
      <nav className="h-full px-4 flex justify-between items-center">
        <Link to="/" className="leading-none">Matthew Rubino</Link>
        <nav className="ml-8 flex space-x-4">
          <Link to="/experience">Experience</Link>
          <Link to="publications">Publications</Link>
          <Link to="projects">Projects</Link>
          <Link to="hackathons">Hackathons</Link>
        </nav>
      </nav>
    </header>
  );
}
