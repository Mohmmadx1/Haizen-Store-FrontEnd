import Hero from '../../components/Hero/Hero'
import Products from '../../components/Products/Products'
import Cards from '../../components/Cards/Cards';
import Statics from '../../components/Statics/Statics'



function Home () {
    return (
        <div>
            <Hero />
            <h2 class="text-xl font-bold text-center font-medium text-red-500"> Products </h2>
            <h1 className='text-3xl font-bold text-center'>Most Popular Products</h1>
            <Products />
            <Cards />
            <Statics />
        </div>
    );
}

export default Home;
