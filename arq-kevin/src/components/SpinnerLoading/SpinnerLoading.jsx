import './SpinnerLoading.css'
import spinner from '../../assets/spinner.gif'

function SpinnerLoading(){
    return (
        <div className='d-flex al-center jc-center loading-overlay-container'>
            <img src={spinner} alt='Loading...' height='80px' />
        </div>
    )  
}

export default SpinnerLoading