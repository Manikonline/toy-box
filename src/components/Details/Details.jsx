import { useLoaderData } from "react-router-dom";

import './Details.css'
import UseTitle from "../../Hooks/UseTitle";


const Details = () => {
    const data = useLoaderData();
    console.log(data);

    UseTitle('Details')
    return (
     <div className="details">
           <div className="card lg:card-side bg-base-100 shadow-xl md:m-28">
            <figure><img className="px-10" src={data.image} alt="Album" /></figure>
            <div className="card-body ">
                <h4><span className="font-bold">ToyName: </span>{data?.toyName}</h4>
                <p><span className="font-bold">SellerName: </span>{data?.sellerName}</p>
                <p><span className="font-bold">Price: </span>{data?.price}</p>
                <p><span className="font-bold">Ratting: </span>{data?.ratting}</p>
                <p><span className="font-bold">Available Quantity: </span>{data?.available_quantity}</p>
                <p><span className="font-bold">Description: </span>{data?.description}</p>

            </div>
        </div>
     </div>
    );
};

export default Details;


