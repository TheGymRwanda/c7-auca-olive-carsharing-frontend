import MainLayout from '../components/MainLayout'
import Input from '../components/input'

export default function AddCar() {
  return (
    <MainLayout>
      <div className="p-4 min-h-screen text-center">
        <h1 className="text-white text-2xl font-bold mb-6">NEW CAR</h1>
        <Input />
      </div>
    </MainLayout>
  )
}
