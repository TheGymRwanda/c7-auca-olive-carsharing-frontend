import { useNavigate } from 'react-router-dom'
import { ChevronBackIcon } from '../assets/ChevronBackIcon'
const BackButton = () => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <button onClick={handleGoBack} className="m-5">
      <ChevronBackIcon className="size-4 mx-auto text-accent-yellow" />
    </button>
  )
}

export default BackButton
