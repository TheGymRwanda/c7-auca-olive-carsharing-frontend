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
    <img src={image} className="h-auto w-full max-w-[356px] object-contain" alt={carName} />
    <div className="flex flex-col gap-2 pl-6 pt-2">
      <h3 className="mb-8 mt-16 text-2xl font-playfair">{carName}</h3>

      <div className="flex items-center gap-3">
        <ProfileIcon />
        <span>{owner}</span>
      </div>

      <div className="flex items-center gap-2">
        <CarIcon />
        <span>{model}</span>
      </div>

      <div className="flex items-center gap-2">
        <img src={plateNumber} alt="Plate number icon" />
        <span>{plate}</span>
      </div>

      <div className="flex items-center gap-2">
        <HorseIcon />
        <span>{horsepower}</span>
      </div>

      <div className="flex items-center gap-2">
        <FuelIcon />
        <span>{fuelType}</span>
      </div>

      <div className="flex items-center gap-2">
        <img src={alert} alt="Restriction icon" />
        <span className="font-bold">{restriction}</span>
      </div>
    </div>
  </div>
)

export default CarDetails
