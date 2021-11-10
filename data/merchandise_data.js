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
      
  - name refers to the name of the partner company
  - image refers to the name of the image (not the path)
  - link refers to the partner's website page

  TO ADD ANOTHER PARTNER, COPY THE FOLLOWING
      {
          name: "",
          image: "",
          link: "",
      }
    ADD THE ABOVE JSON ITEM WITHIN THE docs[] IN THE CORRESPONDING SECTION

  ADD THE IMAGE TO /public/img/partners folder
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
