import { useEffect, useState } from 'react';
import './Tabs.css'


const Tabs = () => {
    const [toggle, setToggle] = useState(1)
    const [allProducts, setAllProducts]=useState([])
    const [categoryData, setCategoryData]=useState([])
    const handleToggle = (id ,subCategory) => {
        setToggle(id );
        setCategoryData(subCategory)
        console.log(subCategory)
      
    }
    console.log(categoryData)
    
    useEffect(()=>{
        fetch(`http://localhost:5000/subProducts?subCategory=${categoryData}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setAllProducts(data)

        })

    },[categoryData])

    

   
    return (
        <div className='md:mb-96 sm:mb-40'>
            <div className='py-2 my-3'>
                <h1 className='text-center text-3xl font-bold'>Shop by category</h1>
            </div>
           
            <div className="text-center tab grid md:grid-cols-1 sm:grid-cols-1 ">
                <div className='text-center m-auto'>
                    <ul className="flex ">
                        <li className="mx-3 px-2 active" onClick={() => handleToggle(1,'sport_car')}>Sport-car</li>
                        <li className="mx-3 px-2" onClick={() => handleToggle(2,'truck')}>Truck</li>
                        <li className="mx-3 px-2" onClick={() => handleToggle(3,'polic_car')}>Police-car</li>
                    </ul>
                </div>
                <div>
                    <div className={toggle === 1 ? "show-content" : "content"}>
                        <div className='grid md:grid-cols-2 sm:grid-cols-1 my-20'>
                           
                          
                        </div>

                    </div>
                    <div className={toggle === 2 ? "show-content" : "content"}>
                        <h3>Truck</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic necessitatibus similique tempore exercitationem unde nulla nemo assumenda maiores alias neque.</p>
                    </div>
                    <div className={toggle === 3 ? "show-content" : "content"}>
                        <h3>Police</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic necessitatibus similique tempore exercitationem unde nulla nemo assumenda maiores alias neque.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tabs;