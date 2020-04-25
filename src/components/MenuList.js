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
            description
            items {
              name
              description
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
      <div className="menu-cateogry" key={id} id="menu">
        <h1>
          {name}
          {description && (
            <>
              <br />
              <small>{description}</small>
            </>
          )}
        </h1>
        <ul className="menu-items">
          {items.map(({ name, description, price, spicy }) => (
            <li>
              <span className="menu-item-name">
                {name}
                {description && (
                  <>
                    <br />
                    <small>({description})</small>
                  </>
                )}
              </span>
              <span>
                {price > 0 ? `£${price.toFixed(2)}` : "Seasonal Price"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  });
};

export default MenuList;
