import React from "react";
import { GitHub, Twitter, Mail } from "lucide-react";

export default function Footer({
  companyName = "Your Company",
  links = [
    { label: "Docs", href: "/docs" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  year = new Date().getFullYear(),
  showSocial = true,
}) {
  return (
    <footer className="w-full bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="text-xl font-semibold">{companyName}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              &middot; {year}
            </div>
          </div>

          <nav
            aria-label="Footer Navigation"
            className="flex gap-4 flex-wrap items-center justify-center"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm hover:underline px-2 py-1 text-gray-600 dark:text-gray-300"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {showSocial && (
              <div
                className="flex items-center gap-2"
                aria-label="Social links"
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  aria-label="GitHub"
                >
                  <GitHub className="w-4 h-4" />
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>

                <a
                  href="mailto:hello@example.com"
                  className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            )}

            <div className="text-xs text-gray-400">Made with ❤️</div>
          </div>
        </div>

        {/* Optional small disclaimer / legal row */}
        <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 text-center">
          © {year} {companyName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
