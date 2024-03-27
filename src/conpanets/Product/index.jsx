import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data } from "../../Data";

const Product = () => {
  const { products } = useSelector((s) => s);
  const dispatch = useDispatch();
  const [main, setMain] = useState(false);
  const getProduct = (main) => {
    dispatch({ type: "GET_PRODUCT", payload: main });
  };
  const addToBasket = (data) => {
    setMain(true);
    console.log(data);
    dispatch({ type: "ADD_TO_BASKET", payload: data });
  };
  useEffect(() => {
    getProduct(data);
  }, []);
  return (
    <div>
      <div className="container">
        <div className="flex items-center gap-20 mt-14 flex-wrap">
          {products?.map((el) =>   (
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-lg" src={el.image} alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {el.title}
                  </h5>
                </a>
                <h3 class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {el.price}$
                </h3>
                {!main ? (
                  <button
                    onClick={() => addToBasket(el)}
                    href="#"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    ADD TO BASKET
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </button>
                ) : (
                  <button
                    type="button"
                    class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    GO TO BACKET
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
