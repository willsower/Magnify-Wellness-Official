import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";

// Data
import { partners } from "../data/partners_data";

// Fetch data on client side
export async function getStaticProps() {
    return {
      props: {
        data: partners,
      },
    };
  }

export default function Partnerships({ data }) {
  return (
    <Layout title="Events">
      <h1 className="text-center text-5xl">Partnerships</h1>
      <h5 className="text-2xl text-center mt-12">Partner with us!</h5>

      {/* Partners */}
      <div className = "mt-12 grid max-w-xs m-auto sm:grid-cols-2 sm:max-w-md md:grid-cols-3 md:max-w-2xl hover:cursor-pointer">
          {data.map((partner => 
            <div className = "mt-4 m-auto">
                <Link href = "/">
                    <Image src = {`/img/partners/${partner.image}`} height = "200" width = "200"/>
                </Link>
            </div>
          ))}
      </div>
    </Layout>
  );
}
