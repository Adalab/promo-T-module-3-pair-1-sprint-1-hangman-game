import { useEffect, useState } from 'react';
import '../styles/components/App.scss'

const handleInputSearch = (ev)=>{
  SetFraseSearch (ev.target.value);
};

const handleInputSearch = (ev)=>{
  SetcharacterSearch (ev.target.value);
};



function App() {
  const [ frasesList, setFrasesList] =useState ([]);
useEffect(() => {
  fetch('https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json')
  .then((response) => response.json())
      .then((data) => {
        const frases = data.map((eachFrases)=>{
          return {
            Frases : eachFrases.frases,
            character : eachFrases.character
          }
        });
        setFrasesList(frases);
        });
      },[]);
  /* RETURN --> HTML */
  const renderfrasesList = () => {
    const filteredList = frasesList.filter()

  return frasesList.map((eachFrases)=>(
    <li key={eachFrases.frases}>
      <div className='quotes'>
      <p>{eachFrases.frases}</p><p className='name'>-{eachFrases.character}</p></div>
    </li>
  ))};
  return(
  <body>
  <h1>Frases de Friends</h1>
  <form>
  <label>Filtrar por frase</label>
  <input type= 'text' name ='' placeholder='' autoCompete='off' value={fraseSearch} onInput={handleInputSearch}/>
  <label>Filtrar por personaje</label>
  <input type= 'text' name ='' placeholder='' value={characterSearch} onInput={handleInputSearch}/>
  </form>
  <ul>
    <li>
      <p>{renderfrasesList()}</p>
    </li>
  </ul>
  </body>
);}

const [fraseSearch, SetfraseSearch] = useState('');
const [characterSearch, SetcharacterSearch] = useState('');

export default App;
