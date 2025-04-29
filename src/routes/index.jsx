import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from '../pages/Start';
import Home from '../pages/Home';
import Outfit from '../pages/Outfit';
import Setting from '../pages/Setting';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={<Home />} />
        <Route path="/outfit" element={<Outfit />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </BrowserRouter>
  );
}
