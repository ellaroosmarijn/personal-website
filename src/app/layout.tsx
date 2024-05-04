import { Header } from "@/components/header/header"
import { Footer } from "@/components/footer/footer"
import { Inter } from "next/font/google"
import "../styles/variables.css"
import "./global.css"

const inter = Inter({ subsets: ["latin"] })

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
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
