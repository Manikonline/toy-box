import { useEffect, useState } from "react";
import './AllToy.css'
import { Link } from "react-router-dom";


const AllToy = () => {
   const[products,setProducts]=useState([])
   const [searchText, setSearchText] = useState("");

    // const data=useLoaderData()
    // setProducts(data)
    useEffect(()=>{
        fetch('http://localhost:5000/allProducts')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setProducts(data)
        })
    },[])

    const handleSearch = () => {
        fetch(`http://localhost:5000/toySearchBytoyName/${searchText}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setProducts(data);
          });
      };

    return (
        <div>
            <div>
              
            <div className="search-box search-box-edit p-2 text-center">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="p-2"
          />{" "}
          <button onClick={handleSearch} className="btn py-2 btn-sm search-btn">Search</button>
        </div> 
            </div>
            <div className="overflow-x-auto">
  <table className="table table-zebra  w-full">
   
    <thead>
      <tr>
        
        <th>Seller Name</th>
        <th>Toy Name</th>
        <th>Sub-Category</th>
        <th>Price</th>
        <th>Availavble Quanity</th>
        <th>Details</th>
      </tr>
    </thead>
      {
        products.slice(0-20).map(product=> <> <tbody>

            <tr>
                
                <td>{product?.sellerName}</td>
                <td>{product?.toyName}</td>
                <td>{product?.subCategory}</td>
                <td>{product?.price}Tk</td>
                <td>{product?.available_quantity}</td>
                <td><button className="btn"><Link to={`/productDetails/${product._id}` }>View Details</Link></button></td>
            </tr>

        </tbody></>)
      } 
  </table>
</div>
        </div>
    );
};

export default AllToy;