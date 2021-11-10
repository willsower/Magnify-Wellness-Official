import Image from "next/image";
import Layout from "../components/layout";

export default function Events() {
  return (
    <Layout title="Events" pageName = "Upcoming Events">

      <div className = "relative m-auto w-96 h-96">
      <Image src="/img/events.png" layout="fill" objectFit="contain" />
      </div>

    </Layout>
  );
}
