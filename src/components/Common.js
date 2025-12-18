import React from "react";

function Common() {
  return React.createElement(
    "div",
    { className: "navbar" },

    React.createElement("a", { href: "#" }, "login"),
    React.createElement("span", null, " | "),
    React.createElement("a", { href: "#" }, "Home"),
    React.createElement("span", null, " | "),
    React.createElement("a", { href: "#" }, "Search"),
    React.createElement("span", null, " | "),
    React.createElement("a", { href: "#" }, "Restaurant"),
    React.createElement("span", null, " | "),
    React.createElement("a", { href: "#" }, "Cart"),
    React.createElement("span", null, " | "),
    React.createElement("a", { href: "#" }, "Help")
  );
}

export default Common;
