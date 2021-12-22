import React from "react";

import { useParams, Link } from "react-router-dom";

const Product = () => {
  const data = [{ name: "orange" }, { name: "lemon" }, { name: "mango" }];
  const listItems = data.map((d) => (
    <Link to={`/product/${d.name}`} key={d.name}>
      {d.name}
    </Link>
  ));
  return (
    <div>
      <h1>Product page!</h1>
      <ol>{listItems}</ol>
    </div>
  );
};

export default Product;
