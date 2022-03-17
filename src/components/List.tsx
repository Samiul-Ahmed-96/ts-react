import React from "react";

const List = ({
  items,
  showName,
}: {
  items: string[];
  showName: (text: string) => void;
}) => {
  return (
    <div>
      {items.map((item) => (
        <li onClick={() => showName(item)} key={item}>
          {item}
        </li>
      ))}
    </div>
  );
};

export default List;
