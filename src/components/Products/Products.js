
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './Products.css'; 
export default Products


function Products() {

  const [post, setpost] = useState([])

  useEffect( function () {
    axios.get('https://localhost:7133/Home')
      .then((response) => {
        setpost(response.data)
      }, [])
  })
  return (
    <section class="text-gray-600 body-font shadow-sm">
  <div class="container px-5 py-24 mx-auto shadow-sm">
    <div class="flex flex-wrap -m-4 shadow-sm">
{/* ////////////////////////// api-fake data section */}
{
        post.map((data) => {
          return (
          <>
            <Link to={`/products/${data.id}`} class="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-50 mb-4 cursor-pointer">
              <a  class="block relative h-48 rounded overflow-hidden" >
                <img alt={data.title} class="object-contain object-center w-full h-full block" src={data.image} />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">{data.category}</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">{data.title}</h2>
                <p class="mt-1 text-md font-semibold">$ {data.price}</p>
              </div>
            </Link>
          </>
          )
        })
      }
{/* ////////////////////////////// */}

        
    </div>
      </div>
    </section>
  )
}

