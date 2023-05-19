import './Banner.css'

const Banner = () => {
    return (
        <div>
           <div className="carousel w-full ">
  <div id="slide1" className="carousel-item relative w-full">
    <img  src="https://i.ibb.co/q7rQc6L/CAR-WITH-BOY.jpg" className="w-1/2" />
     <div className='w-full bg-slate-200'>
      <div className='md:p-10 sm:p-2'>
      <h3 className='ms-6 title sm:text-xl md:text-3xl font-bold'> Unleashing the Magic of Car Toys</h3>
         <p className='descriptiton md:mt-20'>Car toys have stood the test of time, evolving alongside advancements in technology. </p>
      </div>
     </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle btn-color">❮</a> 
      <a href="#slide2" className="btn btn-circle btn-color">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/R7WVpVc/car-image-3.jpg" className="w-1/2"  />
    <div className='w-full bg-slate-200'>
      <div className='md:p-10 sm:p-2'>
      <h3 className='ms-6 title sm:text-xl md:text-3xl font-bold'> Discovering the Excitement of Car Toys</h3>
         <p className='descriptiton md:mt-20'>Car toys are miniature replicas of real-life vehicles that bring excitement to both children and adults alike.</p>
      </div>
     </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle btn-color">❮</a> 
      <a href="#slide3" className="btn btn-circle btn-color">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/sPvbCLc/CAR-WITH-GIRL.jpg" className="w-1/2"  />
    <div className='w-full bg-slate-200'>
      <div className='md:p-10 sm:p-2'>
      <h3 className='ms-6 title sm:text-xl md:text-3xl font-bold'>Exploring the Joy of Car Toys</h3>
         <p className='descriptiton md:mt-20'>Car toys are miniature replicas of real-life vehicles that bring endless joy to both children and adults alike.</p>
      </div>
     </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle btn-color">❮</a> 
      <a href="#slide4" className="btn btn-circle btn-color">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/phLVqDL/car-4-1.jpg" className="w-1/2"  />
    <div className='w-full bg-slate-200'>
      <div className='md:p-10 sm:p-2 '>
      <h3 className='ms-6 title sm:text-xl md:text-3xl font-bold'>The Magic and Wonder of Car Toys</h3>
         <p className='descriptiton md:mt-20'>Whether used as playtime companions, educational tools, car toys continue to capture the hearts of generations. </p>
      </div>
     </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle btn-color">❮</a> 
      <a href="#slide1" className="btn btn-circle btn-color">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;