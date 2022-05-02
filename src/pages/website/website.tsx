import React from "react";
import { Link } from "react-router-dom";
import "./website.css";

export default function WebsiteDemo() {
  return (
    <>
      <div className="demo-body">
        <nav className="demo-nav">
          <ul className="demo-ul">
            <li className="demo-li">Link</li>
            <li className="demo-li">Second Link</li>
            <li className="demo-li">Third Link</li>
          </ul>
        </nav>

        <div className="demo-content">
          Content
          <div className="demo-hero">Hero element</div>
          <Link to="/w">Back to Website</Link>
        </div>
        <footer></footer>
      </div>
    </>
  );
}
