import React, {  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Basket = () => {
  const { basket } = useSelector((s) => s);
  const dispatch = useDispatch();

  const deleteBasket = (data) => {
    dispatch({ type: "DEL_BASKET", payload: data });
  };
  const getPlus = (plus) => {
    dispatch({ type: "ADD_TO_BASKET", payload: plus });
  };
  const getMinus = (data) => {
    dispatch({ type: "MINUS", payload: data.id });
  };  
  let all = basket.reduce((acc, el) => {
    return (acc += el.price * el.quantity);
  }, 0);
  let allCount = basket.reduce((acc, el) => {
    return (acc += el.quantity);
  }, 0);
  return (
    <div>
      {
      basket.length ? (
        <div className="container">
          <div className="basket ">
            <div class="relative overflow-x-auto">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Product image
                    </th>
                    <th scope="col" class="px-6 py-3">
                      title
                    </th>
                    <th scope="col" class="px-6 py-3">
                      price
                    </th>
                    <th scope="col" class="px-6 py-3">
                      quantyti
                    </th>
                    <th scope="col" class="px-6 py-3">
                      action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {basket?.map((el) => (
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <img src={el.image} alt="" width={50} />
                      </th>
                      <td class="px-6 py-4">{el.title}</td>

                      <td class="px-6 py-4">{el.price * el.quantity}сом</td>
                      <td class="px-6 py-4 flex gap-2 mt-6">
                        <button
                          onClick={() => getMinus(el)}
                          className="flex  items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-700 h-10 w-10 transition duration-150 ease-in "
                        >
                          -
                        </button>
                        {el.quantity}
                        <button
                          onClick={() => getPlus(el)}
                          className="flex  items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-700 h-10 w-10 transition duration-150 ease-in "
                        >
                          +
                        </button>
                      </td>
                      <td class="px-6 py-4">
                        <button
                          onClick={() => {
                            console.log("id", el.id);
                            deleteBasket(el.id);
                          }}
                          type="button"
                          class="text-red-70  hover:text-white  border border-red-700  hover:bg-red-800  focus:ring-4   focus:outline-none  focus:ring-red-300  font-medium rounded-lg  text-sm px-5 py-2.5  text-center me-2 mb-2  dark:border-red-500  dark:text-red-500  dark:hover:text-white  dark:hover:bg-red-600  dark:focus:ring-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    ></th>
                    <td class="px-6 py-4"></td>

                    <td class="px-6 py-4"> TOTALL PRICE :{all} сом</td>
                    <td class="px-6 py-4 "> ALL QUANTITY : {allCount}</td>
                    <td class="px-6 py-4"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
         <div className="container">
             <div id="alert-additional-content-4" class="p-4 mb-4 text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800" role="alert">
        <div class=" flex items-center">
          <svg class="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
          </svg>
          <span class="sr-only">Info</span>
          <h3 class="text-lg font-medium">
There is nothing in the cart</h3>
        </div>
        <div class="mt-2 mb-4 text-sm">
          More info about this info warning goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
        </div>
        <div class="flex">
        <Link to={"/product"}>
        <button type="button" class="text-white bg-yellow-800 hover:bg-yellow-900 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-yellow-300 dark:text-gray-800 dark:hover:bg-yellow-400 dark:focus:ring-yellow-800">
            <svg class="me-2 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
              <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
            </svg>
            ADD TO PRODUCT
          </button> </Link>
          <button type="button" class="text-yellow-800 bg-transparent border border-yellow-800 hover:bg-yellow-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-yellow-300 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-gray-800 dark:focus:ring-yellow-800" data-dismiss-target="#alert-additional-content-4" aria-label="Close">
            Dismiss
          </button>
        </div>
      </div>
         </div>
      )}
    </div>
  );
};

export default Basket;
