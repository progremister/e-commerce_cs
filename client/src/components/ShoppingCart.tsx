import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";

export function ShoppingCart({ isOpen }: { isOpen: boolean }) {
  const { closeCart, cartItems } = useShoppingCart();

  return (
    <div
      className={`fixed inset-0 overflow-hidden ${isOpen ? "block" : "hidden"}`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75"
          onClick={closeCart}
        ></div>

        <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
          <div className="relative w-screen max-w-md">
            <div className="flex justify-end">
              <div className="flex justify-end">
                <div className="p-4 bg-gray-800 text-white">
                  <button className="text-white" onClick={closeCart}>
                    Close
                  </button>
                  <h5 className="text-white">Cart</h5>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 p-4 bg-white">
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
              {/* <div className="self-end font-bold text-lg">
                Total{" "}
                {currencyFormatter(
                  cartItems.reduce((total, cartItem) => {
                    const item = storeItems.find((i) => i.id === cartItem.id);
                    return total + (item?.price || 0) * cartItem.quantity;
                  }, 0)
                )}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
