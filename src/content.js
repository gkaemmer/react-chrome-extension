import React from "react";
import ReactDOM from "react-dom";

console.log("Loaded on page");

const customId = "_custom_extension_container";

const div = document.createElement("div");
div.id = customId;
document.body.appendChild(div);

ReactDOM.render(<div>Hello</div>, div);
