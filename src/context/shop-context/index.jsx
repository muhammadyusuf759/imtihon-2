import { createContext, useReducer } from "react";

const ShopContext = createContext({});
const ShopContextProvider = ({ children }) => {
  const initialState = {
    data: JSON.parse(localStorage.getItem("data")) || [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "add_product":
        if (state.data.find((value) => value.id === action.data.id)) {
          let upDate = state.data.map((value) => {
            if (value.id == action.data.id) {
              return {
                ...value,
                count: value.count + 1,
                userPrice: (value.count + 1) * action.data.price,
              };
            }
            return value;
          });
          localStorage.setItem("data", JSON.stringify(upDate));
          return { data: upDate };
        } else {
          let newData = {
            data: [
              ...state.data,
              {
                ...action.data,
                count: 1,
                userPrice: action.data.price,
              },
            ],
          };
          localStorage.setItem("data", JSON.stringify(newData.data));
          return newData;
        }
      case "increment":
        const updateDateIncrament = state.data.map((value) => {
          if (value.id === action.id) {
            return {
              ...value,
              count: value.count + 1,
              userPrice: (value.count + 1) * value.price,
            };
          }
          return value;
        });

        localStorage.setItem("data", JSON.stringify(updateDateIncrament));
        return { data: updateDateIncrament };
      case "decrement":
        const updateDateDecrement = state.data.map((value) => {
          if (value.id === action.id) {
            return {
              ...value,
              count: value.count - 1,
              userPrice: (value.count - 1) * value.price,
            };
          }
          return value;
        });
        localStorage.setItem("data", JSON.stringify(updateDateDecrement));
        return { data: updateDateDecrement };
      case "delete":
        const deleteProducts = state.data.filter(
          (value) => value.id !== action.id
        );
        localStorage.setItem("data", JSON.stringify(deleteProducts));
        return { data: deleteProducts };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ShopContext.Provider value={{ state, dispatch }}>
      {children}
    </ShopContext.Provider>
  );
};
export { ShopContext, ShopContextProvider };
