import {Link} from 'react-router-dom'
import './index.css'

const Quotation = ()=>(
    <div className='quotation-container'>
        <div>
            <h1 className='quotation-heading'>Get a Quotation Now</h1>
            <p className='quotation-description'>Contact to obtain the best solution for deburring and polishing application.</p>
        </div>
        <Link to="/contactus">
            <button type='button' className='contact-us-button'>ContactUs</button>
        </Link>
    </div>
)

export default Quotation


