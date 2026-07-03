import { IoSearchOutline } from "react-icons/io5";

function Header() {
  return (
    <header className="header">
      <div>
        <h2>Ascora</h2>
      </div>

      <button className="searchButton">
        <IoSearchOutline size={22} />
      </button>
    </header>
  );
}

export default Header;