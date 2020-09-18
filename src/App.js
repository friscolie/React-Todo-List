import React from "react";
import "./styles.css";
import { ThemeProvider } from "emotion-theming";

import TodoList from "./pages/TodoListClass";

const theme = {
  color: {
    primary: {
      black: "#484848",
      red: "#e02444"
    }
  },
  background: {
    color: {
      primary: "#f2eecb"
    }
  }
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <TodoList />
    </ThemeProvider>
  );
}
