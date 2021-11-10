import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";

// Data
import { get_involved } from "../data/getting_involved_data";

// Fetch data on client side
export async function getStaticProps() {
  return {
    props: {
      data: get_involved,
    },
  };
}

export default function GettingInvolved({ data }) {
  return (
    <Layout title="Get Involved" pageName = "Get Involved">

      {/* Loop through each item */}
      {data.map((item) => (
        <div className="px-4 mt-12 sm:max-w-3xl sm:m-auto md:flex md:max-w-5xl sm:mt-12">
          {/* Image */}
          <div className="md:w-2/6">
            <div className = "relative h-56 w-56 m-auto md:mt-8">
            <Image
              src={`/img/getting_involved/${item.image}`}
              layout = "fill"
              objectFit = "contain"
            />
            </div>
          </div>

          {/* Content */}
          <div className="md:w-4/6 text-center mt-4 md:text-left">
            <h2 className="text-3xl">{item.name}</h2>
            <p className="text-2xl mt-4">{item.description}</p>

            {/* Loop through buttons (if more than 1) */}
            {item.buttons.map((button) => (
              <>
                <div className={"button mt-4 text-center w-44 m-auto md:m-0 md:mt-4"}>
                  <Link href={button.path}>{button.name}</Link>
                </div>
              </>
            ))}
          </div>
        </div>
      ))}
    </Layout>
  );
}
