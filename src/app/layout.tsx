import { Header } from '@/components/header/header'
// import type { Metadata } from 'next'
import { Footer } from '@/components/footer/footer'
import { Inter } from 'next/font/google'
import '../styles/variables.css'
import './global.css'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
// title: '',
// description: '',
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
