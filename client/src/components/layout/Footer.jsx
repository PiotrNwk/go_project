import React from "react";

export default function Footer({ companyName = "Your Company", year = new Date().getFullYear() }) {
  return (
    <footer className="w-full bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 p-4 text-center text-sm text-gray-500 dark:text-gray-400">
      <div>
        © {year} {companyName}. All rights reserved.
      </div>
      <div className="mt-2 space-x-4">
        <a href="mailto:piotrnowak87@outlook.com" className="hover:underline">
          Email
        </a>
        <a href="https://github.com/PiotrNwk" target="_blank" rel="noreferrer" className="hover:underline">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/piotr-nowak-380049155/" target="_blank" rel="noreferrer" className="hover:underline">
          LinkedIn
        </a>
        <a href="https://x.com/ICRC" target="_blank" rel="noreferrer" className="hover:underline">
          X
        </a>
        
      </div>
    </footer>
  );
}
