import Image from "next/image";
import logo from "@/public/icon.png";
import Link from "next/link";
import { Button } from "../ui/Buttons";

export default function Navbar() {
  return (
    <div className="sticky top-0 backdrop-blur-sm z-50">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#0EA8F5,#692EF8)] blur-md" />
            <Image src={logo} alt="Logo Image" className="size-12 relative" />
          </div>
          <nav className="hidden sm:flex gap-6 items-center">
            <Link href={"/login"}>
              <Button className="px-5 py-3">Access</Button>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
