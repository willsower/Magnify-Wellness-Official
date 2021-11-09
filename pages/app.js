import Layout from "../components/layout";
import styles from "../styles/App.module.css";

// Data
import { reviews } from "../data/app_reviews_data";

// Fetch data on client side
export async function getStaticProps() {
  return {
    props: {
      data: reviews,
    },
  };
}

export default function App({ data }) {
  const star = 5;

  return (
    <Layout title="App">
      <h1 className="text-center text-5xl">The Magnify Wellness App</h1>

      <h2 className="text-center text-4xl mt-12">Reviews on the Store</h2>
      <div className="text-center md:grid md:grid-cols-2 md:m-auto md:max-w-2xl">
        {data.map((item) => (
          <div className="w-80 h-80 border border-primary rounded-lg p-6 text-center mt-12 m-auto">
            
            {/* Map the stars */}
            {[...Array(star)].map((e, i) => (
              <span className="busterCards" key={i}>
                {i < item.stars ? (
                  <span class={`fa fa-star ${styles.checked}`}></span>
                ) : (
                  <span class={`fa fa-star`}></span>
                )}
              </span>
            ))}

            <p className="text-xl mt-4">{item.name}</p>
            <p className="text-lg mt-4 font-bold">{item.reviewName}</p>
            <p className="text-lg mt-4">{item.description}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
