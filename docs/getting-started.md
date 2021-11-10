# Getting Started

[Go back to Home](index.md)

## Code Repo Setup

**Dependencies**

- Have Node installed

1. Clone the repo and `cd` into root
2. `npm install` to install dependencies associated
3. `npm run dev` to start development server

For production cases you `npm run build` and then `npm run start`

**What's being used?**

This code repo is using `Next.JS` a Front-end framework built from React and TailwindCSS.

1. Read about NextJS [here](https://nextjs.org/). Framework is very similiar to React. 
    - Try this [small tutorial](https://nextjs.org/learn/basics/create-nextjs-app) which will make you build a simple NextJS blog. It will teach you all the basics. It should take your 30min-60min to complete
2. Read about tailwindcss and see how it's being used [here](https://tailwindcss.com/). Similiar to bootstrap

## Project directory

```
.next/
components/
data/
docs/
node_modules/
pages/
public/
styles/
.gitignore
package-lock.json
package.json
postcss.config.js
README.md
tailwind.config.js
```

Briefly just to go through each

**.next/**

This is the code containing the built content. When you create a server you run `npm run build` for production code. All the code built will go here. You never need to touch this directory but your server will look into it. Do NOT push this to github

**components/**

Here is where you add all the individual components for your main files. You make components on things that will be used multiple times. For example the Nav or the Footer. Study the components folder and see what different components there are and what they are used for.

**data/**

This directory contains all the JSON data. You add static data here which your actual files will loop through and display. For example, you add all the team data in JSON format. Instead of copying the same `<div></div>` components to display, it'll do it automatically in an array. This also allows people who don't know how to code to add in their own information. JSON is not coding, this is just a markup language which is pretty understandable. Look into JSON or get generally familiar with it, should only take you about 30 minutes to become an expert.

**docs/**

This is where you add all your documentation files. Keep this up to date! It's important and professional to keep it up to date.

**node_modules/**

These are all the external modules your project depends on. These are updated as you do `npm install package_name`. Do NOT push this to github.

**pages/**

These are where all your pages come from. `index.js` is the home page. This is equivalent to `index.html` page. When you see files such as `[id].js` or `[slug].js` these are dynamic pages. Read up about them in Next.js. They basically allow you to dynamically load content.

**public/**

Here is where you add image, icons, videos, etc files

**styles/**

Add in your CSS. You have globals.css which is allowed to be accessed anywhere then module.css this will be for specific files. You have to import those. Read up about global.css and module.css in NextJS.