import { addItemToSelected } from "../../signals/signals";
import AddedButton from "./AddedButton";
import CartIcon from "/assets/images/icon-add-to-cart.svg";

export default function AddToCartButton({
  id,
  inCart,
}: {
  id: number;
  inCart: boolean;
}) {
  // UI
  return (
    <button
      onClick={() => addItemToSelected(id)}
      // disabled={inCart}
      type="button"
      className={`${
        inCart
          ? "bg-primary-red text-white"
          : "bg-white cursor-pointer outline outline-primary-red flex items-center justify-center"
      } capitalize isolate gap-2 absolute col-span-full  -bottom-7 justify-self-center px-7 py-3 rounded-full font-sans font-semibold`}
    >
      {inCart ? (
        <AddedButton id={id} />
      ) : (
        <>
          <img
            src={CartIcon}
            className="w-[--cart-dimensions] h-[--cart-dimensions] [--cart_dimensions=6]"
          />
          {inCart ? "Added" : "Add to cart"}
        </>
      )}
    </button>
  );
}
