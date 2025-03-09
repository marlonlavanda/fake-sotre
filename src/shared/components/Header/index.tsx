import { useCartStore } from "../../stores/cartStore";
export const Header = () => {
  const { items } = useCartStore();

  return (
    <header>
      <div>
        <div>Fake Sotore</div>
        <ul>
          <li>My Account</li>
        </ul>
        Cart({items.length})
      </div>
    </header>
  );
};
