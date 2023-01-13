import Wardrobe from './pages/Wardrobe/index'
import Navbar from './components/Navbar';
import Trends from './pages/Trendy_Styles/index';
import Ajio from './pages/ajio';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Ajio/>}/>
        <Route path='/wardrobe' element={<Wardrobe/>}/>
        <Route path='/trends' element={<Trends/>}/>
      </Routes>
    </>
  );
}

export default App;
