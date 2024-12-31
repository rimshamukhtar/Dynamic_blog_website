import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,

} from "@fortawesome/free-brands-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
config.autoAddCss = false; // Disable automatic addition of CSS


export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
      
        <div className="mb-6">
          <h2 className="text-2xl font-bold tracking-wider">Echoes of AI</h2>
        </div>

   
        <nav className="mb-6">
          <ul className="flex justify-center space-x-8 text-sm uppercase font-medium">
            <li>
              <a
                href="/"
                className="text-gray-400 hover:text-white transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/[slug]"
                className="text-gray-400 hover:text-white transition"
              >
                Blog Posts
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-gray-400 hover:text-white transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact_me"
                className="text-gray-400 hover:text-white transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

      
        <div className="flex justify-center space-x-6 text-gray-400 text-2xl mb-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href= "https://github.com/rimshamukhtar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/rimsha-mukhtar-ahmed-6b88632b5"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>

   
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} AI Future Blog. All rights reserved.
        </p>
        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-500">
            Designed and developed by Rimsha Mukhtar.
          </p>
        </div>
      </div>
    </footer>
  );
}
