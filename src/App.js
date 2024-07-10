import BannerCardItem from './components/BannerCardItem'

import './App.css'

const BannerList = [
  {
    cardNo: 1,
    headertext: 'the session List',
    descrpition: 'get the session all the latest designing to now of you hard',
    text: 'showmore',
  },
  {
    cardNo: 2,
    headertext: 'the session List',
    descrpition: 'get the session all the latest designing to now of you hard',
    text: 'showmore',
  },
  {
    cardNo: 3,
    headertext: 'the session List',
    descrpition: 'get the session all the latest designing to now of you hard',
    text: 'showmore',
  },
]
const App = () => (
  <ul>
    {BannerList.map(eachItem => (
      <BannerCardItem Banner={eachItem} key={eachItem.cardNo} />
    ))}
  </ul>
)
export default App
