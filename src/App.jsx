import { useState } from 'react'
import { RevenueCard } from './components/RevenueCard'
import { ProfileComponent } from './components/ProfileComponent'
import { BackgroundChanger } from './components/BackgroundChanger'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='grid grid-cols-4'>
      {/* <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={13}/> */}
      {/* <ProfileComponent/> */}
      <BackgroundChanger/>
    </div>
  )
}

export default App
