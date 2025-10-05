
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/pricingOptions/PricingOptions'
import ResultChart from './components/ResultChart/ResultChart'
const pricingpremise = fetch('pricingData.json').then(res => res.json())
function App() {


  return (
    <>

      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-dots loading-xl content-center"></span>
        }>
          <PricingOptions pricingpremise={pricingpremise}></PricingOptions>
        </Suspense>
        <ResultChart></ResultChart>
      </main>

    </>
  )
}

export default App
