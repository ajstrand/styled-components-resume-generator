import "preact/debug"
import { Logo } from './logo'
import {StyledResume} from 'styled-resume';

export function App(props) {
  return (
    <>
      <p>Hello Vite + Preact!</p>
      <StyledResume text={"from preact"}/>
    </>
  )
}
