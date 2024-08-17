import { Link } from "react-router-dom"

function Nav_main(){

    return (
        <>
        <ul className="main-nav">
            <li className="nav-item">
                <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/shop">Shop</Link>
            </li>
            <li className="nav-item">
                <Link to="/cart">Cart</Link>
            </li>
        </ul>
        </>
    )
}

export {Nav_main}