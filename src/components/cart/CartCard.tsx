import formatCurrency from "../../utils/currency";
import RemoveButton from "../cart-button/RemoveButton";

interface Props {
  id: number;
  name: string;
  quantity: number;
  unitPrice: number;
}


export default function CartCard({ id, name, quantity = 1, unitPrice }: Props) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col p-2">
        <h4 className="capitalize text-md text-primary-rose-900 font-semibold">
          {name}
        </h4>
        <div className="flex gap-3 items-center">
          <span className="text-primary-red mr-1 text-lg">{quantity}x</span>
          <span className="text-primary-rose-500">
            @{formatCurrency(unitPrice)}
          </span>
          <span className="text-primary-rose-900 font-semibold">
            {formatCurrency(unitPrice * quantity)}
          </span>
        </div>
      </div>
      <RemoveButton id={id} />
    </div>
  );
}
