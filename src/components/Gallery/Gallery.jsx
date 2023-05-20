import './Gallery.css'

const Gallery = () => {
    return (
        <div  className='my-16'>
              <div ><h3 className="mt-8 mb-3 md:text-3xl text-center sm:text-1xl font-bold  gallery-title">Gallery</h3>
              
              </div>
               
            <div className="grid md:grid-cols-4 md:m-2 sm:ms-4   sm:grid-cols-1">
              
              <div data-aos="fade-left"
        data-aos-anchor-placement="top-bottom"data-aos-duration="3000" className='card m-2 '>
                <div className=''>
                    <img className='gallery-img'  src="https://i.ibb.co/dmvBLYN/car-4.webp" alt="" />
                </div>
              </div>

              <div data-aos="fade-right"
        data-aos-anchor-placement="top-bottom"data-aos-duration="3000" className='card m-2 '>
                <div>
                    <img className='gallery-img'  src="https://i.ibb.co/nn8Cp2t/car-11.jpg" alt="" />
                </div>
              </div>

              <div data-aos="fade-left"
        data-aos-anchor-placement="top-bottom"data-aos-duration="3000" className='card m-2 '>
                <div>
                    <img className='gallery-img'  src="https://i.ibb.co/wwMNqyD/car-3.webp" alt="" />
                </div>
              </div>

              <div data-aos="fade-right"
        data-aos-anchor-placement="top-bottom"data-aos-duration="3000" className='card m-2 '>
                <div>
                    <img className='gallery-img'  src="https://i.ibb.co/TL1SPf2/car-10.jpg" alt="" />
                </div>
              </div>

              <div data-aos="fade-left"
        data-aos-anchor-placement="top-bottom"data-aos-duration="3000" className='card m-2 '>
                <div>
                    <img className='gallery-img'  src="https://i.ibb.co/tcxCDfk/car-8.jpg" alt="" />
                </div>
              </div>

              <div data-aos="fade-right"
        data-aos-anchor-placement="top-bottom"data-aos-duration="3000"  className='card m-2 '>
                <div>
                    <img className='gallery-img'  src="https://i.ibb.co/KqCRFzs/car-5.webp" alt="" />
                </div>
              </div>


              <div data-aos="fade-left"
        data-aos-anchor-placement="top-bottom"data-aos-duration="3000" className='card m-2'>
                <div >
                    <img className='gallery-img'  src="https://i.ibb.co/J5Pdvrk/car-7.webp" alt="" />
                </div>
              </div>

              <div data-aos="fade-right"
        data-aos-anchor-placement="top-bottom"data-aos-duration="3000" className='card m-2'>
                <div>
                    <img className='gallery-img'  src="https://i.ibb.co/nn8Cp2t/car-11.jpg" alt="" />
                </div>
              </div>





            </div>



        </div>

    );
};

export default Gallery;




