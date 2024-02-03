import Header from "@/components/header/Header"
import MainPage from "@/components/main-page/MainPage"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function Home() {
  return (
    <main className={inter.variable}>
      {/* <h1 className="heading">Welcome to my world!</h1> */}
      <Header />
      <MainPage />
    </main>
  )
}
