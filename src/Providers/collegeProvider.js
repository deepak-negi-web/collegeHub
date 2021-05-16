import React, { createContext, useContext, useReducer } from "react";

const CollegeContext = createContext();
const initialState = {
  college: {},
};

const Reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_COLLEGE_INFO": {
      const newState = {
        ...state,
        college: payload,
      };
      return newState;
    }
    default:
      return state;
  }
};

export const CollegeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const addCollegeInfo = (data) => {
    dispatch({
      type: "ADD_COLLEGE_INFO",
      payload: data,
    });
  };
  return (
    <CollegeContext.Provider value={{ state, dispatch, addCollegeInfo }}>
      {children}
    </CollegeContext.Provider>
  );
};

export const useCollege = () => useContext(CollegeContext);
