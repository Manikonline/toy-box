import UseTitle from '../../Hooks/UseTitle';
import './WhyYouSell.css'
import { FaBullhorn, FaDollarSign, FaHeadset, FaWpforms } from "react-icons/fa";

const WhyYouSell = () => {
    UseTitle('WhyYouSell')
    return (
        <div className='md:my-8 sm:my-3 '>
            <div><h3 className="mt-8 mb-3 md:text-3xl sm:text-1xl ms-8 font-bold text-start section-title">Why You Sell on Toy Box</h3></div>
            <div className="grid md:grid-cols-4 md:ms-3 sm:grid-cols-1 md:w-full w-[90%]  mx-auto ">
                <div className="card md:w-60 w-full my-2 bg-neutral text-neutral-content ">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title flex"><span><FaBullhorn></FaBullhorn></span> <span>Marketing Tools</span></h2>
                        <p className='text-sm text-gray-500' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa incidunt quo quidem voluptate delectus earum laudantium,</p>

                    </div>
                </div>

                <div className="card md:w-60 w-full my-2 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title flex"><span><FaWpforms></FaWpforms></span> <span>Free Registration</span></h2>
                        <p className='text-sm text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa incidunt quo quidem voluptate delectus earum laudantium,</p>

                    </div>
                </div>

                <div className="card md:w-60 w-full my-2 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title flex"><span><FaHeadset></FaHeadset></span> <span>Support&Training</span></h2>
                        <p className='text-sm text-gray-500' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa incidunt quo quidem voluptate delectus earum laudantium,</p>

                    </div>
                </div>

                <div className="card md:w-60 w-full my-2 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title flex"> <span><FaDollarSign></FaDollarSign></span><span> Timely Payments</span></h2>
                        <p className='text-sm text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa incidunt quo quidem voluptate delectus earum laudantium,</p>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default WhyYouSell;