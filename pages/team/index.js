import Image from "next/image";
import Layout from "../../components/layout";
import { Featured } from "../../components/team/featured";

// Data
import { team } from "../../data/team_data/team_home";

// Fetch data on client side
export async function getStaticProps() {
  return {
    props: {
      data: team,
    },
  };
}

export default function Team({ data }) {
  return (
    <Layout title="Meet the Team" pageName="Meet the Team">
      {data.map((section) => (
        <>
          {/* Featured People */}
          {section.person.map((person) => (
            <Featured
              name={person.name}
              jobTitle={person.jobTitle}
              description={person.description}
              image={person.image}
            />
          ))}

          <h3 className="mt-24 text-5xl text-center">Departments</h3>
          {/* List of Departments */}
          <div className="sm:grid sm:grid-cols-2 sm:max-w-xl sm:m-auto md:grid-cols-3 md:max-w-4xl">
            {section.departments.map((department) => (
              <div className="border-2 border-yellow-200 w-56 h-80 md:w-64 mt-12 m-auto hover:cursor-pointer">
                <a href={`/team/${department.path}`}>
                  <div className="text-center">
                    <Image
                      src={`/img/team/department_logos/${department.departmentImage}`}
                      height="200"
                      width="200"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative h-28">
                    <hr className="border-2" />
                    <p className="text-3xl text-center p-4">
                      {department.departmentName}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </>
      ))}
    </Layout>
  );
}
