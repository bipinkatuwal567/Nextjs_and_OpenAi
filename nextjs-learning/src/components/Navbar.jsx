import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = [
    { href: "/client", label: "client" },
    { href: "/drinks", label: "drinks" },
    { href: "/prisma-example", label: "prisma-example" },
    { href: "/tasks", label: "tasks" },
  ];
  return (
    <nav className="bg-base-300 p-4">
      <div className="navbar px8 max-w-6xl mx-auto flex-col sm:flex-row">
        <Link className="uppercase font-semibold btn btn-primary" href={"/"}>
          Next.JS
        </Link>

        <ul className="menu menu-horizontal md:ml-8">
          {
            links.map(link => (
              <li key={link.href}>
                <Link href={link.href} className="capitalize">
                  {link.label}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
