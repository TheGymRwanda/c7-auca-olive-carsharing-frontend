import ProfileIcon from '../assets/ProfileIcon'
import CarIcon from '../assets/CarIcon'
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
  carImage 
}: carCards) {
  return (
    <div
      className="rounded-2xl bg-[#447991] p-5 m-8 flex flex-col font-lora "
    >
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col items-center justify-center">
          <img src={carImage} alt="" />
        </div>
        <div className="flex flex-col gap-3 text-white">
          <p className="text-[20px]">{carName} </p>
          <div className="flex gap-2">
            <ProfileIcon/>
            <p className="text-[14px]">{carOwner}</p>
          </div>
          <div className="flex gap-2">
            <CarIcon />
            <p className="text-[14px]">{carType}</p>
          </div>
          <a className="text-[#EBF3AB] font-inter text-[14px] font-semibold mt-3">Show details</a>
        </div>
      </div>
    </div>
  )
}
