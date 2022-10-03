import React from "react";

function Card({ product }) {
  return (
    <div className="flex flex-col">
      <img
        className="w-full"
        src={`https://soft-radar-test-strapi.herokuapp.com${product.attributes.image.data.attributes.url}`}
        alt=""
      />
      <div className="body">
        <h3 className="font-raleway font-extrabold text-[20px]">
          {product.attributes.title}
        </h3>
        <p className="font-roboto font-bold text-[16px] text-[#5c5c5c]">
          USD {product.attributes.price}.00
        </p>
      </div>
    </div>
  );
}

export default Card;
