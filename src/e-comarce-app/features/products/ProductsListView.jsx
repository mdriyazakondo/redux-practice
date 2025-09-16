import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productsSlice";

const ProductsListView = () => {
  const { products, isLoading, error } = useSelector(
    (state) => state.productsR
  );

  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="max-w-7xl mx-auto  my-8">
      {isLoading && <p>Loading.............</p>}
      {error && <p>{error.message}</p>}
      {!isLoading && !error && products.length > 0 && products && (
        <section className="grid grid-cols-3 gap-4">
          {products.map((product) => {
            return (
              <article
                key={product.id}
                className="border  p-4 rounded-md shadow"
              >
                <h3 className="text-2xl font-semibold text-gray-700">
                  {product.title}
                </h3>
                <p className="text-gray-600 py-2">{product.description}</p>
                <p className="text-xl font-medium ">Price: ${product.price}</p>
                <button className="py-1.5 w-full bg-green-600 rounded-md text-white font-medium cursor-pointer mt-3 hover:bg-green-700 ">
                  Add To Card
                </button>
              </article>
            );
          })}
        </section>
      )}
    </div>
  );
};

export default ProductsListView;
