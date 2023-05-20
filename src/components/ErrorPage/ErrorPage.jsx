
import { Link, useRouteError } from 'react-router-dom';
import './ErrorPage.css'
import UseTitle from '../../Hooks/UseTitle';

const ErrorPage = () => {
    const {error}=useRouteError()
    console.log(error.message)
    UseTitle('ErrorPage')
   
    return (
     <div className='error-section'>
           <div className='m-auto text-center error-description'>
        
        <div>
        <p className='text-gray-700'>
          {error?.message}
        </p>
        </div>
        <Link
          to='/'
          className='btn go-to-home mt-64 ms-64 px-5 py-3 font-bold rounded '
        >
          Back to home
        </Link>
        
      </div>
     
     </div>
    );
};

export default ErrorPage;