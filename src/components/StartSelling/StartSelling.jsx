
import UseTitle from '../../Hooks/UseTitle';
import './StartSelling.css'
const StartSelling = () => {
    UseTitle('StartSelling')
    return (
        <div className="my-8">
            <div className="flex mx-10  py-12 all-data justify-between px-8">
                <div>
                    <h3 className='md:text-3xl font-bold md:ms-28 grid md:grid-cols-1 sm:grid-cols-2'>What are You Waiting for? <br></br> Start Selling with Toy Box !</h3>
                </div>
                 <div><button className="btn btn-style mt-4">GET START !!!</button>
                 </div>
            </div>
        </div>
    );
};

export default StartSelling;