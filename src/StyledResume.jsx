import { useState, useEffect } from 'preact/hooks'
import ResumeContent from './components/ResumeContent.jsx'
//import defaultResumeDataObj from './components/defaultResumeDataTemplate'
import defaultResumeDataObj from './components/myResumeData'
import PropTypes, { string } from 'prop-types'
import './styles/tokens.css'

//TODO: fix me stackoverflow
const copyColor = (theme, userColors) => {
  if (userColors) {
    let propsToFind = ['accentColor', 'headerPrimaryColor']
    for (let key in theme) {
      let newKey = userColors[key]
      let old = theme[key]
      propsToFind.forEach((el) => {
        if (old[el] && newKey[el] !== undefined) {
          theme[key][el] = newKey[el]
        }
      })
    }
  }

  return theme
}

const StyledResume = (props) => {
  const { config, userColors } = props
  const [localTheme, setTheme] = useState(props.userColors)
  const [data, setData] = useState(defaultResumeDataObj)

  useEffect(() => {
    setData(config ? config : data)
    // let's copy all user properties into it
    //let res = copyColor(theme, userColors)
    //setTheme(res)
  }, [localTheme])

  return <ResumeContent config={data} userColors={localTheme} />
}

StyledResume.propTypes = {
  config: PropTypes.shape({
    header: PropTypes.shape({
      name: PropTypes.string.isRequired,
      site: PropTypes.string,
      emailLinkValue: PropTypes.string.isRequired,
      emailLabel: PropTypes.string.isRequired,
      phone: PropTypes.string
    }),
    //TODO: support various education types in props
    education: PropTypes.arrayOf(
      PropTypes.shape({
        college: PropTypes.shape({
          name: PropTypes.string,
          programOrDegree: PropTypes.string,
          dateRange: PropTypes.string
        }),
        bootcamp: PropTypes.shape({
          name: PropTypes.string,
          programOrDegree: PropTypes.string,
          dateRange: PropTypes.string
        })
      })
    ),
    experience: PropTypes.arrayOf(
      PropTypes.shape({
        companyName: PropTypes.string.isRequired,
        dateRange: PropTypes.string.isRequired,
        jobTitle: PropTypes.string.isRequired,
        jobDescription: PropTypes.arrayOf(
          PropTypes.shape({
            text: PropTypes.string.isRequired
          })
        )
      })
    ),
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        dateRange: PropTypes.string,
        title: PropTypes.string,
        desc: PropTypes.string
      })
    ),
    skills: PropTypes.arrayOf(string)
  })
}

export default StyledResume
