import BackButton from '../components/BackButton'
import CarCard from '../components/CarCard'
import MainLayout from '../components/MainLayout'
import { useCars, useCarTypes, useUsers } from '../hooks'
export default function AllCars() {
  const [{ data: cars, loading: carLoading, error: carError }] = useCars()
  const [{ data: users, loading: userLoading, error: userError }] = useUsers()
  const [{ data: carTypes, loading: carTypeLoading, error: carTypeError }] = useCarTypes()

  const loading = carLoading || userLoading || carTypeLoading
  const error = carError || userError || carTypeError

  // Show loading state
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#265E78]">
        <p className="text-xl text-white">Loading cars...</p>
      </div>
    )
  }
  // Show error state
  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#265E78]">
        <p className="text-xl text-red-300">Error loading cars: {error.message}</p>
      </div>
    )
  }
  // Show empty state
  if (!cars || cars.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#265E78]">
        <p className="text-xl text-white">No cars available</p>
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-[#265E78]">
      <MainLayout>
        <div className="flex mt-8 w-full items-center justify-center px-5">
          <div className='flex-none'>
          <BackButton />
          </div>
          <h1 className="font-lora flex-1 text-center text-3xl font-medium text-white">ALL CARS</h1>
        </div>
        {cars.map(car => {
          // Find the owner for this car
          const owner = users?.find(user => user.id === car.ownerId)
          // Find the car type for this car
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
      </MainLayout>
    </div>
  )
}
