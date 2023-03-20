import './App.css';
import Badan from './aps/body';
import Footer from './aps/footer';
import Kepala from './aps/header';


function App() {
  document.body.style = "background : #fac228;"
Badan()

  return (
    <>
    <div className='bg-image'></div>
    <Badan />
    </>
  );
}

export default App;
