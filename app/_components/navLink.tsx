"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

type NavLinktype = {
  href: string
  children: React.ReactNode
}

export default function NavLink({ href, children }: NavLinktype) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <li>
      <Link
        href={href}
        className={`transition duration-200 hover:text-blue-600 ${
          isActive ? "text-blue-600 font-semibold underline" : "text-gray-700"
        }`}
      >
        {children}
      </Link>
    </li>
  )
}