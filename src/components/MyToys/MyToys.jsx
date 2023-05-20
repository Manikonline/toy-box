import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import './MyToys.css'
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyToys = () => {
  const { user } = useContext(AuthContext)
  const [mytoys, setMytoys] = useState([])
  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setMytoys(data)

      })
  }, [user])

  const handleDelete = (_id) => {
    console.log(_id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('deteted')

        fetch(`http://localhost:5000/myToys/${_id}`, { method: 'DELETE' })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your post has been deleted.',
                'success'
              )
              const
                remaining = mytoys.filter(mytoy => mytoy._id !== _id);
              setMytoys(remaining)
            }
          })
      }
    })
  }


  return (
    <div>
      <div className="text-center">
        <div className="btn-group py-6 btn-group-vertical  lg:btn-group-horizontal">
         
          <button className="btn">Ascending</button>
          <button className="btn">Descending</button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">

          <thead>
            <tr>

              <th>Toy picture,Seller Name <br></br>and email</th>
              <th>Product Name <br></br> and Quanity</th>
              <th>sub-Category</th>
              <th>price</th>
              <th>Ratting</th>
              <th>Details</th>
              <th> Update/Delete</th>
            </tr>
          </thead>

          {
            mytoys.map(mytoy => <> <tbody>

              <tr>

                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img className="mytoy-image" src={mytoy?.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{mytoy?.sellerName}</div>
                      <div className="text-sm opacity-50">{mytoy?.email}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {mytoy?.toyName}
                  <br />
                  <span className="badge badge-ghost badge-sm">{mytoy?.available_quantity}</span>
                </td>
                <td>{mytoy?.subCategory}</td>
                <td>{mytoy?.price}</td>
                <td>{mytoy?.ratting}</td>
                <th>
                  <p>{mytoy?.description}</p>
                </th>
                <th><span className="btn btn-md "><Link to={`/myToyUpdate/${mytoy?._id}`}>Update</Link></span> <span onClick={() => handleDelete(mytoy?._id)} className="btn btn-md ">Delete</span></th>
              </tr>


            </tbody></>)
          }


        </table>
      </div>
    </div>
  );
};

export default MyToys;