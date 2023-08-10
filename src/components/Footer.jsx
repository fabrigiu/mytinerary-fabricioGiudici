import Socials from './Socials'
function Footer() {
  return (
    <footer className="bg-orange-200 absolute w-full start-0 inset-x-0 bottom-auto">
      <div className="mx-auto mt-0 w-full px-4 py-10 sm:px-6 lg:px-8 flex flex-row justify-between flex-wrap items-center">
        <div className="flex justify-start items-center">
          <p className="footer-text 4xl pb-1 pl-1 font-semibold">My Tinerary</p>
        </div>
        <div className="flex text-center justify-center font-medium mr-[0.5rem]">
        </div>
        <Socials />
      </div>
    </footer>
  )
}

export default Footer