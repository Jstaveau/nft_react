import './Createur.css'
import pp from '../images/image-avatar.png'

const overTurquoise = () => {
    document.querySelector('a').classList.toggle('aOver')
}

function createur() {
    return (
        <div className='divCrea'>
            <img src={pp} alt="" />
            <p className='creationDe'>Creation of <a onMouseOver={overTurquoise} onMouseOut={overTurquoise} href='#'>Jules Wyvern</a></p>
        </div>
    )
}

export default createur