import {Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import Redes from './pages/Redes';
import Kubernets from './pages/Redes/itens/Kubernets';


export default function Ways(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/redes" element={<Redes />} />
            <Route path="/kubernets" element={<Kubernets />} />
        </Routes>
    )
}