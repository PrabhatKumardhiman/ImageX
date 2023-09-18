import React, { useState } from 'react'

const Navbar = (props) => {
    const [value , setValue ] = useState("")

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">ImageX</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button className="nav-link" aria-current="page" onClick={(e) => {
                                    e.preventDefault()
                                    props.setState({ category: "general" })
                                }}>
                                    Home</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={(e) => {
                                    e.preventDefault()
                                    props.setState({ category: "Business" })
                                }} >Business</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={(e) => {
                                    e.preventDefault()
                                    props.setState({ category: "Entertainment" })
                                }} >Entertainment</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={(e) => {
                                    e.preventDefault()
                                    props.setState({ category: "Health" })
                                }} >Health</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={(e) => {
                                    e.preventDefault()
                                    props.setState({ category: "Science" })
                                }} >Science</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={(e) => {
                                    e.preventDefault()
                                    props.setState({ category: "Sports" })
                                }} >Sports</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={(e) => {
                                    e.preventDefault()
                                    props.setState({ category: "Technology" })
                                }} >Technology</button>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" onSubmit={(e) => {
                            e.preventDefault()
                            props.setState({ category: value })
                        }}>
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                            />
                            <button className="btn btn-outline-success" type="submit" >Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
