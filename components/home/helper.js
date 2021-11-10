import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

// Feature within About Section
function Feature({ image_path, feature_name, feature_desc }) {
  return (
    <div className="text-center w-44 m-auto">
      <Image src={image_path} height="70" width="70" />
      <h2 className="text-2xl font-bold">{feature_name}</h2>
      <p className="text-md">{feature_desc}</p>
    </div>
  );
}

// Press Card
function Press({ image_path, press_name, article_link, hei, wid }) {
  return (
    <div
      className={`${styles.press} relative m-auto text-center mt-12 py-6 w-64 h-80 bg-white rounded-lg`}
    >
      <div className="relative h-32 w-32 m-auto">
        <Image src={image_path} layout="fill" objectFit="contain" />
      </div>
      <h2 className="mt-4 font-medium text-lg px-5 absolute top-34">
        {press_name}
      </h2>

      <Link href={article_link}>
        <div className="button absolute bottom-6 left-0 right-0 m-auto w-32">
          Go to article
        </div>
      </Link>
    </div>
  );
}

// Blog Card
function Blog({ image_path, press_name, article_link }) {
  return (
    <div
      className={`${styles.press} relative m-auto text-center mt-12 py-6 w-64 h-80 bg-white rounded-lg`}
    >
      <div className="relative h-32 w-32 m-auto">
        <Image src={image_path} layout="fill" objectFit="contain" />
      </div>

      <h2 className="mt-4 font-medium text-lg px-5 absolute top-36 left-0 right-0 m-auto">
        {press_name}
      </h2>

      <Link href={article_link}>
        <div className="button absolute bottom-8 left-0 right-0 m-auto w-32">
          Go to article
        </div>
      </Link>
    </div>
  );
}

// Metric
function Metric({ num, sign, action }) {
  return (
    <div className="flex justify-center items-center w-36 h-36 md:h-40 md:w-40 lg:w-52 lg:h-52 bg-white m-2.5 p-4 text-center rounded-full">
      <div className="">
        <div className="flex justify-center">
          <p className="font-extrabold text-2xl lg:text-3xl">{num}</p>
          <p className="font-extrabold text-2xl lg:text-3xl">{sign}</p>
          <br />
        </div>
        <p className="text-2xl lg:text-3xl">{action}</p>
      </div>
    </div>
  );
}

export { Feature, Press, Blog, Metric };
