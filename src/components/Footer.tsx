import React from "react";
import Link from "next/link";
import { FaSquareThreads } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <>
      <hr className="border border-b-blue-700 dark:border-blue-600" />
      <footer className="px-4 sm:px-6 pt-12 pb-6 font-[sans-serif]">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold uppercase leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-900 dark:from-blue-500 dark:to-indigo-400">
              Services
            </h2>
            <ul className="space-y-2.5">
              <li>
                <Link href="/services" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Enterprise Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Mobile Application Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Cloud Architecture &amp; DevOps
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Digital Transformation Consulting
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  UI/UX Design &amp; User Experience
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-900 dark:from-blue-500 dark:to-indigo-400">
              Company
            </h2>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold uppercase leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-900 dark:from-blue-500 dark:to-indigo-400">
              Solutions
            </h2>
            <ul className="space-y-2.5">
              <li>
                <Link href="/services" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Custom Software Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Cloud Architecture
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Enterprise Integration
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Quality Assurance &amp; Testing
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-900 dark:from-blue-500 dark:to-indigo-400">
              Connect
            </h2>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://www.facebook.com/cybercircusconnet"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-blue-600 w-8 h-8"
                    viewBox="0 0 49.652 49.652"
                  >
                    <path
                      d="M24.826 0C11.137 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.137 38.516 0 24.826 0zM31 25.7h-4.039v14.396h-5.985V25.7h-2.845v-5.088h2.845v-3.291c0-2.357 1.12-6.04 6.04-6.04l4.435.017v4.939h-3.219c-.524 0-1.269.262-1.269 1.386v2.99h4.56z"
                      data-original="#000000"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/cybercircusconnects"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 .5C5.648.5.5 5.648.5 12c0 5.093 3.292 9.412 7.86 10.946.574.112.785-.249.785-.555 0-.273-.01-1.172-.015-2.128-3.198.696-3.873-1.372-3.873-1.372-.523-1.329-1.28-1.683-1.28-1.683-1.046-.715.08-.701.08-.701 1.158.081 1.768 1.189 1.768 1.189 1.028 1.763 2.698 1.253 3.355.958.104-.745.402-1.253.732-1.541-2.553-.29-5.237-1.277-5.237-5.685 0-1.256.448-2.283 1.185-3.088-.119-.289-.513-1.454.113-3.033 0 0 .967-.31 3.17 1.18a11.03 11.03 0 0 1 2.886-.388c.979.005 1.966.132 2.886.388 2.202-1.49 3.167-1.18 3.167-1.18.628 1.579.234 2.744.115 3.033.739.805 1.183 1.832 1.183 3.088 0 4.419-2.689 5.391-5.252 5.674.413.355.781 1.057.781 2.131 0 1.539-.014 2.779-.014 3.158 0 .309.208.673.79.553C20.214 21.407 23.5 17.092 23.5 12 23.5 5.648 18.352.5 12 .5z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/cybercircus.connect"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    viewBox="0 0 152 152"
                  >
                    <linearGradient
                      id="a"
                      x1="22.26"
                      x2="129.74"
                      y1="22.26"
                      y2="129.74"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#fae100" />
                      <stop offset=".15" stopColor="#fcb720" />
                      <stop offset=".3" stopColor="#ff7950" />
                      <stop offset=".5" stopColor="#ff1c74" />
                      <stop offset="1" stopColor="#6c1cd1" />
                    </linearGradient>
                    <g data-name="Layer 2">
                      <g data-name="03.Instagram">
                        <rect
                          width="152"
                          height="152"
                          fill="url(#a)"
                          data-original="url(#a)"
                          rx="76"
                        />
                        <g fill="#fff">
                          <path
                            fill="#ffffff10"
                            d="M133.2 26c-11.08 20.34-26.75 41.32-46.33 60.9S46.31 122.12 26 133.2q-1.91-1.66-3.71-3.46A76 76 0 1 1 129.74 22.26q1.8 1.8 3.46 3.74z"
                            data-original="#ffffff10"
                          />
                          <path
                            d="M94 36H58a22 22 0 0 0-22 22v36a22 22 0 0 0 22 22h36a22 22 0 0 0 22-22V58a22 22 0 0 0-22-22zm15 54.84A18.16 18.16 0 0 1 90.84 109H61.16A18.16 18.16 0 0 1 43 90.84V61.16A18.16 18.16 0 0 1 61.16 43h29.68A18.16 18.16 0 0 1 109 61.16z"
                            data-original="#ffffff"
                          />
                          <path
                            d="m90.59 61.56-.19-.19-.16-.16A20.16 20.16 0 0 0 76 55.33 20.52 20.52 0 0 0 55.62 76a20.75 20.75 0 0 0 6 14.61 20.19 20.19 0 0 0 14.42 6 20.73 20.73 0 0 0 14.55-35.05zM76 89.56A13.56 13.56 0 1 1 89.37 76 13.46 13.46 0 0 1 76 89.56zm26.43-35.18a4.88 4.88 0 0 1-4.85 4.92 4.81 4.81 0 0 1-3.42-1.43 4.93 4.93 0 0 1 3.43-8.39 4.82 4.82 0 0 1 3.09 1.12l.1.1a3.05 3.05 0 0 1 .44.44l.11.12a4.92 4.92 0 0 1 1.1 3.12z"
                            data-original="#ffffff"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@cybercircus.connect"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="red"
                      d="M23.498 6.186a2.919 2.919 0 0 0-2.05-2.068C19.014 3.5 12 3.5 12 3.5s-7.014 0-9.448.618A2.919 2.919 0 0 0 .502 6.186C0 8.637 0 12 0 12s0 3.363.502 5.814a2.919 2.919 0 0 0 2.05 2.068C4.986 20.5 12 20.5 12 20.5s7.014 0 9.448-.618a2.919 2.919 0 0 0 2.05-2.068C24 15.363 24 12 24 12s0-3.363-.502-5.814z"
                    />
                    <path
                      fill="white"
                      d="M9.75 15.568V8.432L15.75 12l-6 3.568z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.threads.com/@cybercircus.connect"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareThreads size={32} />
                </a>
              </li>
            </ul>
            <div className="!mt-8">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Transform your business with enterprise software solutions.
              </p>
              <div className="mt-4">
                <Link
                  href="/contact"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-sm text-white font-medium py-3 px-6 tracking-wide rounded-lg transition-colors"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border border-b-blue-700 dark:border-blue-600" />
        <div className="max-w-screen-xl mx-auto text-center">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Cyber Circus © {new Date().getFullYear()}. All rights reserved. Enterprise Software Development &amp; Digital Transformation.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

