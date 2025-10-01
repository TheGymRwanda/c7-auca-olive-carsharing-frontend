function MenuBar() {
  return (
    <div className="flex h-16 w-full flex-row bg-black gap-8">
      <div className="h-16 w-4 flex flex-1 items-center justify-center text-xl text-white">Menu</div>
      <div className="absolute left-1/2 -bottom-4 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full   bg-black text-white">
  Car
</div>
      <div className="h-16 w-4 flex  flex-1 items-center justify-center text-xl text-white">Profile</div>
    </div>
  )
}

export default MenuBar
