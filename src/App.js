import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar></Navbar>
                <div className="body">
                    <Routes>

                    </Routes>
                </div>
                <Footer></Footer>
            </div>
        </BrowserRouter>

    );
}


export default App;