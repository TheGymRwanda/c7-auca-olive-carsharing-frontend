
import CarCard from '../components/CarCard'
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
     <div className="bg-[#265E78] min-h-screen flex items-center justify-center">
       <p className="text-white text-xl">Loading cars...</p>
     </div>
   )
 }
 // Show error state
 if (error) {
   return (
     <div className="bg-[#265E78] min-h-screen flex items-center justify-center">
       <p className="text-red-300 text-xl">Error loading cars: {error.message}</p>
     </div>
   )
 }
 // Show empty state
 if (!cars || cars.length === 0) {
   return (
     <div className="bg-[#265E78] min-h-screen flex items-center justify-center">
       <p className="text-white text-xl">No cars available</p>
     </div>
   )
 }
 return (
   <div className="bg-[#265E78] min-h-screen">
     <div className="flex justify-center items-center px-7 ">
       <h1 className="text-white font-lora text-lg font-medium">ALL CARS</h1>
     </div>
     {cars.map(car => {
       // Find the owner for this car
       const owner = users?.find(user => user.id === car.ownerId)
       // Find the car type for this car
       const carType = carTypes?.find(type => type.id === car.carTypeId)


       return (
         <CarCard
           key={car.id}
           carName={car.name}
           carOwner={owner?.name}
           carType={carType?.name}
           carImage={carType?.imageUrl}
         />
       )
     })}
   </div>
 )
}
