import express, { response } from "express";
const cartRoutes = express.Router();

const app = express();

let cart = [
  { id: 1, product: "apples", price: 3.75, quantity: 6 },
  { id: 2, product: "bananas", price: 1.5, quantity: 8 },
  { id: 3, product: "oranges", price: 2, quantity: 4 },
];
let currentID = 4;

cartRoutes.get("/", (req, res) => {
  res.json(cart);
});

// maxPrice not working
// cartRoutes.get("/:maxPrice", (req, res) => {
//   //   const maxPrice = req.query;
//   let items: any[] = [];
//   for (let i = 0; i < cart.length; i++) {
//     if (cart[i].price <= 3) {
//       items.push(cart[i]);
//     }
//   }
//   res.json(items);
// });

// pageSize not working
// cartRoutes.get("/:pageSize", (req, res) => {
//   let items: any[] = [];
//   for (let i = 0; i <= 4; i++) {
//     items.push(cart[i]);
//   }
//   res.json(items);
// });

cartRoutes.get("/:id", (req, res) => {
  const id = req.params.id;
  for (let item of cart) {
    if (item.product === id) {
      res.json(item);
    } else if (parseInt(id) === item.id) {
      res.json(item);
    }
  }
  res.status(404).send();
});

cartRoutes.post("/", (req, res) => {
  const body = req.body;
  console.log(body);
  const item = body;
  item.id = currentID;
  cart.push(item);
  currentID++;
  res.json(cart);
});

cartRoutes.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  for (let item of cart) {
    if (item.id === id) {
      item.product = req.body.product;
      item.price = req.body.price;
      item.quantity = req.body.quantity;
    }
    res.json(item);
  }
});

cartRoutes.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart.splice(i, 1);
    }
    res.json("");
  }
});

export default cartRoutes;
