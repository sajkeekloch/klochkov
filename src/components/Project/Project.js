import image1 from '../images/1.png'
import image2 from '../images/2.png'
import image3 from '../images/3.png'
import image4 from '../images/4.png'
import placeHolder from '../images/placeHolder.jpeg'
import './Project.css'

function Project(props) {
    let items = props.data.tech.map((el, index) => {
        return(<li className="project__tech_item" key={ index }> { el } </li>)
    })
    let image = placeHolder
    if(props.data.id === "0") {
        image = image0
    }
    else if(props.data.id === "1") {
        image = image1
    }
    else if(props.data.id === "2") {
        image = image2
    }
    else if(props.data.id === "3") {
        image = image3
    }
    else if(props.data.id === "4") {
        image = image4
    }
    return(
        <div 
            className="project" 
            style = {{
                backgroundImage: `url(${image})`
            }}
        >
            <div className="project__description">
                <h3 className="project__name">{ props.data.name }</h3>
                
                <p className="project__text">{ props.data.text }</p>
                <ul className="project__tech">
                    { items }
                </ul>
                <a 
                    href ={ props.data.link } 
                    className="project__link"
                    target="_blank"
                    rel="noreferrer">{ props.data.linkText }</a>
            </div>
        </div>
    )
}

export default Project