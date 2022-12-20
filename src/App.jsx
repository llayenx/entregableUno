import { useState } from 'react'
import reactLogo from './assets/react.svg'
import QuoteBox from './componente/QuoteBox'
import quotes from "../src/quotes.json";
import './App.css'

function App() {
  const random = Math.floor(Math.random()* quotes.length)
  const [index, setIndex] = useState(random)

  //const index = 0
  const next = () =>{
    const newRandom = Math.floor(Math.random()* quotes.length)
    setIndex(newRandom)

  }
  const color = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871", "#845EC2", "#008F7A", "#845EC2", "#C34A36","#4B4453" ,"#28839F" , "#926D00", "#C34A36" ]
  const randomColor = Math.floor(Math.random()* color.length)

document.body.style = `Background : ${color[randomColor]}`;

for (var p in document.getElementsByTagName('p')){
  if(!isNaN(p)=== true){
    document.getElementsByTagName('p')[p].style.color = color[randomColor];
  }
}

for (var h in document.getElementsByTagName('h4')){
  if(!isNaN(h)=== true){
    document.getElementsByTagName('h4')[h].style.color = color[randomColor];
  }
}

for (var b in document.getElementsByTagName('button')){
  if(!isNaN(b)=== true){
    document.getElementsByTagName('button')[b].style.backgroundColor = color[randomColor];
  }
}

  return (
    <div className="App">
    <div className="quotes">
    <i className="fa-solid fa-quote-left"></i>
            <p className="phrase"> {quotes[index].quote}</p>
            <h4 className="author">{quotes[index].author}</h4>
            
            <button className='nextbutton' onClick={next}><i className="fa-solid fa-circle-arrow-right"></i></button>
        </div>
    </div>
  )
}

export default App
