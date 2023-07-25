import { renderHook, act } from "@testing-library/react-hooks";
import { useCartCount } from "./useCartCount";

let callBack = () => {};

jest.mock("cart/cart", () => ({
  cart: {
    cartItems: [],
    subscribe: (cb) => {
      callBack = cb;
    },
  },
}));

describe("useCartCount", () => {
  it("should return cart count", () => {
    const { result } = renderHook(() => useCartCount());
    expect(result.current).toBe(0);
  });
  it("should return cart count", () => {
    const { result } = renderHook(() => useCartCount());
    act(() => {
      callBack({ cartItems: [{ id: 1 }] });
    });
    expect(result.current).toBe(1);
  });
});
