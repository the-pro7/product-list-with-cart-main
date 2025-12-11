import {
  dessertsLength,
} from "../../signals/signals";
import SelectedList from "./SelectedList";

export default function Cart() {
  return (
    <div className="bg-white h-fit p-3 rounded-md mt-7 md:mt-0 lg:col-start-4 lg:sticky lg:top-5">
      <h2 className="text-2xl text-primary-red font-black">
        Your Cart ({dessertsLength})
      </h2>
      <SelectedList />
    </div>
  );
}
