import ProfileIcon from '../assets/ProfileIcon'
import CarIcon from '../assets/CarIcon'
import { Link } from 'react-router-dom'
interface carCards {
  carName?: string
  carOwner?: string
  carType?: string
  carImage?: string
}
export default function CarCard({
  carName = 'Mighty Mouse',
  carOwner = 'Manuela',
  carType = 'Moni Cooper ',
  carImage,
}: carCards) {
  return (
    <div className="m-8 flex flex-col rounded-2xl bg-[#447991] p-5 font-lora ">
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col items-center justify-center">
          <img src={carImage} alt="" />
        </div>
        <div className="flex flex-col gap-3 text-white">
          <p className="text-[20px]">{carName} </p>
          <div className="flex gap-2">
            <ProfileIcon />
            <p className="text-[14px]">{carOwner}</p>
          </div>
          <div className="flex gap-2">
            <CarIcon />
            <p className="text-[14px]">{carType}</p>
          </div>
          <Link
            to={`/car-details`}
            className="mt-3 font-inter text-[14px] font-semibold text-[#EBF3AB]"
          >
            Show details
          </Link>
        </div>
      </div>
    </div>
  )
}
