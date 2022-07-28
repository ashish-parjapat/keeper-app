import React from "react";

const today = new Date();
const currYear = today.getFullYear();
console.log(currYear);

function footer() {
  return <p className="footer">Copyright &copy, {currYear}</p>;
}
export default footer;
