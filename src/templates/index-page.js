import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import TopNavbar from '../components/TopNavbar'
import SkillBar from '../components/SkillBar'
import Portfolio from '../img/works-imgs/portfolio.png'
import Archer from '../img/works-imgs/archer.png'

const skill_web = [
  {
    title: 'Webデザイン・コーディング',
    subtitle: ['技術', '経験年数', 'レベル'],
    elements: [
      {
        skill: 'HTML',
        experience: '1年',
        level: <React.Fragment>★★★★★</React.Fragment>
      },
      {
        skill: 'CSS',
        experience: '1年',
        level: <React.Fragment>★★★★<span>★</span></React.Fragment>
      }
    ]
  }
]

const skill = [
  [
    {
      title: 'フロントエンド',
      subtitle: ['技術', '経験年数', 'レベル'],
      elements: [
        {
          skill: 'JavaScript',
          experience: '1年',
          level: <React.Fragment>★★★★★</React.Fragment>
        },
        {
          skill: 'jQuery',
          experience: '半年',
          level: <React.Fragment>★★★★★</React.Fragment>
        },
        {
          skill: 'ReactJS',
          experience: '半年',
          level: <React.Fragment>★★★★<span>★</span></React.Fragment>
        },
        {
          skill: 'TypeScript',
          experience: '半年',
          level: <React.Fragment>★★★<span>★★</span></React.Fragment>
        }
      ]
    },
    {
      title: 'バックエンド',
      subtitle: ['技術', '経験年数', 'レベル'],
      elements: [
        {
          skill: 'PHP',
          experience: '半年',
          level: <React.Fragment>★★★★<span>★</span></React.Fragment>
        },
        {
          skill: 'Ruby',
          experience: '半年',
          level: <React.Fragment>★★★★<span>★</span></React.Fragment>
        },
        {
          skill: 'NodeJS',
          experience: '半年',
          level: <React.Fragment>★★★★<span>★</span></React.Fragment>
        }
      ]
    }
  ],
  [
    {
      title: 'DB',
      subtitle: ['技術', '経験年数', 'レベル'],
      elements: [
        {
          skill: 'MySQL',
          experience: '1年',
          level: <React.Fragment>★★★★<span>★</span></React.Fragment>
        },
        {
          skill: 'Postgres',
          experience: '半年',
          level: <React.Fragment>★★★<span>★★</span></React.Fragment>
        }
      ]
    },
    {
      title: 'その他',
      subtitle: ['技術', '経験年数', 'レベル'],
      elements: [
        {
          skill: 'C',
          experience: '半年',
          level: <React.Fragment>★★★★<span>★</span></React.Fragment>
        },
        {
          skill: 'C++',
          experience: '半年',
          level: <React.Fragment>★★<span>★★★</span></React.Fragment>
        },
        {
          skill: 'Java',
          experience: '半年',
          level: <React.Fragment>★★★★★</React.Fragment>
        },{
          skill: 'Python',
          experience: '半年',
          level: <React.Fragment>★★★★<span>★</span></React.Fragment>
        },{
          skill: 'git',
          experience: '半年',
          level: <React.Fragment>★★★★<span>★</span></React.Fragment>
        },
      ]
    }
  ]
]


const worklist = [
  [
    {
      title: 'ポートフォリオ',
      imgsrc: Portfolio,
      href: 'sample',
      descri: 'このページです。ReactJSのGatsbyを使って開発しています。'
    },
    {
      title: 'マルチプレイ募集掲示板',
      imgsrc: Archer,
      href: 'https://archer-duo.herokuapp.com/',
      descri: 'スマホゲーム「アーチャー伝説」内のマルチプレイ募集用掲示板です。ReactJS、Expressで開発しDBにはMySQLを使用しherokuサーバでデプロイしています。月間PVは約10万にのぼります。'
    }
  ]
]


export const IndexPageTemplate = ({
  image,
  title,
  heading,
  profile,
  skills,
  works,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >

      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
      </div>
    </div>
    <TopNavbar />
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h2 className="title" id="profile" style={{margin: '0 auto 30px'}}>{profile.title}</h2>
                  </div>
                  <div className="columns">
                    <div className="column is-6 has-text-centered">
                      <div
                        className="margin-top-0"
                        style={{
                          backgroundImage: `url(${
                            !!profile.image.childImageSharp ? profile.image.childImageSharp.fluid.src : profile.image
                          })`,
                          backgroundPosition: `top left`,
                          backgroundRepeat: 'no-repeat',
                          width: '300px',
                          height: '300px',
                          borderRadius: '50%',
                          margin: '0 auto'
                        }}
                      />
                    </div>
                    <div className="column is-6">
                      <div className="tile">
                        <h3 className="subtitle">はじめまして。現在、神戸大学大学院2年のけんご（<a href="https://twitter.com/kengoPman" >@kengoPman</a>）と申します。
                        <br/>{profile.description1}<br/>{profile.description2}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="tile">
                    <h2 className="title" id="skills" style={{margin: '0 auto 30px'}}>{skills.title}</h2>
                  </div>
                  <SkillBar />
                  <div className="skillWrapper">
                    {skill_web.map(item => (
                      <div className="skill">
                        <h3>{item.title}</h3>
                        <div className="flexWrapper">
                          <div className="element">{item.subtitle[0]}</div>
                          <div className="element">{item.subtitle[1]}</div>
                          <div className="element">{item.subtitle[2]}</div>
                        </div>
                        {item.elements.map(element => (
                            <div className="flexWrapper">
                              <div className="element">{element.skill}</div>
                              <div className="element">{element.experience}</div>
                              <div className="element starRate">{element.level}</div>
                            </div>
                        ))}
                      </div>
                    ))}
                  </div>
                  {skill.map(array => (
                    <div className="skillWrapperFlex">
                      {array.map(item => (
                        <div className="skill">
                          <h3>{item.title}</h3>
                          <div className="flexWrapper">
                            <div className="element">{item.subtitle[0]}</div>
                            <div className="element">{item.subtitle[1]}</div>
                            <div className="element">{item.subtitle[2]}</div>
                          </div>
                          {item.elements.map(element => (
                            <div className="flexWrapper">
                              <div className="element">{element.skill}</div>
                              <div className="element">{element.experience}</div>
                              <div className="element starRate">{element.level}</div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
                  <div className="tile">
                    <h2 className="title" id="works" style={{margin: '0 auto 30px'}}>{works.title}</h2>
                  </div>
                  {worklist.map(array => (
                    <div className="workWrapperFlex">
                      {array.map(item => (
                        <div className="work">
                          <a className="worktitle" href={item.href}>{item.title}</a>
                          <div className="workimgWrap">
                            <img src={item.imgsrc} alt={item.title} className="work-img" />
                          </div>
                          <div className="workdescri">{item.descri}</div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  profile: PropTypes.object,
  skills: PropTypes.object,
  works: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        profile={frontmatter.profile}
        skills={frontmatter.skills}
        works={frontmatter.works}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        profile {
          title
          description1
          description2
          image {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        skills {
          title
        }
        works {
          title
        }
      }
    }
  }
`
