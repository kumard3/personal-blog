export default function SectionContainer({ children }) {
  return (
    <div className=" bg-black w-full mt-2  min-h-screen">
      <div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">{children}</div>
    </div>
  )
}
