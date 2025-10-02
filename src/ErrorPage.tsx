import { FC } from 'react'

const ErrorPage: FC = () => (
  <div className="p-8 text-center text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
    <h1 className="mb-8 text-5xl font-bold">OOOOOPS!</h1>
    <img src="/src/assets/Union.png" alt="Smoking car image" className="mx-auto" />
    <div className="p-4 text-center text-xl">
      <p className="mt-4 font-normal">Something went wrong.</p>
      <p className="font-normal">We will solve your issue soon.</p>
    </div>

    <button className="mt-8 w-full rounded-2xl bg-white px-4 py-2 text-[#265e78]">Go back</button>
  </div>
)

export default ErrorPage
