import MainLayout from './components/Layout/MainLayout';
import AssetsPage from './pages/AssetsPage/AssetsPage';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}></Route>
        <Route path="/assets" element={<AssetsPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
