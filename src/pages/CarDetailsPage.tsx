import CarDetails from '../components/CarDetails'

const CarDetailsPage = () => (
  <>
    <section className="mx-auto flex min-h-screen justify-center items-center flex-col gap-8 py-10 bg-[#265e78] text-white">
      <h1 className="text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
        DETAILS
      </h1>
      <CarDetails />
    </section>
  </>
)

export default CarDetailsPage
