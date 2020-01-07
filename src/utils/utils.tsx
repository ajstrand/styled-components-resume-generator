import wInfoStyleJson from "./styles.json";
export const wInfo = (text: string) : any => {
  const tt = {info:{ inline: true, source: false, styles: wInfoStyleJson, text: text }}
  return tt;
}
