import React, { useState } from "react";
import Layout from "../../components/layout";
import Image from "next/image";
import { Featured } from "../../components/team/featured";
import { art } from "../../data/team_data/departments/art";
import { community } from "../../data/team_data/departments/community_engagement";
import { events } from "../../data/team_data/departments/events";
import { finance } from "../../data/team_data/departments/finance";
import { logistics } from "../../data/team_data/departments/logistics";
import { marketing } from "../../data/team_data/departments/marketing";
import { mental } from "../../data/team_data/departments/mental_health_changemakers";
import { mentorship } from "../../data/team_data/departments/mentorship";
import { partnerships } from "../../data/team_data/departments/partnerships";
import { research } from "../../data/team_data/departments/research_and_development";
import { social } from "../../data/team_data/departments/social_media";
import { tech } from "../../data/team_data/departments/tech";
import { writing } from "../../data/team_data/departments/writing";

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
  // TODO: Hacky way of doing this, I was trying to dynamically import the folders. Figure out how to do this cleanly
  const val = params.department.split("_")[0];
  var object = "";

  switch (val) {
    case "art":
      object = art;
      break;
    case "community":
      object = community;
      break;
    case "events":
      object = events;
      break;
    case "finance":
      object = finance;
      break;
    case "logistics":
      object = logistics;
      break;
    case "marketing":
      object = marketing;
      break;
    case "mental":
      object = mental;
      break;
    case "mentorship":
      object = mentorship;
      break;
    case "partnerships":
      object = partnerships;
      break;
    case "research":
      object = research;
      break;
    case "social":
      object = social;
      break;
    case "tech":
      object = tech;
      break;
    case "writing":
      object = writing;
      break;
  }

  return {
    props: {
      data: object,
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
            <h1 className="font-bold text-4xl text-center pt-24 pb-12 md:text-5xl">
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
                    className="w-60 h-44 bg-blue-200 m-auto mt-4 text-center p-4 relative hover:bg-yellow-400 rounded-lg"
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
