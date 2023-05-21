import { useEffect, useState } from 'react';
import './Tabs.css'
import { Link } from 'react-router-dom';


const Tabs = () => {
    const [toggle, setToggle] = useState(1)
    const [allProducts, setAllProducts] = useState([])
    const [categoryData, setCategoryData] = useState('sport_car')
    const handleToggle = (id, subCategory) => {
        setToggle(id);
        setCategoryData(subCategory)
        console.log(subCategory)

    }
    console.log(categoryData)

    useEffect(() => {
        fetch(`https://toy-box-server-topaz.vercel.app/subProducts?subCategory=${categoryData}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllProducts(data)

            })

    }, [categoryData])




    return (
       <div className='' >
         <div className=''>
            <div className='py-2 my-3'>
                <h1 className='text-center text-2xl font-bold'>Shop by category</h1>
            </div>
            <div className='flex items-center justify-center md:flex-row flex-col'>
                   
                        <button className="btn btn-sm btn-edit md:mx-2 sm:mx-1" onClick={() => handleToggle(1, 'sport_car')}>Sport-car</button>
                        <button className="btn btn-sm btn-edit md:mx-2 sm:mx-1" onClick={() => handleToggle(2, 'truck')}>Truck</button>
                        <button className="btn btn-sm btn-edit md:mx-2 sm:mx-1" onClick={() => handleToggle(3, 'polic_car')}>Police-car</button>
                   
                </div>
        
               
                <div className='sm:mb-10'>
                    <div className={toggle === 1 ? "show-content" : "content"}>
                        <div className='grid md:grid-cols-2 sm:grid-cols-1 w-[90%] mx-auto '>
                            {
                                allProducts?.slice(0 - 2).map(product => <><div><div className="card md:w-96 w-full bg-base-100 shadow-xl my-5  ">
                                <figure className="px-10 pt-10">
                                    <img src={product?.image} alt="Shoes" className="rounded-xl card-imagee" />
                                </figure>
                                <div className="card-body  ">
                                    <h2 className="card-title text-start">{product?.toyName}</h2>
                                    <p className='text-start'>Price: {product?.price}tk</p>
                                    <div className="card-actions text-start">
                                        <p>Rating: {product?.ratting}</p> <button className='view-details-btn'><Link to={`productDetails/${product?._id}`}>View Detais</Link></button>
                                    </div>
                                </div>
                            </div></div></>)
                            }

                        </div>

                    </div>
                    <div className={toggle === 2 ? "show-content" : "content"}>
                        <div className='grid md:grid-cols-2  sm:grid-cols-1  w-[90%] mx-auto  '>
                            {
                                allProducts?.slice(0 - 2).map(product => <><div className="card flex md:w-96 w-full bg-base-100 shadow-xl my-5 ">
                                    <figure className="px-10 pt-10">
                                        <img src={product?.image} alt="Shoes" className="rounded-xl card-imagee" />
                                    </figure>
                                    <div className="card-body  text-center">
                                    <h2 className="card-title text-start">{product?.toyName}</h2>
                                        <p className='text-start'>Price: {product?.price}tk</p>
                                        <div className="card-actions text-start">
                                            <p>Rating: {product?.ratting}</p> <button className='view-details-btn'>View Detais</button>
                                        </div>
                                    </div>
                                </div></>)
                            }

                        </div>
                    </div>
                    <div className={toggle === 3 ? "show-content" : "content"}>
                        <div className='grid md:grid-cols-2 sm:grid-cols-1  w-[90%] mx-auto '>
                            {
                                allProducts?.slice(0 - 2).map(product => <><div className="card flex md:w-96 w-full bg-base-100 shadow-xl my-5 ">
                                    <figure className="px-10 pt-10">
                                        <img src={product?.image} alt="Shoes" className="rounded-xl card-imagee" />
                                    </figure>
                                    <div className="card-body  text-center">
                                    <h2 className="card-title text-start">{product?.toyName}</h2>
                                        <p className='text-start'>Price: {product?.price}tk</p>
                                        <div className="card-actions text-start">
                                            <p>Rating: {product?.ratting}</p> <button className='view-details-btn'><Link to={`productDetails/${product?._id}`}>View Detais</Link></button>
                                        </div>
                                    </div>
                                </div></>)
                            }

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tabs;