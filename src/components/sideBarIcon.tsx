import { Link } from "react-router-dom";

interface SideBarIconProps {
  link: string;
  icon: JSX.Element;
  isSelected: boolean;
  isRed?: boolean;
}

export function SideBarIcon({
  link,
  icon,
  isSelected,
  isRed = false,
}: SideBarIconProps) {
  const style = isRed
    ? "var(--color-danger)"
    : isSelected
    ? "var(--color-dark)"
    : "white";

  return (
    <Link to={link}>
      <div
        className=" w-fit h-fit p-1 rounded-lg"
        style={{ backgroundColor: style }}
      >
        {icon}
      </div>
    </Link>
  );
}
