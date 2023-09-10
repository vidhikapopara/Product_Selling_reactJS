import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "./Wrapper";

function ProductCreate() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3004/products", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ title, image }),
    }).then(() => navigate("/admin/products"));
  };

  return (
    <Wrapper>
      <form onSubmit={submit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Image</label>
        <input
          type="text"
          name="image"
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">Add Product</button>
      </form>
    </Wrapper>
  );
}

export default ProductCreate;
