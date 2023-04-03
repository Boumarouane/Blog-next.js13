import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'Home',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-gray-500'>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
