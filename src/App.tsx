import DessertCard from "./components/DessertCard";
import Cart from "./components/cart/Cart";
import { desserts } from "./signals/signals";

export default function App() {
  return (
    <main className="bg-primary-rose-100 min-h-fit">
      <div className="p-7 mx-auto">
        <h1 className="text-4xl font-bold mb-7">Desserts</h1>
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="mt-5 md:mt-0 grid gap-5 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] col-start-1 col-span-3">
            {desserts.value.map((item) => (
              <DessertCard
                key={item.name}
                id={item.id}
                name={item.name}
                category={item.category}
                price={item.price}
                quantity={item.quantity}
                imgURL={item.image.mobile}
              />
            ))}
          </div>
          <Cart />
        </div>
      </div>
    </main>
  );
}
