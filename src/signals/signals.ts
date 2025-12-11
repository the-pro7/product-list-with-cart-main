import { batch, computed, signal } from "@preact/signals-react";
import { actualData } from "../db/data";
import formatCurrency from "../utils/currency";

// const DESSERTS_STORAGE_KEY = "desserts"

// Signals
export const desserts = signal(actualData);

export const selectedDesserts = signal(new Map());

export const isSelected = signal(false);

export const show = signal(false);

export const selectedDessertsArray = computed(() =>
  Array.from(selectedDesserts.value.values())
);

export const addItemToSelected = (id: number) => {
  console.log("Clicked", id);
  // batch to handle multiple .value updates

  batch(() => {
    const dessert = desserts.value.find((item) => item.id === id);
    if (!dessert || selectedDesserts.value.has(id)) return;
    //    Create shallow copy of selectedDesserts map and add new item
    const newSelected = new Map(selectedDesserts.value);
    newSelected.set(id, dessert);
    selectedDesserts.value = newSelected;
    show.value = true;
  });
};

export const removeFromSelected = (id: number) => {
  console.log(`Attempting to remove ${id}`, typeof id);

  batch(() => {
    const updateSelected = new Map(selectedDesserts.value);
    updateSelected.delete(id);
    selectedDesserts.value = updateSelected;

    if (
      selectedDesserts.value.size === 0 ||
      selectedDessertsArray.value.length === 0
    ) {
      show.value = false;
    }
  });
};

export const updateSelectedQuantity = (
  id: number,
  action: "increment" | "decrement"
) => {
  console.log(`Updating quantity for ${id} with action ${action}`);
  const current = selectedDesserts.value.get(id);
  if (!current) return; // item not in cart, nothing to update

  const next = new Map(selectedDesserts.value);

  let newQuantity: number = current.quantity;

  if (action === "increment") {
    newQuantity = current.quantity + 1;
  } else {
    newQuantity = Math.max(1, current.quantity - 1); // prevent negative
  }

  next.set(id, { ...current, quantity: newQuantity });
  selectedDesserts.value = next; // trigger reactivity
};

export const clearSelected = () => {
  const next = new Map();
  batch(() => {
    selectedDesserts.value = next;
    show.value = false;
  });
};

// Computed

// Computed value for length of selected desserts
export const dessertsLength = computed(() => selectedDesserts.value.size);

// Compute total from selected items
export const orderTotal = computed(() =>
  formatCurrency(
    selectedDessertsArray.value.reduce((sum, item) => {
      // console.log(sum, item)
      return sum + item.price * item.quantity;
    }, 0)
  )
);
