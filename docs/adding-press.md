# Adding Press Articles

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

**Data Files**

`/data/press_data.js`

This file holds the data on your `/public/press.js` file. 

**Code directories**

`pages/press.js`

Displays content from the `/data/press_data.js` file

## Adding To Files

### How to add a new press article section

Something to keep in mind, there are two different sections within press. There is `Features` and `Workshops`

Now you have created a new section. Maybe you call it, `Newspaper` or `Videos` or `Podcasts`. Well now you need to make a new section.

1. Copy the following JSON code

```javascript
{
    title: "",
    docs: [ ]
}
```

- title is where you put the title of the new Section. So if you call the section `Newspaper` that's what you would insert
- docs Now this is an array of all the articles that go within. To read more about how to add a doc, read the next section

### How to add a new press article

You have a new press article that could go under `Features` or go under `Workshops` or any other section you have.

1. Copy the following JSON code

```javascript
    {
        pressName: "",
        articleName: "",
        date: "",
        buttonPath: "",
    },
```

- pressName is the name of the publisher. For example "New York Times" or something
- articleName is the name of the article "Magnify Wellness helps again" or something
- data is the date it was published 
- buttonPath is the link path to the article website

2. Insert this updated JSON code into the proper `docs [ ]` section