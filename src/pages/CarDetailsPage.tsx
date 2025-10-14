import CarDetails from '../components/CarDetails'
import yellowCar from '../assets/YellowCar.svg'

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
    <section className="mx-auto flex min-h-screen flex-col items-center justify-center gap-8 bg-[#265e78] py-10 text-white">
      <h1 className="text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
        DETAILS
      </h1>
      <CarDetails {...carProps} />
    </section>
  )
}

export default CarDetailsPage
