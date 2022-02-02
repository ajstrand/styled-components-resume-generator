import render from "preact-render-to-string"
import Test from './Test';

export function serverRender(url, context) {
  return render(
      <Test />
  )
}