# Documentation

Please read the documentation or at least the home page (this page) and getting started. If you want to contribute to the code base, please read how to add data.

## Navigation:
- [Home](index.md)
- [Getting Started](getting-started.md)
- Updating Codebase, Please Read
    - [Adding app reviews](adding-app-reviews.md)
    - [Adding getting involved](adding-getting-involved.md)
    - [Adding partnership](adding-partners.md)
    - [Adding Press](adding-press.md)
    - [Adding Merchandise](adding-merchandise.md)
    - [Adding team members](adding-team-members.md)

## Best Practices

- Keep your repository neat and clean. Make sure people follow the conventions
    - main branch is production
    - dev branch is development
    - You should always have at least two branches `main` and `dev`
    - When you want to create a new feature, make a branch from dev, call it `feature-name`. So for example if I am updating the UI for the nav I'd call the branch `feature-nav`. This is how you do branches in production and in big companies. 
    - Delete branches that are old or are not used
    - Create Pull Requests (PRs) when you merge your features into dev, or move your dev to production
        - Within these PRs, assign a code review. The code review should go to multiple people, maybe for now with a small organization just the tech lead. The tech lead(s) should ensure that you are using proper naming convention. Did you use camel casing when you should have? If you updated an image, did you delete the old one?etc
- Reguarly update the issues board on github
    - Create issues (e.g, Update Nav UI, update footer UI, bug found on app page). Have meaningful descriptions. People can add themselves to the code, and they can see who is working on what
- Keep the code simplified
    - If an image is updated in members, delete the old image, don't keep both. There should NOT be `taichen_rose.png` and `taichen_rose_new.png`. Delete the old one and ONLY keep `taichen_rose.png`
    - Follow the naming conventions of JavaScript and the ones listed in these docs. Example, javascript uses snake case for file names, and they use camel casing for variables. Read about the JavaScript convention. Follow the guidelines
- If you seem to be copying and pasting HTML code use components or create card components
- If you seem to be copying and pating CSS code use globals or create a individual module css for that page