import formatCurrency from "../../utils/currency";

interface Props {
  imgURL: string;
  id: number;
  name: string;
  quantity: number;
  unitPrice: number;
}

export default function ModalCard({
  imgURL,
  quantity,
  unitPrice,
  name,
}: Props) {
  console.log(imgURL);

  return (
    <div className="border-b border-b-stone-200 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 h-fit max-h-fit">
          <img
            src={imgURL}
            alt={name}
            className="rounded-sm w-15 h-15 aspect-square object-cover"
          />
          <div className="flex flex-col gap-1 min-w-fit">
            <h4 className="capitalize text-md text-primary-rose-900 font-semibold">
              {name}
            </h4>
            <div className="flex gap-2 items-center">
              <span className="text-primary-red text-lg">{quantity}x</span>
              <p className="text-primary-rose-500 flex items-center gap-1">
                @<span>{formatCurrency(unitPrice)}</span>
              </p>
            </div>
          </div>
        </div>

        <span className="text-primary-rose-900 font-semibold">
          {formatCurrency(unitPrice * quantity)}
        </span>
      </div>
    </div>
  );
}
