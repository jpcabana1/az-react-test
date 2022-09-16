import logo from './logo.svg'
import './App.css'
import React from 'react'

function App() {
  const [mensagem, setMensagem] = React.useState('Carregando...');

  React.useEffect(() => {
    fetch('https://az-test-dotnet.azurewebsites.net/hello')
      .then((res) => res.text())
      .then((resp) => {
        setMensagem(resp)
        console.log(mensagem);
      })
      .catch((err) => {
        setMensagem('Erro: ' + err.message)
        console.log(mensagem);
      })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Azure API: {mensagem}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
