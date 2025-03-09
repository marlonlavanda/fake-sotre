import { Link } from "react-router-dom";
import { useCartStore } from "../../stores/cartStore";
export const Header = () => {
  const { items } = useCartStore();

  return (
    <header className="section section-header bg-gray-900 py-8">
      <div className="container flex justify-between">
        <div>
          <Link to="/">
            <span className="text-xl text-white font-black">FakeStore</span>
          </Link>
        </div>
        <div className="flex gap-4 text-white">
          <ul>
            <li>My Account</li>
          </ul>
          Cart({items.length})
        </div>
      </div>
    </header>
  );
};
