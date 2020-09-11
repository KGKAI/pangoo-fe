import React from "react";
import ComponentList from "./components/component-list";
import PageEditor from "./components/page-editor";
import FormEditor from "./components/form-editor";

const Container = () => {
  return <div className="editor-container">
    <ComponentList/>
    <PageEditor/>
    <FormEditor/>
  </div>;
};

export default Container;
