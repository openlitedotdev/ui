import Image from 'next/image'

export default function Demo() {
  return (
    <figure className="flex justify-center items-center sm:h-[36rem] mb-10">
      <Image src="/demo-dashboard.png" alt="Demo dashboard with Open UI." className="rounded-md w-full object-cover" width="500" height="500" />
    </figure>
  )
}
