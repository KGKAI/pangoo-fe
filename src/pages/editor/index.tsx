import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Header from "./components/header";
import Container from "./Container";
import "./index.scss";

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <Container/>
    </DndProvider>
  );
};

export default App;
