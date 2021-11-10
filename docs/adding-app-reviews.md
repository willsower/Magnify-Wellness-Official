# Adding App Reviews

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

`/data/app_reviews_data.js`

This file holds the data on your `/public/app.js` file. 

**Code directories**

`pages/app.js`

Displays content from the `/data/app_reviews_data.js` file

## Adding To Files

### How to add a new Review

1. Go into the `/data/app_review_data.js` file and copy the following JSON

```javascript
    {
        name: "",
        reviewName: "",
        description: "",
        stars: #,
    },
```

- name is the reviewer name
- reviewName is the title of the review
- description is the description provided
- stars is where you put a number 1-5 If you put in 5. Then the stars will be 5/5. If you put in 3, then stars will be 3/5

3. Add the updated JSON at the end of the reviews array