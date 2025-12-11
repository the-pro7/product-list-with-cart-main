import IconIncrement from "/assets/images/icon-increment-quantity.svg";
import IconDecrement from "/assets/images/icon-decrement-quantity.svg";
import {
  selectedDesserts,
  updateSelectedQuantity,
} from "../../signals/signals";
import { useSignals } from "@preact/signals-react/runtime";

interface Props {
  id: number;
}

export default function AddedButton({ id }: Props) {
  useSignals();

  const item = selectedDesserts.value.get(id);
  return (
    <div
      className="flex justify-between items-center w-28"
    >
      <span
        className="quantity-button"
        role="button"
        onClick={() => updateSelectedQuantity(id, "decrement")}
      >
        <img src={IconDecrement} alt="Decrement quantity" />
      </span>
      <span className="font-semibold text-xl">{item?.quantity ?? 0}</span>
      <span
        className="quantity-button"
        role="button"
        onClick={() => updateSelectedQuantity(id, "increment")}
      >
        <img src={IconIncrement} alt="Increment quantity" />
      </span>
    </div>
  );
}
