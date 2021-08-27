import "preact/debug"
import StyledResume from 'styled-resume';
import "./example.css"
export function App(props) {
  const myColors = {
    mainColors:{
      accentColor:'#33ded',
      headerPrimaryColor:'#33ed'
    }
  }
  return (
    <div className="example">
        <StyledResume userColors={myColors}/>
    </div>
    
  )
}
