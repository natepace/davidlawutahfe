import './App.css';
import { Header } from './components/Header.js'
import { BodyZero } from './components/BodyZero.js'
import { PageEnder } from './components/PageEnder.js'
function App() {
  return (
    <div className="App">
      <Header />
      <BodyZero />
      <PageEnder />
    </div>
  );
}

export default App;
