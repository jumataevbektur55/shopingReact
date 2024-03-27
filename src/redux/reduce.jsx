const initialState = {
  products: [],
  basket: [],
};
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...state, products: action.payload };
    case "ADD_TO_BASKET":
      let findPro = state.basket.find((el) => el.id === action.payload.id);
      if (findPro) {
        return {
          ...state,
          basket: state.basket.map((el) =>
            el.id === action.payload.id
              ? { ...el, quantity: el.quantity + 1 }
              : el
          ),
        };
      } else {
        return {
          ...state,
          basket: [...state.basket, { ...action.payload, quantity: 1 }],
        };
      }
    case "DEL_BASKET":
      return {
        ...state,
        basket: state.basket.filter((el) => el.id !== action.payload),
      };
   
      case "MINUS":
      return {
        ...state,
        basket: state.basket.map((el) =>
          el.id === action.payload
            ? { ...el, quantity: el.quantity > 1 ? el.quantity-1 : 1}
            : el
        ),
      };
    default:
      return state;
  }
};
