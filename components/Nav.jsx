import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/about', label: 'About Us' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
  { href: '/?page=bank/promotions', label: 'Bank Promotions' },
  { href: '/?page=card/promotions', label: 'Card Promotions' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => {

  return (
    <nav>
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>

      <style jsx>{`
        nav {
          background: #c0c0c0;
        }
        ul {
          padding: 0;
          margin: auto;
          max-width: 1024px;
        }
        li {
          padding: 8px 16px;
          margin: 0;
          display: inline-block;
        }
        a {
          color: #067df7;
          text-decoration: none;
          font-size: 13px;
        }
        li:hover {
          background: #e0e0e0;
        }
      `}</style>
    </nav>
  )
}

export default Nav
