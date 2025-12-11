import { removeFromSelected } from "../../signals/signals";
import RemoveItemIcon from "/assets/images/icon-remove-item.svg";
// import { signal } from "@preact/signals-react";

export default function RemoveButton({ id }: { id: number }) {
  return (
    <button
      title="Remove item from cart"
      type="button"
      onClick={() => removeFromSelected(id)}
      className="cursor-pointer w-6 h-6 flex items-center justify-center rounded-full outline outline-primary-gray mr-2"
    >
      <img
        src={RemoveItemIcon}
        className="w-3 h-3"
        alt="Remove item from cart"
      />
    </button>
  );
}
