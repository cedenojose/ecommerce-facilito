import React from "react";
import { Link } from "gatsby";
import {IoMdCart} from 'react-icons/io';
import { IconContext } from "react-icons";

const navItems = [
  {
    caption: 'Home',
    href: '/',
  },
  {
      caption: 'Productos',
      href: '/productos',
  },
];

const Nav = (props) => {
  return(
    <header className="bg-blue-900 text-blue-100 shadow-md">
      <nav className="flex">
        <ul className="flex flex-1">
          {
            navItems.map((item, index) => {
              return(
                <li key={index}>
                  <Link 
                    className="px-6 py-4 inline-block hover:bg-blue-700"
                    to={item.href}
                    >{item.caption}</Link>
                </li>
              );
            })
          }
        </ul>
        <Link
          to="/carrito"
          className="px-6 py-4 inline-block hover:bg-blue-800 bg-blue-600"
        >
          {/* IconContex.Provider es para modificar las prop del icono */}
          <IconContext.Provider value={{className: "inline-block mr-4 text-xl"}}>
            <IoMdCart></IoMdCart>
          </IconContext.Provider>
          {props.shopping_cart.length}
        </Link>
      </nav>
    </header>

  );
}

export default Nav;