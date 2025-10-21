import MainLayout from "../components/MainLayout"
import Input from "../components/Input"
import Dropdown from "../components/Dropdown"
import NumberInput from "../components/NumberInput"
import Button from "../components/Button"

export default function AddCar() {
  return (
    <MainLayout>
      <div className="flex flex-col p-4 mt-8 min-h-screen text-center">
        <div className="flex-1">
          <h1 className="text-white font-lora text-3xl font-medium mb-6">NEW CAR</h1>
          <Input label="Name" placeholder="e.g My Nice Mini Car" value="" />
          <Dropdown
            label="Type"
            options={["Mini Cooper", "Other"]}
            selectedValue=""
            onSelect={() => "n"}
          />
          <div className="grid grid-cols-2 gap-4 mb-4">
            <Input label="License Plate" placeholder="e.g. M-XY 123" value="" />
            <NumberInput label="Horse Power" placeholder="110" value="" />
          </div>
          <Dropdown
            label="Fuel Type"
            options={["e.g. 150", "Other"]}
            selectedValue=""
            onSelect={() => "n"}
          />
          <Input label="Additional Information" placeholder="e.g. No smoking" value="" />
        </div>
        <div className="flex justify-center gap-2">
          <Button variant="outlineWhite" size="md" fullWidth>
            Cancel
          </Button>
          <Button variant="primary" size="md" fullWidth>
            Add Car
          </Button>
        </div>
      </div>
    </MainLayout>
  )
}
