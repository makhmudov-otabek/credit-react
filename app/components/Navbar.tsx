import Image from "next/image";
import Logo from "@/public/logo.png";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-8 py-2">
      <div className="m-auto md:m-0 w-20 h-20 object-fit ">
        <Image alt="Logo" src={Logo} />
      </div>
      <div className="hidden md:block">
        <ul className="flex gap-5 text-xl">
          <li className="cursor-pointer border-b border-transparent px-2 hover:border-b-[#00A8CC]  duration-150">
            <a href="#home">Biz haqimizda</a>
          </li>
          <li className="cursor-pointer border-b border-transparent px-2 hover:border-b-[#00A8CC]  duration-150">
            <a href="#whyus">Nega biz?</a>
          </li>
          <li className="cursor-pointer border-b border-transparent px-2 hover:border-b-[#00A8CC]  duration-150">
            <a href="#howItWorks">Qanday ishlaydi</a>
          </li>
          <li className="cursor-pointer border-b border-transparent px-2 hover:border-b-[#00A8CC]  duration-150">
            <a href="#career">Faoliyatimiz</a>
          </li>
          <li className="cursor-pointer border-b border-transparent px-2 hover:border-b-[#00A8CC]  duration-150">
            <a href="#location">Manzilimiz</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
