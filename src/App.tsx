import './input.css'


import logoIMg from './assets/Logo.svg';
import Game from './components/Games';
import Publicar from './components/Publicar';

function App() {
    return( 
      <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
            <img src={logoIMg} alt="logo nlw eSports"/>
            <h1 className='text-6xl text-white font-black mt-20' >
              Seu 
                <span className='text-transparent bg-nlw-gradient bg-clip-text '> duo </span> 
              está aqui.
            </h1>
            <Game />
            <Publicar />
        </div>
      )
}

export default App
