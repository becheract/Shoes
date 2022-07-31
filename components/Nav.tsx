import React from 'react'
import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
export default function nav() {
  return (
    <nav className={navStyles.nav}>
        <ul>
            <li>
                <Link href='/'>Home</Link>
            </li>

            <li>
                <Link href='/about'>About</Link>
            </li>

        </ul>
    </nav>
  )
}
