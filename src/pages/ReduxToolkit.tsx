import React from "react";
import reduxImg from "../assets/reduxtoolkit.png";
import Highlight from "react-highlight";
import { Box, Typography } from "@mui/material";
import { configureStore } from "@reduxjs/toolkit";

const ReduxToolkit = () => {
  return (
    <Box>
      <img src={reduxImg} style={{ margin: "0px auto", height: "200px" }} />
      <Typography>
        Redux Toolkit is a package that simplifies the setup and configuration
        of a Redux store in a React application. It provides a set of
        conventions and tools that make it easier to manage the state of your
        application. Start by creating a redux folder and adding a slice folder and a store file.
      </Typography>

      <Highlight className="bash">
        {
          `mkdir redux\nmkdir slices\ntouch store.ts`
        }
      </Highlight>
      <Typography>
        Go into the store and configure the store
      </Typography>
      <Highlight className="Javascript">
        {
                    `import { configureStore} from @reduxjs/toolkit
//import reducers here

const store = configureStore({
    reducer: {
        // add reducers here after importing
    }
});
// export types to use later in code and export store to provide for the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;`
        }
     </Highlight>
     <Typography>Go to index.js/main.js and import Provider, store, and add store to provider</Typography>
     <Highlight className="javascript">
        {`import { Provider } from "react-redux";
import store from "./redux/store"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
`
        }
     </Highlight>
     <Typography>
        Taking products as an example, let's add a Product Type in the types folder
     </Typography>
     <Highlight className="javascript">
        {`export type Product = {
    id: number,
    category: string,
    description: string,
    image: string,
    price: number,
    rating: {
        rate: number,
        count: number,
    },
    title: string
    quantity?: number
}`}
     </Highlight>
     <Typography> Add a productsSlice to the slices folder in the redux folder</Typography>
     <Highlight className="bash">
        touch productsSlice.ts
     </Highlight>
     <Typography>
        Add code to slice.
     </Typography>
     <Highlight className="javascript">
        {`import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/types";
type initialStateType = {
    products: Product[],
}
const initialState: initialStateType = {
    products: [],
}
const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        // following action will be used in Thunk to get data from API
        getProductsData: (state, action) => {
            state.products = action.payload
        },
    }
});

export const productActions = productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer;`}
    </Highlight>
    <Typography sx={{mb: 3}}>
        Most important part for the redux skeleton is <code>createSlice, initialState, the reducers, and exporting actions and reducer. </code>
    </Typography>
    <Typography>
        To add thunk and fetch data you can do the following
    </Typography>
    <Highlight className="javascript">
        {`import { Product } from "../../types/types";
import { productActions } from "../slices/productSlice";
import { AppDispatch } from "../store";

const url = "https://fakestoreapi.com/products";

export function fetchProductData() {
    return async (dispatch: AppDispatch) => {
        const response = await fetch(url);
        const productData = await response.json();
        const data = productData.forEach((product: Product) => product.quantity = 1)
        dispatch(productActions.getProductsData(productData));
    }
}`}
    </Highlight>
    <Typography>
        add reducers to the store
    </Typography>
    <Highlight className="javascript">
        {`import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";

const store = configureStore({
    reducer: {
        products: productReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;`}
    </Highlight>
    <Typography>Now we can use the state that's in redux in our app. To access data from the state import <code>useSelector</code> and <code>RootState</code> and use the useSelector to fetch the state</Typography>
    <Highlight className="javascript">
        {`import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
// in the functional component
const products  = useSelector((state: RootState) => state.products.products)
`}
    </Highlight>
    </Box>
  );
};

export default ReduxToolkit;
