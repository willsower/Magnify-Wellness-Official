/*
Populates /team/index.js page

  Current Structure is split into person, and departments
      team = [
        {
          person: [
            {

            }
          ],
          departments: [
            {

            }
          ]
        },
      ]
    
      - person refers to the featured, for now you have your CEO and COO
      - departments refers to the various departments you currently have
      

  TO ADD ANOTHER FEATURED PERSON, COPY THE FOLLOWING
      {
          name: "",
          jobTitle: "",
          description: "",
          image: "",
      }
    ADD THE ABOVE JSON ITEM WITHIN THE PERSON SECTION
    ADD THE IMAGE TO /public/img/team/members folder

  TO ADD ANOTHER DEPARTMENT, COPY THE FOLLOWING
      {
          departmentName: "",
          departmentImage: "",
          path: "",
      }
    ADD THE ABOVE JSON ITEM WITHIN THE DEPARTMENT SECTION
    ADD THE IMAGE TO /public/img/team/department_logos folder
*/

export const team = [
  {
    // These are featured people on home page above the teams
    person: [
      {
        name: "Abigayle Peterson",
        jobTitle: "Founder & CEO",
        description:
          "Abigayle Peterson is a current freshman at Western Washington University in the Honors Program and National Science Foundation CS/M Scholars Program majoring in computer science. She is currently particpating in undergraduate research using machine-learning and AI to improve the The U.S education system's computer science curriculum. When she is not coding, you can find her eating Asian food with friends, hiking, or writing.",
        image: "abigayle_peterson.jpg",
      },
      {
        name: "Aditi Shinde",
        jobTitle: "COO",
        description:
          "Aditi is a freshman at The University of Texas at San Antonio and is majoring in Information Systems. She is involved in several organizations and is passionate about encouraging more girls to join STEM fields to close the gender gap. In her free time she loves to bake cookies, draw, play the ukulele, and drink chai. Aditi loves being a part of Magnify because of the impact it has on young people.",
        image: "aditi_shinde.jpg",
      },
    ],

    departments: [
        {
            departmentName: "Tech",
            departmentImage: "tech.png",
            path: "tech"
        },
        {
            departmentName: "Mental Health Changemakers",
            departmentImage: "mental_health_changemakers.png",
            path: "mental_health_changemakers"
        },
        {
            departmentName: "Art",
            departmentImage: "art.png",
            path: "art"
        },
        {
            departmentName: "Finance",
            departmentImage: "finance.png",
            path: "finance"
        },
        {
            departmentName: "Partnerships",
            departmentImage: "partnership.png",
            path: "partnerships"
        },
        {
            departmentName: "Marketing",
            departmentImage: "marketing.png",
            path: "marketing"
        },
        {
            departmentName: "Events",
            departmentImage: "events.png",
            path: "events"
        },
        {
            departmentName: "Social Media",
            departmentImage: "social_media.png",
            path: "social_media"
        },
        {
            departmentName: "Writing",
            departmentImage: "writing.png",
            path: "writing"
        },
        {
            departmentName: "Mentorship",
            departmentImage: "mentorship.png",
            path: "mentorship"
        },
        {
            departmentName: "Research and Development",
            departmentImage: "research.png",
            path: "research_and_development"
        },
        {
            departmentName: "Logistics",
            departmentImage: "logistics.png",
            path: "logistics"
        },
        {
            departmentName: "Community Engagement",
            departmentImage: "community_engagement.png",
            path: "community_engagement"
        },
    ],
  },
];
