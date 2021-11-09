import Image from "next/image";
import Layout from "../components/layout";

export default function Contact() {
  return (
    <Layout title="Contact">
      <h1 className="text-center text-5xl">Contact Us</h1>

      <div className="relative w-16 h-16 m-auto mt-12">
        <Image src="/img/logo.png" layout="fill" objectFit="contain" />
      </div>

      <div className="text-center text-lg mt-8">
        <p>Thanks for reaching out to us!</p>
        <p>We typically respond within 2-3 business days.</p>
      </div>

      <div className="max-w-sm m-auto mt-8 text-center">
        <form
          action="https://docs.google.com/forms/u/2/d/e/1FAIpQLScP_RHlZHiymJaJ5xsCVQXheKDxtPqazj9vXvIJwdMa2QzXHA/formResponse"
          method="POST"
          target="_blank"
        >
          <input
            className="border border-primary w-3/4 rounded-lg p-1 md:w-96"
            name=""
            type="text"
            required
            placeholder="Name"
          />
          <br />
          <input
            className="border border-primary w-3/4 mt-4 rounded-lg p-1 md:w-96"
            name=""
            type="email"
            required
            placeholder="Email"
          />
          <br />
          <textarea
            className="border border-primary w-3/4 mt-4 rounded-lg md:w-96 p-1"
            name=""
            cols="30"
            rows="8"
            required
            placeholder="Enter your message here ..."
          ></textarea>{" "}
          <br />
          <button type="submit" className="button w-24 mt-4">
            Send
          </button>
        </form>
      </div>
    </Layout>
  );
}
