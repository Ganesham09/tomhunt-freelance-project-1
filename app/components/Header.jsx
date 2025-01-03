import Link from "next/link";

export default function Header() {
  const menuList = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About",
      link: "/about-us",
    },
    {
      id: 3,
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <nav className="py-4 px-14 border-b flex items-center justify-between">
      <img className="h-9" src="/logo.png" alt="" />
      <div className="flex gap-4 items-center">
        {menuList?.map((item) => {
          return (
            <Link href={item?.link}>
              <button className="mx-1">{item?.name}</button>
            </Link>
          );
        })}
      </div>
      <Link href="/login">
        <button className="bg-blue-600 px-5 font-bold py-2 rounded-full text-white">
          Login
        </button>
      </Link>
    </nav>
  );
}