import {
  IoHome,
  IoSearch,
  IoAddCircle,
  IoNotifications,
  IoPerson,
} from "react-icons/io5";
import { useNavigate } from "react-router-dom";


function BottomNav() {
  const navigate = useNavigate();
  return (
    <nav className="bottomNav">
      <IoHome size={24} />
      <IoSearch size={24} />
      <IoAddCircle
        size={34}
        className="addIcon"
        onClick={() => navigate("/create")}
      />
      <IoNotifications size={24} />
      <IoPerson size={24} />
    </nav>
  );
}

export default BottomNav;