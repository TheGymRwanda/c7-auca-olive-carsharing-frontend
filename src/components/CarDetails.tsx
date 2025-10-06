import CarIcon from '../assets/CarIcon'
import FuelIcon from '../assets/FuelIcon'
import HorseIcon from '../assets/HorseIcon'
import ProfileIcon from '../assets/ProfileIcon'
import danger from '../assets/dangerIcon.png'
import plateNumber from '../assets/plateNumberIcon.png'
import yellowCar from '../assets/yellowCar.png'

export interface CarDetailsProps {
  carName: string
  carImage?: string
  ownerName: string
  model: string
  plateNumber: string
  horsepower: string
  fuelType: string
  isSmokingAllowed?: boolean
}

const CarDetails = ({
  carName,
  carImage = yellowCar,
  ownerName,
  model,
  plateNumber: plate,
  horsepower,
  fuelType,
  isSmokingAllowed = true,
}: CarDetailsProps) => (
  <div>
    <img src={carImage} className="w-[356px] h-[198px]" alt={`${carName} image`} />
    <div className="pl-6 pt-2 flex flex-col gap-2">
      <h3 className="mt-16 mb-8 text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
        {carName}
      </h3>

      <div className="flex gap-3 items-center">
        <ProfileIcon />
        <span>{ownerName}</span>
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

      {!isSmokingAllowed && (
        <div className="flex gap-2 items-center">
          <img src={danger} alt="No smoking icon" />
          <span className="font-bold">No Smoking</span>
        </div>
      )}
    </div>
  </div>
)

export default CarDetails
