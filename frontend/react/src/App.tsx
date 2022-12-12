import React from 'react'
import './App.css'
import Login from "./components/Login";
import Register from "./components/Register";
import NoPage from "./components/NoPage";
import Board from "./components/Board";

function App() {
    return (
        <div className="App">
            {showDefault()}
            {showRegister()}
            {showLogin()}
            {showBoard()}
            {showNotFound()}
        </div>
    )
}

export default App;

// лютые костыль для роутинга, но у меня не было времени разбираться с ним :(
const showRegister = () => {
    if (window.location.pathname === "/sign-up") {
        return <Register />
    }
}

const showLogin = () => {
    if (window.location.pathname === "/sign-in") {
        return <Login />
    }
}

const showBoard = () => {
    if (window.location.pathname === "/board") {
        return <Board />
    }
}

const showNotFound = () => {
    const paths = ["/sign-up", "/sign-in", "/board"]
    if (paths.indexOf(window.location.pathname) === -1) {
        return <NoPage />
    }
}

const showDefault = () => {
    if (window.location.pathname === "/" || window.location.pathname === "") {
        window.location.pathname = '/sign-in'
        return <Login />
    }
}



