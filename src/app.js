import express from "express";
import mogan from "morgan";

const app = express();
import productRoutes from "./routes/products.routes";

// settings
app.set("port", process.env.PORT || 3000);

// middlewares
app.use(mogan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(productRoutes);

export default app;

//crear un app.js ayuda ha realizar el testing