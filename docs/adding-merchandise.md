# Adding Merchandise

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

`/public/img/merchandise/`

All images of your merchandise go here. Please use snake casing of the image. Example, if your item is called a gray hoodie, then the image should be `gray_hoodie.extension`. For now you have only a few items. If you get bigger, maybe create seperate image folders like `/merhandise/hoodies`, or `/merchandise/tshirts/` etc.

**Data Files**

`/data/merchandise_data.js`

This file holds the data on your `/public/merchandise.js` file. 

**Code directories**

`pages/merchandise.js`

Displays content from the `/data/merchandise_data.js` file

## Adding To Files

### How to add a new merhandise object

1. Get an image of the item. Name it properly using the proper convention. If you update this image, delete the previous image and update it. Add it into the `public/img/mechandise` folder.

2. Go into the `/data/merchandise_data.js` file and copy the following JSON

```javascript
    {
        name: "",
        price: "",
        image: "",
        link: "",
    },
```

- name is the item name
- price is the price type string
- image is the image name. Please note this is not the path, just add the name
- link is the link if you ever get bigger and have a seperate store (this does nothing for now) can leave it blank

3. Add the updated JSON at the end of the merchandise array