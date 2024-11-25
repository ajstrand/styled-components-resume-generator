import { render } from 'preact'
import './styles/tokens.css'

import StyledResume from './StyledResume'
//import Test from './Test';
const myColors = {
  mainColors: {
    accentColor: '#33ded',
    headerPrimaryColor: '#33ed'
  }
}
const root = document.getElementById('app')
render(<StyledResume userColors={myColors} />, root)
//render(<Test/>, root)
