import { Navbar, Hero } from './components'

const App = () => {
  return (
    <>
      <header className="px-10 h-[84px] flex items-center">
        <Navbar />
      </header>
      <main className="flex flex-col gap-[40px]">
        <Hero />
      </main>
    </>
  )
}

export default App