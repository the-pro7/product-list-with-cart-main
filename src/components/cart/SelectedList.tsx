import CarbonNeutralIcon from "/assets/images/icon-carbon-neutral.svg";
import { For, Show } from "@preact/signals-react/utils";
import { orderTotal, selectedDessertsArray, show } from "../../signals/signals";
import CartCard from "./CartCard";
import Empty from "./Empty";
import OrderConfirmedDialog from "../modal/OrderConfirmedDialog";
import { useRef } from "react";

export default function SelectedList() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  function showModal() {
    if (dialogRef.current?.open) {
      dialogRef.current.close();
    }

    dialogRef.current?.showModal();
  }

  return (
    <div>
      <For each={selectedDessertsArray} fallback={<Empty />}>
        {(item) => (
          <CartCard
            key={item.name}
            id={item.id}
            name={item.name}
            quantity={item.quantity}
            unitPrice={item.price}
          />
        )}
      </For>
      {/* Temporal */}
      <Show when={show}>
        <summary className="mt-5 flex items-center justify-between">
          <p className="capitalize">order total</p>
          <p className="text-2xl font-bold">{orderTotal}</p>
        </summary>
        <div className="flex flex-col gap-4 mt-5 w-full!">
          <p className="w-full flex items-center justify-center gap-1 rounded-md py-3 bg-primary-rose-100">
            <img src={CarbonNeutralIcon} alt="Carbon neutral illustration" />
            <span className="text-primary-rose-900">
              This is a <b>carbon-neutral</b> delivery
            </span>
          </p>
          <button
            type="button"
            onClick={showModal}
            popoverTarget="confirm"
            className="capitalize rounded-full py-3 w-full bg-primary-red cursor-pointer font-semibold text-white"
          >
            confirm order
          </button>
        </div>
      </Show>
      <OrderConfirmedDialog dialogRef={dialogRef} />
    </div>
  );
}
