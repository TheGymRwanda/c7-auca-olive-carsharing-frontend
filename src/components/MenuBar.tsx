function MenuBar() {
  return (
    <div className="flex h-16 w-full flex-row gap-8 bg-black">
      <div className="flex h-16 w-4 flex-1 items-center justify-center text-xl text-white">
        Menu
      </div>
      <div className="absolute -bottom-4 left-1/2 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full   bg-black text-white">
        Car
      </div>
      <div className="flex h-16 w-4  flex-1 items-center justify-center text-xl text-white">
        Profile
      </div>
    </div>
  )
}

export default MenuBar
