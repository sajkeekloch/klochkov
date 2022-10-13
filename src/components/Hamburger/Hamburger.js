
export default function Hamburger(props) {

    function handleMenu() {
        props.handleMenu()
    }

    return(
        <div className="hamburger">
            <svg 
                onClick = {handleMenu}
                className="hamburger__icon" 
                viewBox="0 0 100 80" 
                width="40" 
                height="40">
                <rect width="80" height="10"></rect>
                <rect y="20" width="80" height="10"></rect>
                <rect y="40" width="80" height="10"></rect>
            </svg>
        </div>
    )
}