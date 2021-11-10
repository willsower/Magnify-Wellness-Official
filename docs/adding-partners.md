# Partnerships

## Navigation:
- [Home](README.md)
- [Getting Started](getting-started.md)
- Updating Codebase, Please Read
    - [Adding app reviews](adding-app-reviews.md)
    - [Adding getting involved](adding-getting-involved.md)
    - [Adding partnership](adding-partners.md)
    - [Adding Press](adding-press.md)
    - [Adding Merchandise](adding-merchandise.md)
    - [Adding team members](adding-team-member.md)

## Files (An Overview)

**Image Files**

`/public/img/partners/`

All images of your partners go here. Please use snake casing of the image. Example, if your partner is called `XYZ_Abc` then the image should be `xyz_abc.extension`

**Data Files**

`/data/partners_data.js`

This file holds the data on your `/public/partnerships.js` file. 

**Code directories**

`pages/partnerships.js`

Displays content from the `/data/partners_data.js` file

## Adding To Files

### How to add a new partner to the page

Congrats! You got a new partnership. The company is called `XYZ_Abc`

1. Get an image of their logo. Name the logo the correct format `xyz_abc.extension`. Add this image into the correct image folder. If you update this image, delete the previous image and update it

2. Go into the `/data/partners_data.js` file and copy the following JSON

```javascript
    {
        name: "",
        image: "",
        link: "",
    },
```

- name is the Company name
- image is the image name (e.g.,`xyz_abc.extension`). Please note this is not the path, just add the name
- link is the website link to THEIR website

3. Add the updated JSON at the end of the partners array