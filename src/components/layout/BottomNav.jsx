import {
  House,
  Compass,
  PlusCircle,
  Bell,
  User,
} from "react-feather";

function BottomNav() {
  return (
    <nav className="bottomNav">
      <House />
      <Compass />
      <PlusCircle />
      <Bell />
      <User />
    </nav>
  );
}

export default BottomNav;