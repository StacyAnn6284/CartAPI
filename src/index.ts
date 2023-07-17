import express from "express";
import cartRoutes from "./routes/cart";

const app = express();

app.use(express.json());

app.use("/cart-items", cartRoutes);

const port = 3000;

app.listen(port, () => console.log(`Listening on port: ${port}.`));
