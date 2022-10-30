import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { fetchData } from "../Requests/Products";

function Main() {
  const [poloShirts, setPoloShirts] = useState();
  const [trousers, setTrousers] = useState();
  const [shorts, setShorts] = useState();

  const isHasTrousersAndShorts = trousers && shorts;

  const handleProductFetch = async () => {
    const [poloShirtsResponse, trouserResponse, shortsResponse] =
      await fetchData();
    setPoloShirts(poloShirtsResponse);
    setTrousers(trouserResponse);
    setShorts(shortsResponse);
  };

  useEffect(() => {
    handleProductFetch();
  }, []);

  return (
    <div className="bg-[#f5f5f5] ">
      <div className="container px-[64px] pt-[62px] mb-[72px]">
        <h1 className="text-[#323232] text-[36px] mb-[17px] text-raleway text-extrabold">
          Polo shirts
        </h1>
        {poloShirts && (
          <div className="grid grid-cols-3 gap-[18px] mb-[70px]">
            {poloShirts &&
              poloShirts.data.map((product, index) => (
                <Card key={index} product={product} />
              ))}
          </div>
        )}
        <h1 className="text-[#323232] text-[36px] mb-[17px] text-raleway text-extrabold">
          Trousers & Shorts
        </h1>
        {isHasTrousersAndShorts && (
          <div className="grid grid-cols-3 gap-[18px]">
            {[...trousers.data, ...shorts.data].map((product, index) => (
              <Card key={index} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;
