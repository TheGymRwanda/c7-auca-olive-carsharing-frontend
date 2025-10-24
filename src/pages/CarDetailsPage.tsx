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
        <div className="flex flex-1 items-center justify-center h-full text-white">Loading...</div>
      </MainLayout>
    )
  }

  if (!car) {
    return (
      <MainLayout>
        <div className="flex flex-col items-center justify-center h-full text-center text-white">
          <p className="text-2xl text-red-500 mb-4">Car not found!</p>
          <BackButton previousPath={"/allcars"} />
        </div>
      </MainLayout>
    )
  }

  const details = [
    { id: "owner", icon: <ProfileIcon />, label: owner?.name ?? `Owner ID: ${car.ownerId}` },
    { id: "model", icon: <CarIcon />, label: carType?.name ?? "Unknown Type" },
    {
      id: "plate",
      icon: <img src={plateNumber} alt="license plate" />,
      label: car.licensePlate ?? "No license plate",
    },
    {
      id: "horsepower",
      icon: <HorseIcon />,
      label: car.horsepower ? `${car.horsepower} HP` : "Unknown HP",
    },
    {
      id: "fuel",
      icon: <FuelIcon />,
      label: car.fuelType
        ? car.fuelType.charAt(0).toUpperCase() + car.fuelType.slice(1)
        : "Unknown fuel type",
    },
    {
      id: "info",
      icon: <img src={alert} alt="info" />,
      label: car.info || "No additional info",
    },
  ]

  return (
    <MainLayout>
      <div className="mt-6 w-full flex flex-col text-white overflow-hidden items-center">
        <div className="flex w-full items-center justify-between px-6 md:px-20 mb-6">
          <BackButton previousPath={"/allcars"} />
          <h1 className="text-3xl font-lora tracking-wider text-center flex-1 md:text-4xl">
            DETAILS
          </h1>
          <div className="w-10" />
        </div>
        <div className="md:gap-3 lg:flex lg:gap-20 items-center w-full lg:justify-between ml-10">
          <img
            src={carImage}
            alt={car.name}
            className="h-[20%] w-[70%] max-w-md object-contain mx-auto md:w-full lg:mx-32"
          />

          <div className="text-left px-6 w-full md:items-center md:ml-20">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">{car.name}</h2>

            <div className="space-y-2 md:text-xl">
              {details.map(detail => (
                <p key={detail.id} className="flex items-center">
                  {detail.icon}
                  <span className="ml-2">{detail.label}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default CarDetailsPage
