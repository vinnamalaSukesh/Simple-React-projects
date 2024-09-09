import React, { useState } from 'react';
import './list.css';

const Item = ({ items, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChildren = () => {
    setIsOpen(!isOpen);
  };

  const childIndentation = 50; // Adjust this value as needed

  if (items.children) {
    return (
      <>
        <li style={{ marginLeft: depth * childIndentation }}>
          {items.label}{" "}
          <button onClick={toggleChildren}>{isOpen ? "-" : "+"}</button>
        </li>
        {isOpen && (
          <ul className="children">
            {items.children.map((item, index) => (
              <Item key={index} items={item} depth={depth + 1} />
            ))}
          </ul>
        )}
      </>
    );
  } else {
    return (
      <li style={{ marginLeft: depth * childIndentation }}>{items.label}</li>
    );
  }
};


const List = ({ items }) => {
  return (
    <ul className='parent'>
      {items.map((item, index) => (
        <Item key={index} items={item} />
      ))}
    </ul>
  );
};

export default List;
