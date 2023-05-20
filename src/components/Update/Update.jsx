import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Update = () => {
    const mytoy = useLoaderData()
    console.log(mytoy)


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {

        fetch(`http://localhost:5000/myToyUpdate/${mytoy._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.modifiedCount > 0) {

                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your Update has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

        console.log(data)

    }
    return (
        <div>
            <div className=" ">
                <div className="grid  md:grid-cols-2  sm:grid-cols-1 md:ms-96">
                    <div className="addAtoy ">
                        <form className="form-formate" onSubmit={handleSubmit(onSubmit)}>

                            <input
                                className="text-input  mt-2 py-3 px-14 px- me-4"
                                {...register("sellerName")}
                                placeholder="Seller Name"
                                defaultValue={mytoy?.sellerName} readOnly
                            />
                            <input
                                className="text-input mt-2 py-3 px-14 px- me-4"
                                {...register("email")}
                                placeholder="Email address"
                                defaultValue={mytoy.email} readOnly
                            />
                            <input
                                className="text-input mt-2 py-3 px-14 px- me-4"
                                {...register("toyName")}
                                placeholder="Toy Name"
                                defaultValue={mytoy?.toyName} readOnly
                            />
                            <input
                                className="text-input mt-2 py-3 px-14 px- me-4"
                                {...register("image")}
                                placeholder=" Toy Image Link"
                                defaultValue={mytoy?.image} readOnly
                            />
                            <input
                                className="text-input mt-2 py-3 px-14 px- me-4"
                                {...register("price")}
                                placeholder="Price"
                                defaultValue=''
                            />
                            <input
                                className="text-input mt-2 py-3 px-14 px- me-4"
                                {...register("ratting")}
                                placeholder="Product Ratting"
                                defaultValue={mytoy?.ratting} readOnly
                            />
                            <select className="md:me-16 ms-3  py-3 px-24 mt-2" {...register("subCategory")} >
                                <option disabled selected>{mytoy?.subCategory}</option>


                            </select>
                            <input
                                className="text-input mt-2 py-3 px-14 px- md:me-4"
                                {...register("available_quantity")}
                                placeholder="Available Quantity"
                                defaultValue=''
                            />
                            <textarea
                                className="text-input mt-2 py-3 px-16 px- md:me-4"
                                {...register("description")}
                                placeholder="Product Description"
                                defaultValue=''
                            />


                            {/* <input {...register("exampleRequired", { required: true })} /> */}

                            {errors.exampleRequired && <span>This field is required</span>}



                            <br></br><input className="btn submit-btn my-2 ms-1 w-72" type="submit" value='Add Toy' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;