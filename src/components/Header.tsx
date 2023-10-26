// Import the 'logo' image from the specified file path.
import logo from '../assets/img/rick-and-morty.png'

// Define a functional component named 'Header'.
export default function Header() {
    return (
        // Create a header element to display the logo.
        <header>
            <img src={logo} />
        </header>
    )
}
