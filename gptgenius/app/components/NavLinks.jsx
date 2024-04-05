import React from 'react'
import Link from "next/link"

const links = [
    {href: "/chat", label: "chat"},
    {href: "/tours", label: "tours"},
    {href: "/tours/new-tour", label: "new tour"},
    {href: "/profile", label: "profile"},
]

const NavLinks = () => {
  return (
    <ul className="menu text-base-content">
        {links.map(link => (
            <li key={link.href} className='capitalize'>
                <Link href={link.href}>
                    {link.label}
                </Link>
            </li>
        ))}
    </ul>
  )
}

export default NavLinks