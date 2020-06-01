import React from 'react'
import classNames from 'classnames'

import HTML from '../img/skill-svgs/html-5.svg'
import CSS from '../img/skill-svgs/css-3.svg'
import BootStrap from '../img/skill-svgs/bootstrap.svg'
import Cplus from '../img/skill-svgs/c-plusplus.svg'
import C from '../img/skill-svgs/c.svg'
import Express from '../img/skill-svgs/express.svg'
import Git from '../img/skill-svgs/git-icon.svg'
import Java from '../img/skill-svgs/java.svg'
import JS from '../img/skill-svgs/javascript.svg'
import JQuery from '../img/skill-svgs/jquery.svg'
import Laravel from '../img/skill-svgs/laravel.svg'
import MUI from '../img/skill-svgs/material-ui.svg'
import MySQL from '../img/skill-svgs/mysql.svg'
import NodeJS from '../img/skill-svgs/nodejs.svg'
import PHP from '../img/skill-svgs/php.svg'
import Postgres from '../img/skill-svgs/postgresql.svg'
import Python from '../img/skill-svgs/python.svg'
import ReactJS from '../img/skill-svgs/react.svg'
import Ruby from '../img/skill-svgs/ruby.svg'
import TS from '../img/skill-svgs/typescript-icon.svg'
import Webpack from '../img/skill-svgs/webpack.svg'

const svgs = [
  [
    {svg: HTML, alt: 'HTML'},
    {svg: CSS, alt: 'CSS'},
    {svg: BootStrap, alt: 'BootStrap'},
    {svg: MUI, alt: 'Material UI'},
    {svg: Webpack, alt: 'Webpack'},
    {svg: JS, alt: 'JavaScript'},
    {svg: JQuery, alt: 'jQuery'},
  ],
  [
    {svg: ReactJS, alt: 'ReactJS'},
    {svg: TS, alt: 'TypeScript'},
    {svg: PHP, alt: 'PHP'},
    {svg: Laravel, alt: 'Laravel'},
    {svg: Ruby, alt: 'Ruby'},
    {svg: NodeJS, alt: 'NodeJS'},
    {svg: Express, alt: 'Express'},
  ],
  [
    {svg: MySQL, alt: 'MySQL'},
    {svg: Postgres, alt: 'PostgreSQL'},
    {svg: C, alt: 'C'},
    {svg: Cplus, alt: 'Cplus'},
    {svg: Java, alt: 'Java'},
    {svg: Python, alt: 'Python'},
    {svg: Git, alt: 'Git'},
  ]
]

class SkillSet extends React.Component {
  render() {
    return (
      <div className={classNames("svgWrapper",this.props.class)}>
        {svgs[this.props.index].map(item => (
          <div className="svgWrap" key={item.alt}>
            <img src={item.svg} alt={item.alt} className="svg" />
          </div>
        ))}
      </div>
    )
  }
}

const SkillBar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeNum: 0,
      activeClass: 'set',
    }
  }

  handleBarNext = () => {
    const nextNum = this.state.activeNum === 2 ? 0 : this.state.activeNum+1
    this.setState({
      activeNum: nextNum,
      activeClass: 'set',
    })
  }

  componentDidMount(){
    setInterval(() => {
      const nextNum = this.state.activeNum === 2 ? 0 : this.state.activeNum+1
      this.setState({
        activeNum: nextNum,
        activeClass: 'set',
      })
    },3000)
  }

  render() {
    return (
      <div className="skillsBarWrap">
        <div className="skillsBar" onClick={this.handleBarNext}>
          <SkillSet index={this.state.activeNum} class={this.state.activeClass}/>
        </div>
      </div>
    )
  }
}

export default SkillBar
