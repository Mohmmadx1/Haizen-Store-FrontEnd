import { Link } from "react-router-dom"

export default Navbar

const navigation =[
  {
    name:'Home',
    path:'/'
  },
  {
  name: `Products`,
  path: '/products'
  },
  {
    name:'About',
    path: '/about '
  },
  {
    name:'Contact',
    path: '/contact'
  }
]



function Navbar () {
    return(
        <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to={'/'} class="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-9 h-9 text-white p-2 bg-red-500 rounded" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
</svg>

      <span class="ml-3 text-xl">Haizen-Store</span>
    </Link>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      {
        navigation.map( (navigation)=>{
          return (
            <Link to={navigation.path} className="mr-5 hover:text-gray-900 hover:bg-red-400 p-4 rounded-xl">{navigation.name}</Link>
          )
        })
      }

    </nav>
    <div>
       {/* BUTTONS */}
    <Link to={'/cart'} class="relative right-3 inline-flex items-center bg-gray-100 border-0 py-2 px-4 focus:outline-none hover:bg-red-200 rounded text-base mt-4 md:mt-0 "> To Cart !
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg></Link>

    <button class="inline-flex items-center bg-gray-100 border-0 py-2 px-4 focus:outline-none hover:bg-red-200 rounded text-base mt-4 md:mt-0 "> 
    Login <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 p-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
</svg>

      </button>
    </div>
    </div>
</header>
    )
}