import { BagHandle } from "../assets/bagHandle";
import { House } from "../assets/house.tsx";
import { GetOut } from "../assets/getOut";
import { Options } from "../assets/options";
import { SideBarIcon } from "./sideBarIcon.tsx";
import { TransparentLogo } from "../assets/transparentLogo.tsx";

export function LeftSideBar() {
  return (
    <main className="bg-white h-full w-[72px] max-h-[calc(100vh-32px)] p-2 grid grid-cols-1 grid-rows-1  justify-between rounded-lg sticky left-[16px] top-[16px]">
      <div className="flex flex-col items-center gap-8">
        <SideBarIcon link="" icon={<TransparentLogo />} isSelected={false} />
        <SideBarIcon link="" icon={<Options />} isSelected={false} />
        <SideBarIcon link="" icon={<House />} isSelected={true} />
        <SideBarIcon link="" icon={<BagHandle />} isSelected={false} />
      </div>

      <div className="flex justify-center ">
        <SideBarIcon
          link=""
          icon={<GetOut />}
          isSelected={false}
          isRed={true}
        />
      </div>
    </main>
  );
}
