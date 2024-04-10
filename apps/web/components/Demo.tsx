import Image from 'next/image'
import demoDashboard from '../public/png/demo-dashboard.png'

export default function Demo() {
  return (
    <figure className="flex justify-center items-center sm:h-[36rem] mb-10">
      <Image src={demoDashboard} alt="Demo dashboard with Open UI." className="rounded-md w-full object-cover" />
    </figure>
  )
}
