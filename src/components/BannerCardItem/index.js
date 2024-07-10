// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {Banner} = props
  const {headertext, descrpition, text} = Banner
  return (
    <div className="card">
      <h1>{headertext}</h1>
      <p>{descrpition}</p>
      <p>{text}</p>
    </div>
  )
}
export default BannerCardItem
