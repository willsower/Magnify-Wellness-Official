import React, { useState } from "react";
import Image from "next/image";
import Layout from "../../components/layout";
import Featured from "../../components/team/featured";

export async function getStaticPaths() {
  return {
    // Allow these paths to be called at build
    paths: [
      { params: { department: "art" } },
      { params: { department: "community_engagement" } },
      { params: { department: "events" } },
      { params: { department: "finance" } },
      { params: { department: "logistics" } },
      { params: { department: "marketing" } },
      { params: { department: "mental_health_changemakers" } },
      { params: { department: "mentorship" } },
      { params: { department: "partnerships" } },
      { params: { department: "research_and_development" } },
      { params: { department: "social_media" } },
      { params: { department: "tech" } },
      { params: { department: "writing" } },
    ],

    // Any other path will return 404 not found (since that department wouldn't exist other than the ones above)
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const file = await import(`../../data/team_data/departments/${params.department}.js`);
  const keys = Object.keys(file);

  return {
    props: {
      data: file[keys[0]],
    },
  };
}

export default function Department({ data }) {
  const [indexHovered, setIndexHovered] = useState(-1);

  return (
    <>
      {data.map((section) => (
        <Layout title={`Meet the ${section.departmentName} Team`}>
          {/* If no content, then empty team */}
          {section.departmentDescription == "" ? (
            <h1 className="font-bold text-4xl text-center pt-12 pb-12 md:text-5xl">
              {section.departmentName} Team Coming Soon!
            </h1>
          ) : (
            // Else display team
            <>
              <h1 className="font-bold text-4xl text-center pt-24 md:text-5xl">
                Meet the {section.departmentName} Team
              </h1>
              <p className="mt-12 text-center px-6 sm:px-16 md:max-w-5xl md:m-auto md:mt-12">
                {section.departmentDescription}
              </p>

              {/* Featured */}
              {section.featured.map((person) => (
                <Featured
                  name={person.name}
                  jobTitle={person.jobTitle}
                  description={person.description}
                  image={person.image}
                />
              ))}

              {/* Rest of Team */}
              <div className="mt-12 md:grid md:grid-cols-2 md:gap-4 md:max-w-xl md:m-auto md:mt-12 lg:grid-cols-3 lg:max-w-4xl">
                {section.team.map((person, index) => (
                  <div
                    className="w-60 h-44 bg-primary m-auto mt-4 text-center p-4 relative hover:bg-yellow-400 rounded-lg"
                    onMouseEnter={() => setIndexHovered(index)}
                    onMouseLeave={() => setIndexHovered(-1)}
                  >
                    {person.image == "" ? (
                      <Image
                        src={`/img/team/members/no_image.png`}
                        width="100"
                        height="100"
                        className="rounded-full"
                      />
                    ) : (
                      <Image
                        src={`/img/team/members/${person.image}`}
                        width="100"
                        height="100"
                        className="rounded-full"
                      />
                    )}
                    <p className="mt-4 font-bold text-lg">{person.name}</p>

                    {indexHovered == index && (
                      <div className=" bg-yellow-400 w-60 p-4 z-50 absolute left-0 rounded-lg">
                        {person.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </Layout>
      ))}
    </>
  );
}
