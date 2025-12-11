import { useSignals } from "@preact/signals-react/runtime";
import { selectedDesserts } from "../signals/signals";
import formatCurrency from "../utils/currency";
import AddToCartButton from "./cart-button/AddToCartButton";

interface Props {
  id: number;
  imgURL: string;
  category: string;
  name: string;
  price: number;
  quantity?: number;
}

export default function DessertCard({
  id,
  name,
  category,
  price,
  imgURL,
  // quantity,
}: Props) {
  // For non-babel environments
  useSignals();

  const inCart = selectedDesserts.value.has(id);

  return (
    <div className="flex flex-col gap-2 md:max-w-xs  ">
      <div
        className={`grid relative isolate mb-10 rounded-md ${
          inCart && "outline-2 outline-primary-red"
        }`}
      >
        <img
          src={imgURL}
          alt={name}
          className="h-65 w-full aspect-square object-cover rounded-md"
        />
        <AddToCartButton id={id} inCart={inCart}/>
      </div>
      <div className="flex flex-col gap-[.4em]">
        <span className="text-primary-rose-400 text-md">{category}</span>
        <h2 className="text-primary-rose-900 text-xl font-bold">{name}</h2>
        <span className="text-primary-red text-lg font-semibold">
          {formatCurrency(price)}
        </span>
      </div>
    </div>
  );
}
