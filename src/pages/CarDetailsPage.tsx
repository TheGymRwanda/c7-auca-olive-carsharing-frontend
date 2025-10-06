import CarDetails, { CarDetailsProps } from '../components/CarDetails'

const sampleCar: CarDetailsProps = {
  carName: 'Tini Titan',
  carImage: undefined,
  ownerName: 'Anna',
  model: 'Countryman',
  plateNumber: 'M-LK-3456',
  horsepower: '122hp',
  fuelType: 'Petrol',
  isSmokingAllowed: false,
}

const CarDetailsPage = () => (
  <>
    <section className="mx-auto flex min-h-screen justify-center items-center flex-col gap-8 py-10 bg-[#265e78] text-white">
      <h1 className="text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
        DETAILS
      </h1>

      <CarDetails {...sampleCar} />
    </section>
  </>
)

export default CarDetailsPage
