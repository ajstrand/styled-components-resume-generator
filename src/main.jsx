import { render } from 'preact'
import './index.css'
import StyledResume from './StyledResume';
const myColors = {
    mainColors:{
      accentColor:'#33ded',
      headerPrimaryColor:'#33ed'
    },
  }
render(<StyledResume userColors={myColors} />, document.getElementById('app'))
