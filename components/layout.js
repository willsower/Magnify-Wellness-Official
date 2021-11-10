import Head from "next/head";
import Nav from "./nav";
import Footer from "./footer";

function Layout({children, title, pageName}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/img/logo.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <Nav />
      <main className = "py-12">
          <h1 className="text-center text-5xl">{pageName}</h1>
          {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
