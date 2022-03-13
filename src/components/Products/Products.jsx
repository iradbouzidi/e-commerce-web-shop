import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";

const products = [
  {
    id: 1,
    name: "shoes",
    description: "running shoes",
    price: "$150",
    image:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/1b4917151ab348868e4aad7a00921b60_9366/Superstar_Shoes_White_GW0570_01_standard.jpg",
  },
  {
    id: 2,
    name: "PC",
    description: "Dell PC",
    price: "$1500",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-silver-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633027804000",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
