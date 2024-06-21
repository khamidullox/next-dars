import React from "react";

interface Params {
  params: {
    id: number;
  };
}
interface Item {
  title: string;
  thumbnail: string;
  description: string;
  id: number;
  price: number;
  rating: number;
  category: string;
}
let request = async (url: string) => {
  let req = await fetch(url);
  let data = await req.json();
  return data;
};

let formatPrice = (price: number) => {
  let priceFormat = new Intl.NumberFormat("us-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
  return priceFormat;
};

async function SingleProduct(params: Params) {
  let data: Item = await request(
    `https://dummyjson.com/products/${params.params.id}`
  );
  return (
    <div className=" place-items-center h-full mt-10">
      <div className="card lg:card-side  shadow-xl mx-auto p-5 bg-base-300 w-full gap-10 items-center justify-center ">
        <figure>
          <img src={data.thumbnail} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data.title}</h2>
          <h4 className=" uppercase font-bold opacity-45">{data.category}</h4>
          <p className="">{data.description}</p>
          <div className="text-xl font-bold flex items-center justify-start gap-5">
            <span className=" badge badge-outline text-base p-3">
              {formatPrice(data.price)}
            </span>{" "}
            <span className=" badge badge-outline text-base p-3 flex ">
              {data.rating}⭐
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
