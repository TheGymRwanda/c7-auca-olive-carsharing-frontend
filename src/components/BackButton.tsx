import { useNavigate } from 'react-router-dom'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'

function BackButton() {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1) // Go back one page
  }

  return (
    <button onClick={handleGoBack}>
      <MdOutlineArrowBackIosNew />
    </button>
  )
}

export default BackButton
