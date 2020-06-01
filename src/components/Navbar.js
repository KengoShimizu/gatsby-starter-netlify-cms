import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import qiita from '../img/qiita-icon.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      itemActive: 'portfolio',
      burgerActive: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        burgerActive: !this.state.burgerActive,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.burgerActive
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  componentDidMount(){
    this.setState({
      itemActive: window.location.pathname.slice(1) ? window.location.pathname.slice(1) : 'portfolio'
    })
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/"
                  className={this.state.itemActive === 'portfolio'
                            ? `navbar-item active`
                            : `navbar-item`}
                  title="Logo">
              PortFolio
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link
                className={this.state.itemActive === 'blog'
                          ? `navbar-item active`
                          : `navbar-item`}
                to="/blog">
                Blog
              </Link>
              <Link
                className={this.state.itemActive === 'github'
                          ? `navbar-item active`
                          : `navbar-item`}
                to="/github">
                Github
              </Link>
              <Link
                className={this.state.itemActive === 'qiita'
                          ? `navbar-item active`
                          : `navbar-item`}
                to="/qiita">
                Qiita
              </Link>
              <Link
                className={this.state.itemActive === 'contact'
                          ? `navbar-item active`
                          : `navbar-item`}
                to="/contact">
                Contact
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/KengoShimizu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
              <a
                className="navbar-item"
                href="https://qiita.com/KengoShimizu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={qiita} alt="Qiita" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
