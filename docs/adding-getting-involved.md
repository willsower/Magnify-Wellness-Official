# Adding Getting Involved 

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

`/public/img/getting_involved/`

All images of your getting involved go here. Please use snake casing of the image. 

**Data Files**

`/data/getting_involved.js`

This file holds the data on your `/public/getting_involved.js` file. 

**Code directories**

`pages/getting_involved.js`

Displays content from the `/data/getting_involved.js` file

## Adding To Files

### Add new getting involved section

1. Get an image of the item. Name it properly using the proper convention. If you update this image, delete the previous image and update it. Add it into the `public/img/mechandise` folder.

2. Go into the `/data/getting_involved.js` file and copy the following JSON

```javascript
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
```

- name is the title name
- description is a description
- image is the image name. Please note this is not the path, just add the name
- buttons is an array
    - name: name of the button (e.g., Join Slack, View Database)
    - path: Is the button website path

Please note that the buttons is an array and can have multiple buttons

3. Add the updated JSON at the end of the get_involved array

**If you want to add another button**

Copy the following JSON

```javascript
    {
        name: "",
        description: "",
        image: "",
        buttons: [
            // Button 1
            {
                name: "",
                path: "",
            },
            // Button 2
            {
                name: "",
                path: "",
            },
            // Button n...
        ]
    },
```

You can keep adding buttons if there are multiple to that page