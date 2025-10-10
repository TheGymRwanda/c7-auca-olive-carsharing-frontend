import CarIcon from '../assets/CarIcon'
import FuelIcon from '../assets/FuelIcon'
import HorseIcon from '../assets/HorseIcon'
import ProfileIcon from '../assets/ProfileIcon'
import alert from '../assets/Alert.svg'
import plateNumber from '../assets/LicensePlate.svg'
import yellowCar from '../assets/YellowCar.svg'

interface CarDetailsProps {
  carName: string
  owner: string
  model: string
  plate: string
  horsepower: string
  fuelType: string
  restriction: string
  image: string
}

const CarDetails = ({
  carName,
  owner,
  model,
  plate,
  horsepower,
  fuelType,
  restriction,
  image = yellowCar,
}: CarDetailsProps) => (
  <div>
    <img src={image} className="w-[356px] h-[198px]" alt={carName} />
    <div className="pl-6 pt-2 flex flex-col gap-2">
      <h3 className="mt-16 mb-8 text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
        {carName}
      </h3>

      <div className="flex gap-3 items-center">
        <ProfileIcon />
        <span>{owner}</span>
      </div>

      <div className="flex gap-2 items-center">
        <CarIcon />
        <span>{model}</span>
      </div>

      <div className="flex gap-2 items-center">
        <img src={plateNumber} alt="Plate number icon" />
        <span>{plate}</span>
      </div>

      <div className="flex gap-2 items-center">
        <HorseIcon />
        <span>{horsepower}</span>
      </div>

      <div className="flex gap-2 items-center">
        <FuelIcon />
        <span>{fuelType}</span>
      </div>

      <div className="flex gap-2 items-center">
        <img src={alert} alt="Restriction icon" />
        <span className="font-bold">{restriction}</span>
      </div>
    </div>
  </div>
)

export default CarDetails
