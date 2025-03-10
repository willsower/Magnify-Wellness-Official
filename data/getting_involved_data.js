/*
Populates get_involved.js page

  Current Structure
      get_involved = [
        {
          name: "",
          description: "",
          image: "",
          buttons: [
            {
              name: "",
              path: "",
            }
          ]
        },
      ]
      
  - name refers to the name of the item
  - description refers to the description
  - image refers to the name of the image (not the path)
  - buttons is an array of buttons
      - name: Refers to button name (For example: View the database)
      - path: Refers to the website you direct the user to when clicking on the button

  TO ADD ANOTHER ITEM, COPY THE FOLLOWING
      FOR ONE BUTTON
      {
          name: "",
          description: "",
          image: "",
          buttons: [
            {
              name: "",
              path: "",
            }
          ]
      }

      OR FOR TWO BUTTONS/MULTIPLE
        {
          name: "",
          description: "",
          image: "",
          buttons: [
            {
              name: "",
              path: "",
            },
            {
              name: "",
              path: "",
            }
          ]
      }
    ADD THE ABOVE JSON ITEM WITHIN THE CORRESPONDING SECTION

  ADD THE IMAGE TO /public/img/getting_involved folder
*/

export const get_involved = [
  // First Object
  {
    name: "Mental Health Changemakers Program",
    description:
      "The mental health forever database is a curated database with 10+ categories and 1000+ resources about mental health. From BIPOC and LGBTQIA+ resources to music, blogs, and international resources, the mental health changemakers aim to raise mental health awareness and help people around the world.",
    image: "Chapters.png",
    buttons: [
      // Button 1
      {
        name: "View the Database",
        path: "https://mentalhealthdatabase.carrd.co/",
      },
    ],
  },
  // Second Object
  {
    name: "Magnify x Community",
    description:
      "Come join our slack group of more than 200 members to talk about mental health, bond with others, learn about other organizations, ask for advice, and more!",
    image: "magnifyXcommunity.png",
    buttons: [
      // Button 1
      {
        name: "Join Slack",
        path: "https://join.slack.com/t/magnifywellne-a547546/shared_invite/zt-kkcfm6w3-6TGPvdgfGg1nvaXDGe1vJA",
      },
    ],
  },
  // Third Object
  {
    name: "Mentorship Program",
    description:
      "The Magnify Mentorship team endeavors to assist students with personalized academic and career guidance through our team of incredible mentors. Mentees are matched based on their personal needs and given the opportunity to network with like-minded student leaders from around the world.",
    image: "mentor.png",
    buttons: [
      // Button 1
      {
        name: "Request a Mentor",
        path: "https://forms.gle/7DudVJR2w2iELdZc6",
      },
    ],
  },
  // Fourth Object
  {
    name: "Ambassador Fellowship",
    description:
      "Magnify Wellness is proud to present our new initiative, the Ambassador Fellowship Program! Our ambassadors will continue the conversation about mental health awareness, spreading Magnify Wellness' mission of equal mental health support for all. Be part of our movement and ensure that everyone realizes the free services and programs we offer. Incentives include volunteer hours, certificate of recognition, features on social media, letters of recommendation, internship referrals, and access to Magnify Wellness' social capital.",
    image: "ambassadors.png",
    buttons: [
      // Button 1
      {
        name: "Join the Ambassadors",
        path: "https://yun43q3087e.typeform.com/to/hMDWYzJG",
      },
    ],
  },
  // Fifth Object
  {
    name: "Magnify Wellness Team",
    description:
      "Interested in joining one of our core teams at Magnify? We hire a variety of volunteers from artists to web developers. Help us grow closer to our mission of ensuring everyone gains access to mental health support!",
    image: "maggie-rocket.png",
    buttons: [
      // Button 1
      {
        name: "View Open Positions",
        path: "https://drive.google.com/file/d/1wCTBV5qWRP0MwK3Sb4cu4sht8tHVPbTV/view?usp=sharing",
      },
      // Button 2
      {
        name: "Join the Team",
        path: "https://docs.google.com/forms/d/1NE00gaO3kC3XHI6a6AQKQgLB94jsKYyoOOzJp52C7M0/viewform?edit_requested=true",
      },
    ],
  },
  // Sixth Object
  {
    name: "Magnify You Chapter Program",
    description:
      "Start your own Magnify You Chapter! Skip past all the hurdles of creating your own organization and receive guidance and mentorship to start creating impact right away. You will receive a free personalized journal, a limited-time only binder, service hours, and the ability to quickly enact positive change in your very own community. Applications are being reviewed on a rolling basis, but the binder will only be offered until end of 2021. Apply today!",
    image: "magnify-you.jpg",
    buttons: [
      // Button 1
      {
        name: "Learn More",
        path: "https://magnifywellness.org/magnify-you",
      },
    ],
  },
];
