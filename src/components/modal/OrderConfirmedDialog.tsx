// import SelectedList from "./cart/SelectedList";
import { type RefObject } from "react";
import Confirmed from "/assets/images/icon-order-confirmed.svg";
import { For } from "@preact/signals-react/utils";
import { clearSelected, orderTotal, selectedDessertsArray } from "../../signals/signals";
import ModalCard from "./ModalCard";

export default function OrderConfirmedDialog({
  dialogRef,
}: {
  dialogRef: RefObject<HTMLDialogElement | null>;
}) {
  return (
    <dialog
      id="confirm"
      ref={dialogRef}
      className=" bg-white min-w-full sm:min-w-sm md:min-w-md  p-4 mt-auto rounded-tl-xl rounded-tr-xl  md:m-auto md:rounded-md"
    >
      <div className="flex gap-2 flex-col">
        <img
          src={Confirmed}
          className="mb-4 w-12 h-12 aspect-square"
          alt="Order confirmed illustration"
        />
        <h1 className="text-4xl w-50 leading-snug md:w-full md:text-3xl font-bold text-primary-rose-900">
          Order Confirmed
        </h1>
        <p className="text-lg text-primary-rose-400">
          We hope you enjoyed your food!
        </p>
      </div>
      {/*  */}
      <div className="flex flex-col  bg-primary-rose-100 p-6 rounded-md mt-5">
        <div className="flex flex-col gap-2 max-h-70 overflow-y-auto scrollbar-hide">
          <For each={selectedDessertsArray}>
            {(item) => (
              <ModalCard
                key={item.name}
                id={item.id}
                name={item.name}
                quantity={item.quantity}
                unitPrice={item.price}
                imgURL={item.image.mobile}
              />
            )}
          </For>
        </div>
        <p className="mt-3 capitalize flex justify-between items-center">
          order total
          <span className="text-primary-rose-900 text-[1.5em] font-bold">
            {orderTotal}
          </span>
        </p>
      </div>
      {/*  */}
      <button
        type="button"
        onClick={() => {
          dialogRef.current?.close()
          clearSelected()
        }}
        className="mt-5 capitalize rounded-full py-3 w-full bg-primary-red cursor-pointer font-semibold text-white"
      >
        Start new order
      </button>
    </dialog>
  );
}
