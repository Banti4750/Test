import Hero from "./Hero"
import Navbar from "./Navbar"
import Skils from "./Skils"

function App() {

  return (
    <>
      <div className="bg-black h-screen w-full text-white ">
        <Navbar />
        <Hero />
        <Skils />
      </div>
    </>
  )
}

export default App
