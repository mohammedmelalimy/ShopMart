'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavLinkProps = {
  href: string
  children: React.ReactNode
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <li>
      <Link
        href={href}
        className={`
          relative px-2 py-1 rounded-md transition-all duration-200
          hover:text-sky-500 dark:hover:text-sky-400
          ${isActive 
            ? 'text-sky-600 dark:text-sky-300 font-semibold '
            : 'text-gray-800 dark:text-gray-200'
          }
        `}
      >
        {children}
        {/* Optional active underline animation */}
        {isActive && (
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-sky-500 dark:bg-sky-300 rounded-full" />
        )}
      </Link>
    </li>
  )
}