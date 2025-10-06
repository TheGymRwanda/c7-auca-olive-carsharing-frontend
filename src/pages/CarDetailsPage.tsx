import CarDetails from '../components/CarDetails'
import yellowCar from '../assets/yellowCar.png'

const CarDetailsPage = () => {
  const carProps = {
    carName: 'Tini Titan',
    owner: 'Anna',
    model: 'Countryman',
    plate: 'M-LK-3456',
    horsepower: '122hp',
    fuelType: 'Petrol',
    restriction: 'No Smoking',
    image: yellowCar,
  }

  return (
    <section className="mx-auto flex min-h-screen justify-center items-center flex-col gap-8 py-10 bg-[#265e78] text-white">
      <h1 className="text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
        DETAILS
      </h1>
      <CarDetails {...carProps} />
    </section>
  )
}

export default CarDetailsPage
