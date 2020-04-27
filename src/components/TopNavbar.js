import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      itemActive: '',
    }
  }

  render() {
    return (
      <nav
        className="is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="topnavbar">
          <div className="has-text-centered">
            <AnchorLink className="topnavbar-item" href="#profile" offset="50">
              Profile
            </AnchorLink>
            <AnchorLink className="topnavbar-item" href="#skills" offset="50">
              Skills
            </AnchorLink>
            <AnchorLink className="topnavbar-item" href="#works" offset="50">
              Works
            </AnchorLink>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
