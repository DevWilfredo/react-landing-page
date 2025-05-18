const NavbarComponent = ({ items, brandText }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid px-5 py-2">
                <a className="navbar-brand" href="#">{brandText}</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {items.map((item, index) => (
                            <li className="nav-item" key={index}>
                                <a className="nav-link" aria-current="page" href={item.link}>{item.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default NavbarComponent