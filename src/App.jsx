import './App.css'
import Button from './components/Button/Button'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Main2 from './components/Main2/Main2'
import Main3 from './components/Main3/Main3'
import svg1 from "./assets/icons/Icon (3).svg"
import svg2 from "./assets/icons/Icon (4).svg"
import svg3 from "./assets/icons/Icon (5).svg"
import svg4 from "./assets/icons/Icon (6).svg"
import svg5 from "./assets/icons/Icon (7).svg"
import svg6 from "./assets/icons/Icon (8).svg"
import Main4 from './components/Main4/Main4'
import Input from './components/Input/Input'
import Footer from './components/Footer/Footer'
import rrr from "./assets/icons/Logo.png"


function App() {
  const data = [
    {
      id: 1,
      title: "Initial Contact",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      svg: svg1
    },
    {
      id: 2,
      title: "Discovery Session",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      svg: svg2
    },
    {
      id: 3,
      title: "Contracting",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      svg: svg3
    },
    {
      id: 4,
      title: 'Fast Prototyping',
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      svg: svg4
    },
    {
      id: 5,
      title: 'Design Phase',
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      svg: svg5
    },
    {
      id: 6,
      title: 'Develop & Launch',
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      svg: svg6
    },

  ]

  return (
    <div>
      <Header />
      <Main />
      <Main2 />
      <Main3 />
      <div className='buttonss'>
        {
          data.map((item) => (
            <Button key={item.id} title={item.title} text={item.text} svg={item.svg} />
          ))
        }
      </div>
      <Main4 />
      <Input />
      <Footer />
     

    </div>

  )
}

export default App


