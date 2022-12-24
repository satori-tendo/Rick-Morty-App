import s from './App.module.scss';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import { Route, Routes } from "react-router-dom"
import Home from './components/Categories/Home/Home';
import Welcome from './components/Welcome/Welcome'
import History from './components/Categories/History/History';

function App() {
  return (
    <div className={s.App}>
        <div className={s.container}>
            <Sidebar />
            <Routes>
              <Route path='/' element={<Welcome />}/>
              <Route path='/home' element={<Home />}/>
              <Route path='/history' element={<History />}/>
            </Routes>
        </div>
    </div>
  );
}

export default App;
