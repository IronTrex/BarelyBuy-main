import Faker from "./Faker"
import NavBar from "./NavBar"
import {Nav, NavDropdown} from "react-bootstrap"
import {Link,usehistory} from "react-router-dom"

export default function Home() {
    let user= JSON.parse(localStorage.getItem("user-info"))
    const history = useHistory()
    function logOut(){
        localStorage.clear()
        history.push('/register')
    }
    return(
        <>
        <div>
            <NavBar />
        </div>
        <div>
            <Faker />
        </div>
        <div>
            {localStorage.getItem('user-info')} 
            <Nav>
                <NavDropdown title={user && user.name} >
                  <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>  
                </NavDropdown>
            </Nav>
            :null
        </div>
        </>
    )
}