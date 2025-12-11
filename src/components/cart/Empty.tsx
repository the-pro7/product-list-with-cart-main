import EmptyCartIllustration from "/assets/images/illustration-empty-cart.svg";

export default function Empty() {
  return (
    <div className="flex flex-col gap-6 items-center justify-center">
      <img src={EmptyCartIllustration} className="w-45 h-45" alt="Nothing here illustration" />
      <p className="text-primary-rose-500 font-semibold text-sm">Your added items will appear here</p>
    </div>
  );
}
