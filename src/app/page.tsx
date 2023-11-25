import Benefits from '@/components/Benefits'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Successpopup from '@/components/Successpopup'
import Team from '@/components/Team'

export default function Home() {
  return (
    <div>
      <Header />
      <Benefits />
      <Team />
      <Contact />
      <p className='px-8 text-sm text-white py-2 text-center bg-[#0A1F3A]'>© 2023 Andromeda Surgical, Inc. All rights reserved. The product is not available for commercial sale anywhere worldwide and does not have regulatory approval in the US or any other country. We are designing this product with the intent to improve surgery. All information in this website represents design goals and should not be construed as claims.</p>
    </div>
  )
}
