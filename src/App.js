import { Routes, Route }from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetups';
import FavoritesPage from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  // even tho is this in js, u write the HTML code within this function that needs to be output to the browser
  // localhost:3000, path is the part after this
  return <div>
    <MainNavigation/>
    <Routes>
        <Route path="/" element={<AllMeetupsPage/>} />
        <Route path="/new-meetup" element={<NewMeetupsPage/>} />
        <Route path="/favorites" element={<FavoritesPage/>} />
    </Routes>
  </div>; // js functions return html code, smthg vibile on the browser | MAKE SURE when u add class, use className instead of class, standard HTML uses class, this is not exactly html tho since its in js
}

export default App;
