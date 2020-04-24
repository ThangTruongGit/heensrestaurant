import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const MenuList = () => {
  const menuData = useStaticQuery(graphql`
    query {
      menu: allMenuYaml {
        edges {
          node {
            id
            name
            items {
              name
              description
              note
              price
              spicy
            }
          }
        }
      }
    }
  `);
  return menuData.menu.edges.map(({ node }) => {
    const { id, name, description, items } = node;

    return (
      <div className="menu-cateogry" key={id}>
        <h1>
          {name}
          {description && <small>{description}</small>}
        </h1>
        <ul>
          {items.map(({ name, description, note, price, spicy }) => (
            <li>{`${name} ${price}`}</li>
          ))}
        </ul>
      </div>
    );
  });
};

export default MenuList;
