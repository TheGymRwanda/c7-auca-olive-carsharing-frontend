import CarIcon from '../assets/CarIcon'
import FuelIcon from '../assets/FuelIcon'
import HorseIcon from '../assets/HorseIcon'
import ProfileIcon from '../assets/ProfileIcon'
import danger from '../assets/dangerIcon.png'
import plateNumber from '../assets/plateNumberIcon.png'
import yellowCar from '../assets/yellowCar.png'

const CarDetails = () => (
  <div className="p-10">
    <h1>DETAILS</h1>
    <img src={yellowCar} className="w-[356] and h-[198]" alt="" />
    <h3>Tini Titan</h3>
    <div className="flex gap-2">
      <ProfileIcon />
      <span>Anna</span>
    </div>
    <div className="flex gap-2">
      <CarIcon />
      <span>Countryman</span>
    </div>
    <div className="flex gap-2">
      <img src={plateNumber} alt="Plate number icon" />
      <span>M-LK-3456</span>
    </div>
    <div className="flex gap-2">
      <HorseIcon />
      <span>122hp</span>
    </div>
    <div className="flex gap-2">
      <FuelIcon />
      <span>Petrol</span>
    </div>
    <div className="flex gap-2">
      <img src={danger} alt="No smoking icon" />
      <span className="font-bold">No Smoking</span>
    </div>
  </div>
)

export default CarDetails
