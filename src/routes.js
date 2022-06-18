import {Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import Redes from './pages/Redes';
import Kubernets from './pages/Redes/itens/Kubernets';
import Vpn from './pages/Redes/itens/Vpn';
import Ip from './pages/Redes/itens/Ip';

import Hardware from './pages/Hardware';
import Cpu from './pages/Hardware/itens/Cpu';
import Ram from './pages/Hardware/itens/Ram';
import Storage from './pages/Hardware/itens/Storage';

import Governanca from './pages/Governanca';
import Mpsbr from './pages/Governanca/itens/Mpsbr';
import Xp from './pages/Governanca/itens/Xp';
import Scrum from './pages/Governanca/itens/Scrum';

import Cybersecurity from './pages/Cybersecurity';
import Cobit from './pages/Cybersecurity/itens/Cobit';
import Iso27001 from './pages/Cybersecurity/itens/Iso27001';
import Lgpd from './pages/Cybersecurity/itens/Lgpd';


export default function Ways(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/redes" element={<Redes />} />
            <Route path="/kubernets" element={<Kubernets />} />
            <Route path="/vpn" element={<Vpn />} />
            <Route path="/ip" element={<Ip />} />

            <Route path="/hardware" element={<Hardware />} />
            <Route path="/cpu" element={<Cpu />} />
            <Route path="/ram" element={<Ram />} />
            <Route path="/storage" element={<Storage />} />
            
            <Route path="/governanca" element={<Governanca />} />
            <Route path="/mpsbr" element={<Mpsbr />} />
            <Route path="/xp" element={<Xp />} />
            <Route path="/scrum" element={<Scrum />} />

            <Route path="/cybersecurity" element={<Cybersecurity />} />
            <Route path="/cobit" element={<Cobit />} />
            <Route path="/iso27001" element={<Iso27001 />} />
            <Route path="/lgpb" element={<Lgpd />} />
        </Routes>
    )
}