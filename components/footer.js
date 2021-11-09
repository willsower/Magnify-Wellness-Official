import styles from "../styles/Footer.module.css";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className={`${styles.bg_primary} p-12 md:flex md:justify-center`}>
      <div className="md:w-64 pt-12 lg:w-96">
        {/* Logo */}
        <div className="flex pt-1">
          <Image src="/img/logo.png" height="40" width="40" />
          <p className="mt-1 font-bold text-lg">Magnify Wellness</p>
        </div>

        <p className="hidden md:block md:mt-44 md:text-xs">
          &copy; 2021 Magnify Wellness. All rights reserved.
        </p>
      </div>

      <div className={styles.footer_right}>
        {/* Resources */}
        <div className="md:px-5">
          <p className={styles.footer_header}>Resources</p>
          <Link href="/app">
            <p className={styles.footer_item}>App</p>
          </Link>
          <br />
          {/* <Link href="/">
            <p className={styles.footer_item}>Donate</p>
          </Link> */}
          {/* <br /> */}
          <Link href="/merchandise">
            <p className={styles.footer_item}>Buy Merch</p>
          </Link>
          <br />
          <Link href="https://magnifywellnessblog.wordpress.com/">
            <p className={styles.footer_item}>Blog</p>
          </Link>
          <br />
          <Link href="/get_involved">
            <p className={styles.footer_item}>Get Involved</p>
          </Link>
          <br />
          <Link href="/">
            <p className={styles.footer_item}>Our Partners</p>
          </Link>
          <br />
        </div>

        {/* Company */}
        <div className="md:px-5">
          <p className={styles.footer_header}>Company</p>
          <Link href="/team">
            <p className={styles.footer_item}>The Team</p>
          </Link>
          <br />
          <Link href="https://drive.google.com/file/d/1PV4Cn4FCqulviYodyBf7TjJ5d92Tvkkx/view">
            <p className={styles.footer_item}>Privacy policy</p>
          </Link>
          <br />
          <Link href="https://drive.google.com/file/d/1wakkAqzzJhi-1OTwovFJVeJad8ULBeAO/view">
            <p className={styles.footer_item}>Terms of service</p>
          </Link>
          <br />
        </div>

        {/* Contact */}
        <div className="md:px-5">
          <p className={styles.footer_header}>Contact</p>
          <Link href="/contact">
            <p className={styles.footer_item}>Contact Us</p>
          </Link>
          <br />
          <Link href="https://docs.google.com/forms/d/1NE00gaO3kC3XHI6a6AQKQgLB94jsKYyoOOzJp52C7M0/viewform?edit_requested=true">
            <p className={styles.footer_item}>Join the Team</p>
          </Link>
          <br />
        </div>

        {/* Social */}
        <div className="md:px-5">
          <p className={styles.footer_header}>Social</p>
          <div className="flex md:block">
            {/* Facebook */}
            <div className={styles.footer_social_item}>
              <a href="https://www.facebook.com/magnifywellnessapp/">
                <Image src="/icon/facebook.png" height="25" width="25"/>
              </a>
            </div>

            {/* Twitter */}
            <div className={styles.footer_social_item}>
              <a href="https://twitter.com/magnifywellness?lang=en">
                <Image src="/icon/twitter.png" height="25" width="25"/>
              </a>
            </div>

            {/* LinkedIn */}
            <div className={styles.footer_social_item}>
              <a href="https://www.linkedin.com/company/magnifyapp">
                <Image src="/icon/linkedin.png" height="25" width="25"/>
              </a>
            </div>

            {/* Instagram */}
            <div className={styles.footer_social_item}>
              <a href="https://www.instagram.com/magnifywellnessblog/">
                <Image src="/icon/instagram.png" height="25" width="25"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
