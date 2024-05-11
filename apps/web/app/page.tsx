import Commons from '@/components/commons'
import ExploreDocs from '@/components/explore-docs'
import FAQ from '@/components/faq'
import Home from '@/components/home'

export default function Page() {
  return (
    <>
      <main className="max-w-screen-2xl mx-auto flex flex-col items-center justify-center">
        <Home />
        <Commons />
        <ExploreDocs />
        <FAQ />
      </main>
    </>
  )
}
