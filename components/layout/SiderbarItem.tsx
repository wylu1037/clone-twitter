import { IconType } from "react-icons";

interface SiderbarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
}

const SiderbarItem: React.FC<SiderbarItemProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
}) => {
  return (
    <div className="flex flex-row items-center">
      <div className="relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full p-4 hover:bg-slate-300 hover:bg-opacity-10 lg:hidden">
        <Icon size={28} color="white" />
      </div>
    </div>
  );
};

export default SiderbarItem;
