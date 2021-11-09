import styles from "../styles/Nav.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className="flex pt-2 pb-4">
        {/* Logo */}
        <a
          href="/"
          className={` ${styles.scale} flex ml-6 pt-1 hover:cursor-pointer h-12`}
        >
          <div className="w-10 h-10 relative">
            <Image src="/img/logo.png" layout="fill" objectFit="contain" />
          </div>

          <p className="mt-1 font-bold text-lg">Magnify Wellness</p>
        </a>

        {/* Links */}
        <div className={styles.links}>
          <div className="block md:hidden">
            {/* Hamburger */}
            <button
              className="px-3 py-2 border rounded hover:text-white hover:border-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          <ul
            className={`${
              isOpen ? `${styles.hamburger_top_item}` : "hidden"
            } md:flex`}
          >
            <div
              className={`${
                isOpen ? `${styles.hamburger_top_item}` : `${styles.top_item}`
              } ${styles.scale}`}
            >
              <Link href="/app">App</Link>
            </div>

            <div
              className={`${
                isOpen ? `${styles.hamburger_top_item}` : `${styles.top_item}`
              }  ${styles.scale}`}
            >
              <Link href="/get_involved">Get Involved</Link>
            </div>

            {/* News Dropdown */}
            <div className={`${!isOpen && `${styles.dropdown}`}`}>
              <button className={`${isOpen && "hidden"}`}>News</button>
              <div className={`${!isOpen && `${styles.dropdown_content}`}`}>
                <p className = {`${isOpen && `${styles.hamburger_top_item}  ${styles.scale}`}`}>
                  <Link href="/events">Events</Link>
                </p>
                <p className = {`${isOpen && `${styles.hamburger_top_item}  ${styles.scale}`}`}>
                  <Link href="https://magnifywellnessblog.wordpress.com/">
                    Blog
                  </Link>
                </p>
                <p className = {`${isOpen && `${styles.hamburger_top_item}  ${styles.scale}`}`}>
                  <Link href="/press">Press</Link>
                </p>
              </div>
            </div>
            {/* End of News Dropdown */}

            {/* Company Dropdown */}
            <div className={`${!isOpen && `${styles.dropdown}`}`}>
              <button className={`${isOpen && "hidden"}`}>Company</button>
              <div className={`${!isOpen && `${styles.dropdown_content}`}`}>
                <div className = {`${isOpen && `${styles.hamburger_top_item}  ${styles.scale}`}`}>
                  <Link href="/team">Team</Link>
                </div>
                <div className = {`${isOpen && `${styles.hamburger_top_item}  ${styles.scale}`}`}>
                  <Link href="https://docs.google.com/forms/d/1NE00gaO3kC3XHI6a6AQKQgLB94jsKYyoOOzJp52C7M0/viewform?edit_requested=true">
                    Careers
                  </Link>
                </div>
                <div className = {`${isOpen && `${styles.hamburger_top_item}  ${styles.scale}`}`}>
                  <Link href="/merchandise">Buy our Merch</Link>
                </div>
              </div>
            </div>
            {/* End of Company Dropdown */}

            <div
              className={`${
                isOpen ? `${styles.hamburger_top_item}` : `${styles.top_item}`
              }  ${styles.scale}`}
            >
              <Link href="/contact">Contact</Link>
            </div>

            {/* <div className={`${isOpen ? `${styles.hamburger_top_item}` : `${styles.top_item}`}`}>
              <Link href="/">
                <p className="font-bold hover:cursor-pointer">Donate</p>
              </Link>
            </div> */}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
