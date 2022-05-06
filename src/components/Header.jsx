import './Header.css'
import Nav from './Nav'

export default function Header() {
    return (
        <header className='header'>
            <h1 className='header-logo'>CAT API</h1>
            <Nav />
        </header>
    )
}