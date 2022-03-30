import React, {useContext, useReducer, createContext} from "react";

const defaultState = {
  count: 0,
};

const CounterContext = createContext<
  | {
      state: State;
      dispatch: Dispatch;
    }
  | undefined
>(undefined);

export type Action = "increment" | "decrement";
export type Dispatch = (val: Action) => void;
export type State = typeof defaultState;

const counterReducer = (state: State, action: Action) => {
  switch (action) {
    case "increment":
      return {count: state.count + 1};
    case "decrement":
      return {count: state.count - 1};
    default:
      return state;
  }
};

export const CounterProvider = ({children}: {children: React.ReactNode}) => {
  const [state, dispatch] = useReducer(counterReducer, defaultState);

  return (
    <CounterContext.Provider value={{state, dispatch}}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  const context = useContext(CounterContext);

  if (!context)
    throw new Error("useCounter must be used within a CounterProvider");

  return context;
};
