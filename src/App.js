import './sass/App.scss';
import HorizontalNav from './components/HorizontalNav';
import VerticalNav from './components/VerticalNav';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <HorizontalNav />
      <VerticalNav />
      <main className="content">
        <Profile />
      </main>
    </div>
  );
}

export default App;
