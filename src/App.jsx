import { useState } from 'react'
import { RevenueCard } from './components/RevenueCard'
import { ProfileComponent } from './components/ProfileComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='grid grid-cols-4'>
      {/* <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={13}/> */}
      <ProfileComponent/>
    </div>
  )
}

export default App
