
import { Link } from 'react-router-dom';
import UseTitle from '../../Hooks/UseTitle';
import './StartSelling.css'
const StartSelling = () => {
    UseTitle('StartSelling')
    return (
        <div className="my-8">
            <div className="grid md:grid-cols-2 sm:grid-cols-1 mx-10  py-12 all-data justify-between text-center px-8">
                <div>
                    <h3 className='md:text-3xl font-bold  grid md:grid-cols-1 sm:grid-cols-2'>What are You Waiting for? <br></br> Start Selling with Toy Box !</h3>
                </div>
                 <div><button className="btn btn-style md:ms-10  mt-4"><Link to='/addatoy'>GET START !!!</Link></button>
                 </div>
            </div>
        </div>
    );
};

export default StartSelling;