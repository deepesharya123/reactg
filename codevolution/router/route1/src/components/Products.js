import React from "react";
import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <div>
      <input type="search" placeholder="Search Products" />
      <div className="nav-bar">
        <div className="nav-text">
          <Link to="featured">Featured </Link>
        </div>
        <div className="nav-text">
          <Link to="new">New </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Products;
