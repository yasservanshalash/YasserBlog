import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import mongooseImg from "../assets/mongoose.webp"
import mongooseFileStructure from "../assets/mongoose-filestructure.png"
import Highlight from 'react-highlight'
const Mongoose = () => {
  return (
    <Box>
        <img src={mongooseImg} width="600px" />
        <Typography>
        Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.
        </Typography>
        <Typography>The how to when it comes to backend using mongoose will be explained.</Typography>
        <Typography sx={{fontWeight: "bold"}}>First of all the file structure needs to be clear</Typography>
        <Divider sx={{my: 5}}/>
        <Box sx={{display: "flex", gap: "100px", alignItems: "center"}}>
        <img src={mongooseFileStructure} />
        <Box sx={{display: "flex", flexDirection: "column", gap: "100px"}}>
            <Typography>App.ts is where the server is created it is where the app is instatiated and the routers are added</Typography>
            <Typography>Server.ts is where the server is connected and started</Typography>
            <Typography>Routes is where routers are initialized, where the methods and endpoints are defined</Typography>
            <Typography>Controllers is where functions are written ( with Request and Response)</Typography>
            <Typography>Models is where the schemas are written </Typography>
            <Typography>Services is where methods to interact with the database are (findItem, createItem, deleteItem, updateItem) </Typography>
            <Typography>.env is where secrets or sensitive data is stored </Typography>
        </Box>
        </Box>
        <Divider sx={{my: 5}}/>
        <Typography>First start with the App.ts and Server.ts</Typography>
        <Highlight className='javascript'>
            {`// app.ts
// create server here
import Express from 'express'; // express library
import bodyParser from 'body-parser'; // library to get data from body
import productRouter from './routes/products' // get router from routes folder
const app = Express(); // initiate app
 
app.use(Express.json()); // use json middleware to get data win json

app.use('/products', productRouter) // use the product router
export default app; 
`}
        </Highlight>
        <Typography sx={{my: 5}}>Create .env and add mongo url inside</Typography>
        <Highlight className='javascript'>
            {` // server.ts
// connect database here
import mongoose from "mongoose"; // mongoose library
import dotenv from "dotenv"; // dotenv library to secure secrets

import app from "./app";

dotenv.config();

const port = 8000;

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGODB_URL as string)
  .then(() => {
    app.listen(port, () => {
      console.log("Server listening on port " + port);
    });
  })
  .catch((error: Error) => {
    console.log("MongoDB connection failed", error);
    process.exit(1);
  });
`}
        </Highlight>
        <Divider sx={{my: 5}} />
        <Typography>Add schema in model file. Import mongoose and Document from mongoose, create the schema with types, then export.</Typography>
        <Highlight className='javascript'>
            {`// models/Products.ts
// product model here
import mongoose, { Document } from "mongoose";

const {Schema} = mongoose;

export type ProductDocument = Document & {
    name: string;
    image: string;
    price: number;
    rating: number;
    description: string;
}
const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: ""
    },
    price: {
        type: Number,
        default: 0
    },
    rating: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        default: ""
    },

})

export default mongoose.model<ProductDocument>("Product", ProductSchema)
`}
        </Highlight>
        <Divider sx={{my: 5}} />
        <Typography>Now import the product schema in services and create functions to talk with database</Typography>
        <Highlight className='javascript'>
            {`// product services here - logic to communicate with database

import { ProductDocument } from "../models/Product";
import Product from "../models/Product";

const createProduct = async (product: ProductDocument): Promise<ProductDocument> => {
    return product.save();
}

const getProducts = async (): Promise<ProductDocument[]> => {
    return Product.find();
}

const deleteProduct = async (id: string): Promise<ProductDocument | null> => {
    return Product.findByIdAndDelete(id);
}

const updateProducts = async (id: string, newData: ProductDocument): Promise<ProductDocument | null> => {
    return Product.findByIdAndUpdate(id, newData);
}

export default { createProduct, getProducts, deleteProduct, updateProducts }
`}
        </Highlight>
        <Typography>After services functions are exported import them in controllers and use them in controller functions</Typography>
        <Highlight>
            {`// logic to deal with request and response here
import { Request, Response } from "express";

import ProductServices from "../services/products";
import Product from "../models/Product";

export const createProductController = async (req: Request, res: Response) => {
  try {
    const newProduct = new Product({
      "name": req.body.name,
    });

    const product = await ProductServices.createProduct(newProduct);

    res.json(product);
  } catch (error) {
    console.log(error);
  }
};


export const getProductsController = async (req: Request, res: Response) => {
    try {
        const products = await ProductServices.getProducts();
        res.json(products)
    } catch(error) {
        console.log(error);
    }
}

export const deleteProductController = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const product = await ProductServices.deleteProduct(id);
        res.json(product)
    } catch (error) {
        console.log(error);
    }
}

export const updateProductsController = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const newData = req.body
      const product = await ProductServices.updateProducts(id, newData)
      res.json(product);
    } catch (error) {
        console.log(error);
    }
}

`}
        </Highlight>
        <Typography>
            Finally add the controllers to the router in the routes folder
        </Typography>
        <Highlight className='javascript'>
            {`// routes/product.ts
// product router here
import { Router } from "express";
import { createProductController, deleteProductController, getProductsController, updateProductsController } from "../controllers/products";

const router = Router();

router.get("/", getProductsController)
router.post("/", createProductController)
router.delete("/:id", deleteProductController)
router.put("/:id", updateProductsController)
router.put("/:id", updateProductsController)

export default router
`}
        </Highlight>
        <Typography>
            {`Remember to add router in app.ts if you want to add a new collection. You should be set. Test with postman.`}
        </Typography>
    </Box>


  )
}

export default Mongoose