import "preact/debug"
import StyledResume from 'styled-resume';

export function App(props) {
  const myColors = {
    mainColors:{
      accentColor:'#33edae',
      headerPrimaryColor:'#33edae'
    }
  }
  return (
      <StyledResume userColors={myColors}/>
  )
}
