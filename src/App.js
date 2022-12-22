import s from './App.module.scss';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className={s.App}>
        <div className={s.container}>
            <Sidebar />
        </div>
    </div>
  );
}

export default App;
