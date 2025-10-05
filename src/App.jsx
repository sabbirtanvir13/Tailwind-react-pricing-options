
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/pricingOptions/PricingOptions'
import ResultChart from './components/ResultChart/ResultChart'
import axios from 'axios'
import MarksChart from './components/marksChart/MarksChart'
const pricingpremise = fetch('pricingData.json').then(res => res.json());
const marksPremise = axios.get('marksData.json');
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

        <Suspense fallback={<span className="loading loading-dots loading-xl content-center"></span>}>
          <MarksChart marksPremise={marksPremise}></MarksChart>
        </Suspense>
        <ResultChart></ResultChart>
      </main>

    </>
  )
}

export default App
