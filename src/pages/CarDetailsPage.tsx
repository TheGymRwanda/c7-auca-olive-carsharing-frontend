import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import CarDetails from '../components/CarDetails'
import BackButton from '../components/BackButton'
import MainLayout from '../components/MainLayout'
import { useCars, useCarTypes, useUsers } from '../hooks'

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

  // Find the specific car
  const car = cars?.find(c => c.id === Number(id))
  const owner = users?.find(user => user.id === car?.ownerId)
  const carType = carTypes?.find(type => type.id === car?.carTypeId)

  // Show loading state
  if (loading) {
    return (
      <MainLayout>
        <section className="mx-auto flex min-h-screen flex-col items-center justify-center gap-8 bg-[#265e78] py-10 text-white">
          <p className="text-xl text-white">Loading car details...</p>
        </section>
      </MainLayout>
    )
  }

  // Show error state
  if (error) {
    return (
      <MainLayout>
        <section className="mx-auto flex min-h-screen flex-col items-center justify-center gap-8 bg-[#265e78] py-10 text-white">
          <p className="text-xl text-red-300">Error loading car details: {error.message}</p>
        </section>
      </MainLayout>
    )
  }
  // Show not found state
if (!car) {
  return (
    <MainLayout>
      <section className="mx-auto flex min-h-screen flex-col items-center justify-center gap-8 bg-[#265e78] py-10 text-white">
        <p className="text-xl text-white">Car not found</p>
      </section>
    </MainLayout>
  )
}
  // Map API data to CarDetails props
  const carProps = {
    carName: car.name,
    owner: owner?.name || 'Unknown Owner',
    model: carType?.name || 'Unknown Model',
    plate: car.licensePlate || 'N/A',
    horsepower: `${car.horsepower}hp`,
    fuelType: car.fuelType.charAt(0).toUpperCase() + car.fuelType.slice(1),
    restriction: car.info || 'No restrictions',
    image: carType?.imageUrl || '',
  }

  return (
    <MainLayout>
      <section className="mx-auto flex min-h-screen flex-col items-center justify-center gap-8 bg-[#265e78] py-10 text-white">
        <div className="flex w-full items-center justify-center">
          <div className="flex-none">
            <BackButton />
          </div>
          <h1 className="font-lora flex-1 mr-10 text-center text-3xl font-medium text-white">
            DETAILS
          </h1>
        </div>
        <CarDetails {...carProps} />
      </section>
    </MainLayout>
  )
}

export default CarDetailsPage
