import Link from 'next/link'

export default function Info() {
  return (
    <section className="flex justify-around items-center p-3 md:p-10 mb-8 flex-wrap">
      <article className="flex-1  w-full md:w-1/2">
        <h2 className="py-2  text-3xl sm:text-5xl lg:text-6xl sm:tracking-tight sm:leading-[1.1]! font-extrabold lg:max-w-lg mx-auto sm:mx-0">
          Customization made
          {' '}
          <b className="text-sky"> easy. </b>
        </h2>
      </article>
      <article className="flex-1 w-full md:w-1/2">
        <p className="text-xl">
          <b className="text-sky">Open UI</b>
          {' '}
          is based on
          {' '}
          <Link
            href="https://cva.style/docs"
            className="underline font-medium"
          >
            class-variance-authority
          </Link>
          , it simplifies component slots customization while avoiding
          Tailwind class conflicts.
        </p>
      </article>
    </section>

  )
}
