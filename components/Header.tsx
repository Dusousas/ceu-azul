import Navbar from "./subc/Navbar";

export default function Header() {
  return (
    <>
      <header className="z-30 absolute w-full">
        <div className="flex justify-between py-2 w-full border-b border-white items-center backdrop-blur-[6px] px-4 lg:px-20">
          <a href="/"><img className="w-[80px]" src="/logo.png" alt="" /></a>

          <Navbar />
        </div>
      </header>
    </>
  );
}
