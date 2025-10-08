import { useNavigate } from 'react-router-dom'
import back from '../assets/Back.png'
function BackButton() {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1) // Go back one page
  }

  return <button onClick={handleGoBack}>{back}</button>
}

export default BackButton
