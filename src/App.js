
import './App.scss';
import Benefit from './components/Benefit/Index';
import CheeseSlickCont from './components/CheeseSlick/CheeseSlickCont';
import Header from './components/Header';
import SlickContainner from './components/ImageSlick/SlickContainner';
import Login from './components/Login';

function App() {
  return (
    <div className="main-container">
      <Header />
      <SlickContainner />
      <Benefit />
      <CheeseSlickCont />
      <Login />
    </div>
  );
}

export default App;
