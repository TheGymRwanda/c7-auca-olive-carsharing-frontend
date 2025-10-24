import BackButton from "../components/BackButton"
import CarCard from "../components/CarCard"
import MainLayout from "../components/MainLayout"
import { useCars, useCarTypes, useUsers } from "../hooks"
const AllCars = () => {
  const [{ data: cars, loading: carLoading, error: carError }] = useCars()
  const [{ data: users, loading: userLoading, error: userError }] = useUsers()
  const [{ data: carTypes, loading: carTypeLoading, error: carTypeError }] = useCarTypes()

  const loading = carLoading || userLoading || carTypeLoading
  const error = carError || userError || carTypeError

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-primary-dark">
        <p className="text-xl text-white">Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-primary-dark">
        <p className="text-xl text-red-300">Error loading cars: {error.message}</p>
      </div>
    )
  }

  if (!cars || cars.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-primary-dark">
        <p className="text-xl text-white">No cars available</p>
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-primary-dark">
      <MainLayout>
        <div className="mt-8 flex w-full items-center justify-center px-5">
          <div className="flex-none">
            <BackButton previousPath={"/"} />
          </div>
          <h1 className="flex-1 text-center font-lora text-3xl font-medium text-white">ALL CARS</h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {cars.map(car => {
            const owner = users?.find(user => user.id === car.ownerId)
            const carType = carTypes?.find(type => type.id === car.carTypeId)
            return (
              <CarCard
                key={car.id}
                carId={car.id}
                carName={car.name}
                carOwner={owner?.name}
                carType={carType?.name}
                carImage={carType?.imageUrl}
              />
            )
          })}
        </div>
      </MainLayout>
    </div>
  )
}

export default AllCars
