# Adding Team Members

[Go back to Home](index.md)

## Files (An Overview)

**Image directories**

`/public/img/team/department_logos/`

Department logos is where you put the different logos of each department. This is displayed on the Home Team page. When you go to the home page, you see your CEO and COO. Below are all the different departments (e.g., Tech, Writing, Art, etc). The logos you see on each card are added here.

`/public/img/team/members/`

Members directory are ALL members of your organization. You put ALL members here. The image should be firstName_lastName.extension. Example: `taichen_rose.png` or `taichen_rose.jpeg`. Please try to follow this naming convention. Don't just use first name, since your organization may grow.

I understand some users want to stay confidential. Don't add an image, and leave the `image: ""` blank in the JSON teams. This will mean no image and maggie will be default image.

**Data Files**

`/data/team_data/team_home.js`

This file holds the data on your `/public/team/index.js` file. The featured people (e.g., CEO and COO) data is here, and all the department names. Go ahead and study the conventions here.

`/data/team_data/departments/*.js`

In this directory are all the different departments. (E.g., mentors, events, social media). When you add a member to the department, you add the member to the file. This data gets populated within the `pages/team[department].js` file.

**Code directories**

`pages/team/index.js`

Displays content from the `data/team_data/team_home.js` file.

`pages/team/[department].js`

This page dynamically figures out what page it's on. Is it on tech? Logistics? Finance? Whatever page it decides it's on, it will load the corresponding data file from `data/team_data/departments/*.js`. For example, I am on the tech department team page, the code realizes this and populates the `data/team_data/department/tech.js` file and only this file. It doesn't get the unnecessary files.

## Adding To Files

### How to add a new department

Wow! Congrats, you are adding department XYZ. Here are the steps to do so.

1. First, get the logo of department XYZ. Add the logo to `public/img/team/department_logos/` directory. Please make sure you give the logo a meaningful name. Example: `XYZ.png` Don't just call it `logo`, this is not a meaningfull name.

2. Go into `/data/team_data/team_home.js`. Scroll down to the bottom and you will see a structure similiar to the following:

```JSON
departments: [
    {
        departmentName: "",
        departmentImage: "",
        path: "",
    },
]
```

Copy the following:

```JSON
    {
        departmentName: "",
        departmentImage: "",
        path: "",
    },
```

And add it to the continuation of the departments array. If you get confused, look into JSON format before you do this so you don't accidentally push something incorrect.

- `departnmentName` Should be the department for example (`XYZ`)
- `departmentImage` Should be the image name for example (`XYZ.png`). It should NOT be the path. Do NOT do `/img/team/...blah`. The code already does this in `public/team/index.js`
- `path` Should be the department for example (`XYZ`) in lower casing and snake case. For example if your new department is `XYZ` then path should be `xyz`. Or if your new department is called `Mental Advocates` then your path would be `mental_advocates`. This path is what triggers the allowed paths and links the buttons to the page

3. Go into `pages/team/[department].js` file and in the getStaticPaths() function add the following:

```JSON
{params: {department: ""}},
```

You add the department here from the path section. This allows these paths to be built at runtime.

4. Go under `team_data/departments` and create the new JSON file for the department. Example `xyz.js`. Within this, copy the template and fill it out accordingly. You can leave some blank if you haven't yet hired. This is okay.

Read the next entries below to figure out how to add people to the files. You can look at other documents to see how they are formatted.

TEMPLATE:

```JSON
export const change_name_here = [
  {
    departmentName: "",
    departmentDescription: "",
    departmentImagePath: "",

    // Featured people, this is usually team lead
    featured: [],

    // Rest of team
    team: [],
  },
];

```

### How to add a new featured person to Home Team Page.

Congrats! You just got a CMO or CTO, they should be added to the home page of the team page under your CEO and COO.

1. Get the image of the person and add to `/public/img/team/members/`. Remember to add their first and last name to the image. Example: `taichen_rose.png` or `taichen_rose.jpeg`. Follow this naming convention. They don't have to add an image, if they don't it will be blank and maggie will be their profile.

2. Go into `/data/team_data/team_home.js` Under the `person: [ ]` section you should see two entries. Abigayle the CEO and Aditi the COO. Add in the new member.

Copy the following to do so:

```JSON
{
    name: ""
    jobTitle: "",
    description: ""
    image: ""
},
```

- name is the persons name
- jobTitle is the title (e.g., CTO or CMO)
- description is their personalized description
- image is the first and lastname of their image with the extension. THIS IS NOT THE PATH. Leave this blank if they didn't want their photo. Maggie will be default picture

### How to add a new member to a specific team

There are two different types of members you can add to a team. Featured, or regular member.

**Featured** are the team leads. For example Andrei is the tech lead, he is featured. There can be more than one featured.

**Regular Member** Regular members are the people within each team that aren't leads.

Look at the JSON format of these files:

```JSON
      department_name_here = [
        {
          featured: [
            {

            }
          ],
          team: [
            {

            }
          ]
        },
      ]
```

##### If you are adding to the featured page:

1. Add the image to `/public/img/team/members`. Remember to have the image be first name and last name. They don't have to add an image, if they don't it will be blank and maggie will be their profile.

2. Go to the corresponding departments data file in `/data/team_data/departments/___.js`

3. Copy the following JSON

```JSON
      {
        name: "",
        jobTitle: "",
        description:
          "",
        image: "",
      },
```

- Name is the name of the person
- Job title is the title (e.g., Director of XYZ or Co-Director of XYZ)
- description is the description
- image is the first name and lastname of their image in the `/members` folder. If they don't want their image leave it blank. Maggie will be default image.

4. Add the updated JSON into the `featured: []` portion of the code

##### If you are adding to the members team:

1. Add the image to `/public/img/team/members`. Remember to have the image be first name and last name. They don't have to add an image, if they don't it will be blank and maggie will be their profile.

2. Go to the corresponding departments data file in `/data/team_data/departments/___.js`

3. Copy the following JSON

```JSON
      {
        name: "",
        description:
          "",
        image: "",
      },
```

- Name is the name of the person
- description is the description
- image is the first name and lastname of their image in the `/members` folder. If they don't want their image leave it blank. Maggie will be default image.

4. Add the updated JSON into the `team: []` portion of the code

5. You can add this same JSON snippet to many team pages. For example, I just joined magnify, and I want to be apart of the community engagement and events team. I would add this json snippet to both of these pages under `team: []`
