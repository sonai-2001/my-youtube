import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './utils/store'

 


const App = () => {
  return (
    <Provider store={store}>
     <div>
     <Header/>
     {/* sidebar and maincontainer holder */}
     <div className='flex'>
      <Sidebar/>
      <Outlet/>
     </div>
    </div>
    </Provider>
  )
}

export default App