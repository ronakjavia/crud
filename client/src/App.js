import Form from './components/Form'
import UsersList from './components/UsersList'

import axios from 'axios'
import { Toaster } from 'react-hot-toast'

import './App.css'
import { useState, useEffect } from 'react'

const BASE_URL = ''
function App() {
  const [userData, setUserData] = useState(null)

  const fetchUsersData = async () => {
    const resp = await axios.get(`${BASE_URL}/getUsers`)

    setUserData(resp.data.users)
  }
  useEffect(() => {
    fetchUsersData()
  }, [])
  return (
    <div className="App">
      <Form fetchUsersData={fetchUsersData} BASE_URL={BASE_URL} />
      <UsersList
        userData={userData}
        setUserData={setUserData}
        fetchUsersData={fetchUsersData}
        BASE_URL={BASE_URL}
      />
    </div>
  )
}

export default App
