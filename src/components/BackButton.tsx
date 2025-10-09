import { useNavigate } from 'react-router-dom'
import { ChevronBackIcon } from '../assets/ChevronBackIcon'
function BackButton() {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1) // Go back one page
  }

  return (
    <button onClick={handleGoBack} className="m-5">
      <ChevronBackIcon className="text-white mx-auto size-5" />
    </button>
  )
}

export default BackButton
