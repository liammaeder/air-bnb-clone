import Logo from "../images/airbnb-logo.png";

export default function NavBar() {
    return (
        <nav>
            <img src={Logo} className="nav--logo" />
        </nav>
    )
}