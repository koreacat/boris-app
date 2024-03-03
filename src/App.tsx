import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import IndexPage from './pages';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

reportWebVitals(console.log) ;