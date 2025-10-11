import { useNavigate } from 'react-router-dom'
import { ChevronBackIcon } from '../assets/ChevronBackIcon'
function BackButton() {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1) // Go back one page
  }

  return (
    <button onClick={handleGoBack} className="m-5">
      <ChevronBackIcon className="size-4 mx-auto text-[#F8FCAD]" />
    </button>
  )
}

export default BackButton
