import ProfileIcon from '../assets/ProfileIcon'
import CarIcon from '../assets/CarIcon'
import { Link } from 'react-router-dom'
import YellowCar from '../assets/YellowCar.svg'
interface CarCardProps {
  carId: number
  carName: string
  carOwner?: string
  carType?: string
  carImage?: string
}

const CarCard = ({
  carId,
  carName = 'Mighty Mouse',
  carOwner = 'Manuela',
  carType = 'Moni Cooper',
  carImage = YellowCar,
}: CarCardProps) => {
  const info = [
    { id: 'owner', icon: <ProfileIcon />, text: carOwner },
    { id: 'type', icon: <CarIcon />, text: carType },
  ]

  return (
    <div className="flex w-full items-center justify-center px-4">
      <div className="mt-6 flex h-[200px] w-[340px] flex-col rounded-2xl bg-primary-light p-5 font-lora shadow-md">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center justify-center">
            <img src={carImage} alt={carName} className="h-[150px] w-[200px] object-contain" />
          </div>

          <div className="flex flex-col gap-3 text-white">
            <p className="mb-2 font-playfair text-[25px]">{carName}</p>

            {info.map(item => (
              <div key={item.id} className="flex items-center gap-2">
                {item.icon}
                <p>{item.text}</p>
              </div>
            ))}

            <Link
              to={`/car-details/${carId}`}
              className="mt-3 font-inter text-[14px] font-semibold text-accent-yellow"
            >
              Show details
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarCard
