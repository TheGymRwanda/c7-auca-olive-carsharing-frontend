import { FC } from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import errorImg from './../assets/404.svg'

const Error: FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <div
        className="mt-8 p-8 text-center text-white"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        <h1 className="mb-8 text-5xl font-bold">OOOOOPS!</h1>
        <img src={errorImg} alt="Smoking car image" className="mx-auto" />
        <div className="p-4 text-center text-xl">
          <p className="mt-4 font-normal">Something went wrong.</p>
          <p className="font-normal">We will solve your issue soon.</p>
        </div>
      </div>
      <Button onClick={() => navigate('/')} className="mb-20 mt-6 w-[90%] max-w-sm text-[#265e78]">
        Go back
      </Button>
    </>
  )
}

export default Error
