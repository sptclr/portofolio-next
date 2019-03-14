import React from 'react';
import Link from 'next/link';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const BsNavLink = (props) => {
  const { route, title } = props
  return (
    <Link href={route}>
      <a className="nav-link port-navbar-link"> {title} </a>
    </Link>
  );
};

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
          <NavbarBrand className="port-navbar-brand" href="/">Fajar Muhamad</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="port-navbar-item">                
                  <BsNavLink route="/" title={"home"}/>
              </NavItem>
              <NavItem className="port-navbar-item">                
                  <BsNavLink route="/about" title={"About"}/>
              </NavItem>
              <NavItem className="port-navbar-item">                
                  <BsNavLink route="/portofolios" title={"portofolio"}/>
              </NavItem>
              <NavItem className="port-navbar-item">                
                  <BsNavLink route="/blogs" title={"blog"}/>
              </NavItem>
              <NavItem className="port-navbar-item">                
                  <BsNavLink route="/cv" title={"cv"} />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
// import React from 'react';

// class Header extends React.Component {
//   //bagian constructor dan fungsi
//   render() {
//     // //init dibawah render
//     // const title = this.props.title;
//     // const children = this.props.children;
//     return (
//       <React.Fragment>
//         {/* <h1 style={{'fontSize': '20px', 'color': 'violet'}}>{title}</h1> {/**inline style
//         <p>{children}</p> */}
{
  /* <Link href="/">
  <a> Home </a>
</Link>; */
}
//         <Link href="/about">
//           <a> About </a>
//         </Link>
//         <Link href="/portofolios">
//           <a> Portofolio </a>
//         </Link>
//         <Link href="/blogs">
//           <a> Blog </a>
//         </Link>
//         <Link href="/cv">
//           <a> Cv </a>
//         </Link>
//         {/* component style */}
//         <style jsx>
//           {`
//             p {
//               font-size: 25px;
//               color: red;
//             }
//           `}
//         </style>
//       </React.Fragment>
//     );
//   }
// }

// export default Header;

{
  /* sintak <a></a> dari html berfungsi utk link sbg website MPA multi page
        sintak Link dari next berfungsi mengubah link MPA menjadi SPA
        <a href="/"> Home </a>
        <a href="/about"> about </a>
        <a href="/portofolios"> Portofolios </a>
        <a href="/blogs"> Blog </a>
        <a href="/cv"> Cv </a> 
    */
}

