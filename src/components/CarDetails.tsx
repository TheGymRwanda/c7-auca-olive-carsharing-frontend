import CarIcon from '../assets/CarIcon'
import FuelIcon from '../assets/FuelIcon'
import HorseIcon from '../assets/HorseIcon'
import ProfileIcon from '../assets/ProfileIcon'
import danger from '../assets/dangerIcon.png'
import plateNumber from '../assets/plateNumberIcon.png'
import yellowCar from '../assets/yellowCar.png'

const CarDetails = () => (
  <div>
    <img src={yellowCar} className="w-[356] h-[198]" alt="" />
    <div className="pl-6 pt-2 flex flex-col gap-2">
      <h3 className="mt-16 mb-8 text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
        Tini Titan
      </h3>
      <div className="flex gap-3 items-center">
        <ProfileIcon />
        <span>Anna</span>
      </div>
      <div className="flex gap-2 items-center">
        <CarIcon />
        <span>Countryman</span>
      </div>
      <div className="flex gap-2 items-center">
        <img src={plateNumber} alt="Plate number icon" />
        <span>M-LK-3456</span>
      </div>
      <div className="flex gap-2 items-center">
        <HorseIcon />
        <span>122hp</span>
      </div>
      <div className="flex gap-2 items-center">
        <FuelIcon />
        <span>Petrol</span>
      </div>
      <div className="flex gap-2 items-center">
        <img src={danger} alt="No smoking icon" />
        <span className="font-bold">No Smoking</span>
      </div>
    </div>
  </div>
)

export default CarDetails
