import Button from "./Button"
import { useNavigate } from "react-router-dom"
import errorImg from "./../assets/404.svg"

const Error = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="p-6 text-center font-playfair text-white">
        <h1 className="mb-8 text-5xl font-bold">OOOOOPS!</h1>
        <img src={errorImg} alt="Error illustration" className="mx-auto" />
        <div className="p-4 text-center text-xl">
          <p className="mt-4 font-normal">Something went wrong.</p>
          <p className="font-normal">We will solve your issue soon.</p>
        </div>
      </div>
      <div className="mt-4 flex w-full max-w-md flex-col items-center space-y-4 px-4">
        <Button variant="primary" size="md" fullWidth onClick={() => navigate("/")}>
          Go back
        </Button>
      </div>
    </>
  )
}

export default Error
