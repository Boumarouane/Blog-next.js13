import Link from 'next/link'
import SVGIcon from "./SVGIcon"

export default function Navbar() {
  return (
    <nav className='container mx-auto decoration-white'>
        <ul className=' flex flex-wrap justify-center'>
          <Link href="/about">
            <li className='mr-[200px] my-14 text-slate-300'>ABOUT</li>
          </Link>
          <Link href="/explore">
            <li className='mr-[200px] my-14 text-slate-300'>EXPLORE</li>
          </Link>
          <Link href="/">
            <li className='mr-[200px] my-10 '> 
              <SVGIcon/>
            </li>
          </Link>
          <Link href="/journal">
            <li className='mr-[200px] my-14 text-slate-300'>JOURNAL</li>
          </Link>
          <Link href="/contact">
            <li className='my-14 text-slate-300'>CONTACT</li>
          </Link>
        </ul>
    </nav>
  )
}
