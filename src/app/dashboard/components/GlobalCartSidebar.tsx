"use client";
import CartSidebar from "./CartSidebar";
import { useCart } from "@/components/header/CartContext";

export default function GlobalCartSidebar() {
  const { cartOpen, closeCart } = useCart();
  return <CartSidebar isOpen={cartOpen} onClose={closeCart} />;
}
