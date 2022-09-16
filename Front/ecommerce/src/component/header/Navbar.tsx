// export interface Props {
//   text: String;
// }
// // const Header = ({text} : Props) => (
// //    <div>{text}</div>
// // ); export default Header;

// function Header (props : Props) {

//   return <div>{props.text}</div>

// }; export default Header;
import './Navbar.css'
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      {/* {Elements.map((element) => {
        <NavLink props.titre = { element.titre} />
        si je declare mes props avant je ne precise pas props
      })} */}
      <NavLink 
      to="/"
      className={({isActive}) => isActive ? "activeLinks" : ""}
      >Accueil</NavLink>
      <NavLink to="/NotFound"
      className={({isActive}) => isActive ? "activeLinks" : ""}
      >Page non trouvée</NavLink>
    </nav>
  )
}


