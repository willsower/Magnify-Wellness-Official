import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";

import { merchandise } from "../data/merchandise_data";

// Fetch data on client side
export async function getStaticProps() {
  return {
    props: {
      data: merchandise,
    },
  };
}

export default function Merchandise({ data }) {
  return (
    <Layout title="Merchandise" pageName = "Magnify Store">

      <h2 className="text-center mt-12 text-2xl px-12">
        If you wish to make a purchase{" "}
        <span className="font-bold">Click Below</span>
      </h2>

      <div className="button text-center w-44 m-auto mt-4">
        <Link href="/">Purchase Form</Link>
      </div>

      {/* Merchandise */}
      {/* Commenting first div out. When you add more merchandise, (3 or more items use this line instead) */}
      {/* <div className="text-center mt-12 sm:grid sm:grid-cols-2 sm:max-w-lg sm:m-auto md:grid-cols-3 md:max-w-2xl"> */}
      <div className="text-center mt-12 sm:grid sm:grid-cols-2 sm:max-w-lg sm:m-auto">
        {data.map((item) => (
          <div className="mt-4 sm:mt-12">
            <Image
              src={`/img/merchandise/${item.image}`}
              height="200"
              width="220"
              className="rounded-lg"
            />
            <h4 className="text-xl">{item.name}</h4>
            <p className="text-lg">{item.price}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
