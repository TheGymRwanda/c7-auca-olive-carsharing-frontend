import MainLayout from '../components/MainLayout'

export default function ErrorPage() {
  return (
    <MainLayout>
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#265E78] p-8 text-white">
        <h1 className="mb-4 text-3xl font-bold">Error Page</h1>
      </div>
    </MainLayout>
  )
}
