import './header.css'

export function Header () {
    return (
    <div className="header">
        <div><a href='/'>LauGau</a></div>

        <div className='authorization'>
        <div><a href='/login'>Login</a></div>
        <div><a href='/logout'>Logout</a></div>
        <div><a href='/register'>Register</a></div>
        </div>
    </div>
    )
}