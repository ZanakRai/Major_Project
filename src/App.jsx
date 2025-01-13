import About from "./Component/About/About"
import Experience from "./Component/Experience/Experience"
import Home from "./Component/Home/Home"
import Navbar from "./Component/Navbar/Navbar"


function App() {

  return (
    <div className="bg-gradient-to-r from-[#0f1624] to-[#171d32] min-h-screen w-full overflow-hidden">
    <Navbar />
    <Home />
    <About />
    <Experience />
  </div>
  )
}

export default App
