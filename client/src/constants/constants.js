export const SIGNIN = {
  header: "Login",
  subHeader: "Get access to your Orders, Wishlist and Recommendayions",
  fields: [
    {
      name: "email",
      type: "email",
      id: "email",
      label: "Email",
    },
    {
      name: "password",
      type: "password",
      id: "password",
      label: "Password",
    },
  ],
};

export const REGISTER = {
  header: "Signup",
  subHeader: "We do not share your personal details with anyone",
  fields: [
    {
      name: "firstName",
      type: "text",
      id: "firstName",
      label: "FirstName",
    },
    {
      name: "lastName",
      type: "text",
      id: "lastName",
      label: "LastName",
    },
    {
      name: "email",
      type: "email",
      id: "email",
      label: "Email",
    },
    {
      name: "password",
      type: "password",
      id: "password",
      label: "Password",
    },
    {
      name: "confirmPassword",
      type: "password",
      id: "confirmPassword",
      label: "Confirm Password",
    },
  ],
};

export const PRODUCT_CATEGORIES = [
  {
    header: "Fruits & Vegetables",
    details: "A variety of fresh fruits and vegetables.",
    link: "fruit-and-veg",
    image: "fruits.png",
    imageAlt: "A Basket of fresh fruits and vegetables",
  },
  {
    header: "Bakery Cakes and Dairy",
    details:
      "The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscuits, muffins, bagels, fresh coffee, milk and more.",
    link: "bakery-cakes-dairy",
    image: "bakery.png",
    imageAlt: "Slices of White bread",
  },
  {
    header: "Beverages",
    details:
      "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more.",
    link: "beverages",
    image: "beverages.png",
    imageAlt: "Jar of Coffee, Packet of Tea and Carton of Juice ",
  },
  {
    header: "Beauty and Hygiene",
    details:
      "Buy beauty and personal care products online in India at best price.",
    link: "beauty-hygiene",
    image: "beauty.png",
    imageAlt: "Small bottles of cosmetics and Skin care",
  },
  {
    header: "Baby Care",
    details: "Shop online for Baby Products, Diapers, Skin Care Products etc.",
    link: "baby-care",
    image: "baby.png",
    imageAlt: "Baby in bathtub",
  },
];
