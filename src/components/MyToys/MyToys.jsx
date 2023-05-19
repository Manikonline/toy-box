

const MyToys = () => {
    return (
        <div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
       
        <th>Name</th>
        <th>Product Name and Quanity</th>
        <th>sub-Category</th>
        <th>price</th>
        <th>Ratting</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
       
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Seller Name</div>
              <div className="text-sm opacity-50">seller email</div>
            </div>
          </div>
        </td>
        <td>
           Product Name
          <br/>
          <span className="badge badge-ghost badge-sm">Quantity</span>
        </td>
        <td>sub-category</td>
        <td>parice</td>
        <td>ratting</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
   
     
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default MyToys;