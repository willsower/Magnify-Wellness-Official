/*
Populates merchandise.js page

  Current Structure
      merchandise = [
        {
          name: "",
          price: "",
          image: "",
          link: "",
        },
      ]
      
  - name refers to the name of the item
  - price refers to the price (string)
  - image refers to the name of the image (not the path)
  - link is blank for now unless this is something you guys want to add later

  TO ADD ANOTHER ITEM, COPY THE FOLLOWING
      {
          name: "",
          price: "",
          image: "",
          link: "",
      }
    ADD THE ABOVE JSON ITEM WITHIN THE CORRESPONDING SECTION

  ADD THE IMAGE TO /public/img/merchandise folder
*/

export const merchandise = [
  {
    name: "Hoodie",
    price: "$30",
    image: "black_hoodie.png",
    link: "",
  },
  {
    name: "Stickers",
    price: "1 for $2, 2 for $3",
    image: "stickers.jpg",
    link: "",
  },
];
