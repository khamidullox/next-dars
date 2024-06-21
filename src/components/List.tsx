import Link from "next/link";

let request = async (url: string) => {
  let req = await fetch(url);
  let data = await req.json();
  return data;
};
interface Item {
  title: string;
  thumbnail: string;
  description: string;
  id: number;
}
async function List() {
  let { products } = await request("https://dummyjson.com/products");

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ml-10">
      {products.map((item: Item) => {
        return (
          <div
            // href={`/product/${item.id}`}
            className="card w-96 bg-base-100 shadow-xl"
          >
            <figure>
              <img src={item.thumbnail} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p className=" line-clamp-3">{item.description}</p>
              <p className="card-actions justify-end pt-5">
                <Link
                  href={`/product/${item.id}`}
                  className="btn btn-primary w-full"
                >
                  More
                </Link>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default List;
