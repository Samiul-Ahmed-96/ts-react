import React from "react";
import List from "./List";

const Lists = () => {
  const items: string[] = ["Hello", "World", "Samiul", "Ahmed"];
  const showName = (text: string) => alert(text);
  return (
    <div>
      <List items={items} showName={showName}></List>
    </div>
  );
};

export default Lists;
