import React from 'react'
import Section1 from './assets/Components/Section1/Section1'
import Section2 from './assets/Components/Section2/Section2'

const App = () => {

  const users = [
    {
      num : '1',
      img : 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro : '',
      tag : 'Satisfied',
      color : 'Blue'
    },
    {
      num : '2',
      img : 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro : '',
      tag : 'UnderSreved',
      color : 'Red'
    },
    {
      num : '3',
      img : 'https://plus.unsplash.com/premium_photo-1661559063958-968c8f1928e7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbCUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D',
      intro : '',
      tag : 'Completed',
      color : 'Violet'
    }
  ]

  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App
