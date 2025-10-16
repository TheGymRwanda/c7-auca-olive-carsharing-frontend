import type { CarDetailsProps } from "../util/types"
import CarIcon from "../assets/CarIcon"
import FuelIcon from "../assets/FuelIcon"
import HorseIcon from "../assets/HorseIcon"
import ProfileIcon from "../assets/ProfileIcon"
import alert from "../assets/Alert.svg"
import plateNumber from "../assets/LicensePlate.svg"
import yellowCar from "../assets/YellowCar.svg"

const CarDetails = ({
  carName,
  owner,
  model,
  plate,
  horsepower,
  fuelType,
  restriction,
  image = yellowCar,
}: CarDetailsProps) => {
  const details = [
    { id: "owner", icon: <ProfileIcon />, value: owner },
    { id: "model", icon: <CarIcon />, value: model },
    { id: "plate", icon: <img src={plateNumber} alt="Plate number icon" />, value: plate },
    { id: "horsepower", icon: <HorseIcon />, value: horsepower },
    { id: "fuelType", icon: <FuelIcon />, value: fuelType },
    { id: "alert", icon: <img src={alert} alt="Alert icon" />, value: restriction },
  ]

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-md">
      <img
        src={image}
        alt={carName}
        className="h-auto max-h-[40vh] w-full object-contain rounded-md"
      />
      <h3 className="font-playfair text-2xl mt-4 mb-6">{carName}</h3>
      <div className="flex flex-col gap-3 w-full">
        {details.map(({ id, icon, value }) => (
          <div key={id} className="flex items-center gap-2">
            {icon}
            <span className={id === "alert" ? "font-bold" : ""}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CarDetails
