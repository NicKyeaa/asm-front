import MainLayout from './components/Layout/MainLayout';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}></Route>
      </Routes>
    </div>
  )
}

export default App
