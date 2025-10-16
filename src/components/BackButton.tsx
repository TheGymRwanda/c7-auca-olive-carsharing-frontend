import { ChevronBackIcon } from "../assets/ChevronBackIcon"
import { useNavigate } from "react-router-dom"
import { BackButtonProps } from "../util/types"

function BackButton({ previousPath }: BackButtonProps) {
  const navigate = useNavigate()

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1)
    } else {
      navigate(previousPath)
    }
  }

  return (
    <button onClick={handleGoBack} className="m-5">
      <ChevronBackIcon className="size-4 mx-auto text-accent-yellow" />
    </button>
  )
}

export default BackButton
