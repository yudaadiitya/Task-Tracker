import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <p>Learn React</p>
            <p>Copyright &copy; 2021</p>
            <Link to="/about">About</Link>
        </footer>
    )
}

export default Footer
