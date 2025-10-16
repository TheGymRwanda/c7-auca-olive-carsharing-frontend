import { useParams } from "react-router-dom"
import { useEffect } from "react"
import CarDetails from "../components/CarDetails"
import BackButton from "../components/BackButton"
import MainLayout from "../components/MainLayout"
import { useCars, useCarTypes, useUsers } from "../hooks"

const CarDetailsPage = () => {
  const { id } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  const [{ data: cars, loading: carLoading, error: carError }] = useCars()
  const [{ data: users, loading: userLoading, error: userError }] = useUsers()
  const [{ data: carTypes, loading: carTypeLoading, error: carTypeError }] = useCarTypes()

  const loading = carLoading || userLoading || carTypeLoading
  const error = carError || userError || carTypeError

  const car = cars?.find(c => c.id === Number(id))
  const owner = users?.find(user => user.id === car?.ownerId)
  const carType = carTypes?.find(type => type.id === car?.carTypeId)

  if (loading) {
    return (
      <MainLayout>
        <section className="flex h-screen items-center justify-center bg-primary-dark text-white">
          <p className="text-xl">Loading car details...</p>
        </section>
      </MainLayout>
    )
  }

  if (error) {
    return (
      <MainLayout>
        <section className="flex h-screen items-center justify-center bg-[#265e78] text-white">
          <p className="text-xl text-red-300">Error loading car details: {error.message}</p>
        </section>
      </MainLayout>
    )
  }

  if (!car) {
    return (
      <MainLayout>
        <section className="flex h-screen items-center justify-center bg-[#265e78] text-white">
          <p className="text-xl">Car not found</p>
        </section>
      </MainLayout>
    )
  }

  const Car = {
    carName: car.name,
    owner: owner?.name || "Unknown Owner",
    model: carType?.name || "Unknown Model",
    plate: car.licensePlate || "N/A",
    horsepower: `${car.horsepower}hp`,
    fuelType: car.fuelType.charAt(0).toUpperCase() + car.fuelType.slice(1),
    restriction: car.info || "No restrictions",
    image: carType?.imageUrl || "",
  }

  return (
    <MainLayout>
      <section className="flex h-screen flex-col items-center justify-center gap-6 bg-primary-dark px-4 py-6 text-white">
        <div className="flex w-full items-center justify-start gap-4">
          <BackButton />
          <h1 className="text-center flex-1 font-lora text-3xl font-medium">DETAILS</h1>
        </div>

        <div className="flex flex-col items-center justify-center w-full max-w-md gap-6 overflow-auto">
          <CarDetails {...Car} />
        </div>
      </section>
    </MainLayout>
  )
}

export default CarDetailsPage
