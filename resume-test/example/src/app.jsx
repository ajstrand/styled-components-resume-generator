import "preact/debug"
import StyledResume from 'styled-resume';
import "./example.css"
export function App(props) {
  const myColors = {
    mainColors:{
      accentColor:'#33edae',
      headerPrimaryColor:'#33edae'
    }
  }
  return (
    <div className="example">
        <StyledResume userColors={myColors}/>
    </div>
    
  )
}
