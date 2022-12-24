import s from './App.module.scss';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Main from './components/Main/Main';

function App() {
  return (
    <div className={s.App}>
        <div className={s.container}>
            <Sidebar />
            <Main />
        </div>
    </div>
  );
}

export default App;
