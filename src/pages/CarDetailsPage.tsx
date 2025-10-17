import { useEffect } from "react"
import { useParams } from "react-router-dom"
import MainLayout from "../components/MainLayout"
import BackButton from "../components/BackButton"
import { useCars, useCarTypes, useUsers } from "../hooks"
import alert from "../assets/Alert.svg"
import plateNumber from "../assets/LicensePlate.svg"
import yellowCar from "../assets/YellowCar.svg"
import ProfileIcon from "../assets/ProfileIcon"
import CarIcon from "../assets/CarIcon"
import HorseIcon from "../assets/HorseIcon"
import FuelIcon from "../assets/FuelIcon"

const CarDetailsPage = () => {
  const { id } = useParams()
  const [{ data: cars, loading: loadingCars }] = useCars()
  const [{ data: users }] = useUsers()
  const [{ data: carTypes }] = useCarTypes()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  const car = cars?.find(c => c.id === Number(id))
  const owner = users?.find(u => u.id === car?.ownerId)
  const carType = carTypes?.find(t => t.id === car?.carTypeId)
  const carImage = carType?.imageUrl ?? yellowCar

  if (loadingCars) {
    return (
      <MainLayout>
        <div className="flex flex-1 items-center justify-center h-full"> Loading...</div>
      </MainLayout>
    )
  }
  if (!car) {
    return (
      <MainLayout>
        <div className="flex flex-col items-center justify-center h-full text-center">
          <p className="text-2xl text-red-500 mb-4">Car not found!</p>
          <BackButton />
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <div className="mt-6 flex flex-col text-white overflow-hidden">
        <div className="flex w-full items-center justify-between px-6 md:px-20 mb-6 ">
          <BackButton />
          <h1 className="text-3xl font-lora tracking-wider text-center flex-1">DETAILS</h1>
          <div className="w-10" />
        </div>

        <img src={carImage} alt={car.name} className="h-[20%] w-[70%] object-contain mx-auto" />

        <div className="text-left px-10">
          <h2 className="text-xl font-semibold mb-3">{car.name}</h2>

          <div className="space-y-2">
            <p className="flex items-center">
              <ProfileIcon />
              <span className="ml-2">{owner?.name ?? `Owner ID: ${car.ownerId}`}</span>
            </p>
            <p className="flex items-center">
              <CarIcon />
              <span className="ml-2">{carType?.name ?? "Unknown Type"}</span>
            </p>
            <p className="flex items-center">
              <img src={plateNumber} alt="license plate" />
              <span className="ml-2">{car.licensePlate ?? "No license plate"}</span>
            </p>
            <p className="flex items-center">
              <HorseIcon />
              <span className="ml-2">{car.horsepower} HP</span>
            </p>
            <p className="flex items-center">
              <FuelIcon />
              <span className="ml-2 capitalize">{car.fuelType}</span>
            </p>
            <p className="flex items-center">
              <img src={alert} alt="info" />
              <span className="ml-2">{car.info || "No additional info"}</span>
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default CarDetailsPage
