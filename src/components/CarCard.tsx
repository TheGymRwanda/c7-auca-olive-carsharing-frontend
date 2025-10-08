import ProfileIcon from '../assets/ProfileIcon'
import CarIcon from '../assets/CarIcon'
import cr from '../assets/Car-Orange.png'
interface carCards {
  carName?: string
  carOwner?: string
  carType?: string
  carImage?: string
}
export default function CarCard({
  carName = 'Mighty Mouse',
  carOwner = 'Manuela',
  carType = 'Moni Cooper',
  carImage = cr,
}: carCards) {
  return (
    <div
      style={{ fontFamily: "'Playfair Display', serif" }}
      className="rounded-2xl bg-[#447991] p-5 m-8 flex flex-col  "
    >
      <div className="grid grid-cols-2">
        <div className="flex flex-col items-center justify-center">
          <img src={carImage} alt="" />
        </div>
        <div className="flex flex-col gap-3 text-white">
          <p className="text-3xl">{carName} </p>
          <div className="flex gap-2">
            <ProfileIcon />
            <p className="text-xl">{carOwner}</p>
          </div>
          <div className="flex gap-2">
            <CarIcon />
            <p className="text-xl">{carType}</p>
          </div>
          <a className="text-[#EBF3AB] cursor-pointer">Show details</a>
        </div>
      </div>
      <button className="bg-white text-[#265E78] rounded-3xl py-3 px-5 mt-4 text-xl bold">
        Book Car
      </button>
    </div>
  )
}
