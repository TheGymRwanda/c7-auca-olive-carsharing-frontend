import { useNavigate } from "react-router-dom"
import ProfileIcon from "../assets/ProfileIcon"
import MoniShareTitle from "../components/MoniShareTitle"
import PasswordIcon from "../assets/Password.svg"
import Button from "../components/Button"
import MenuBar from "../components/MenuBar"
import axios from "axios"
import { apiUrl } from "../util/apiUrl"
import { useState } from "react"

const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const handleLogin = async () => {
    try {
      const response = await axios.post(`${apiUrl}/auth`, {
        username,
        password,
      })
      const { userId, token } = response.data
      localStorage.setItem("token", token)
      localStorage.setItem("userId", userId)
      navigate("/home")
    } catch (error) {
      console.error("Login failed", error)
    }
  }

  return (
    <div className="min-h-screen">
      <MenuBar isDrawerOpen={false} toggleDrawer={() => {}} isLoggedIn={false} />

      <div className="mt-20 flex flex-col items-center justify-center bg-primary-dark px-4 text-white">
        <MoniShareTitle />
        <h1 className="mb-6 mt-24 text-center font-lora text-xl font-medium">Log in</h1>

        <div className="mb-6 mt-2 flex w-full max-w-md flex-col justify-between gap-4">
          <div className="relative">
            <ProfileIcon className="absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="w-full rounded-full bg-primary-ocean py-4 pl-14 placeholder:text-white focus:outline-none"
              type="text"
              placeholder="Username / e-mail"
            />
          </div>

          <div className="relative">
            <img
              src={PasswordIcon}
              alt="Password icon"
              className="absolute left-4 top-1/2 -translate-y-1/2"
            />
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full rounded-full bg-primary-ocean py-4 pl-14 placeholder:text-white focus:outline-none"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="mt-8 flex w-full max-w-md flex-col items-center">
          <Button variant="primary" fullWidth onClick={handleLogin}>
            Log In
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Login
