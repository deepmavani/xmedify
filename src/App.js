import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/Home/HomePage';
import MainPage from './Pages/MainPage';
import MyBooking from './Pages/MyBooking/MyBooking';
import SearchResult from './Pages/SearchResult/SearchResult';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<HomePage />} />
          <Route path="SearchResult" element={<SearchResult />} />
          <Route path="MyBooking" element={<MyBooking />} />
          <Route path="Home" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
