import { createRoot } from 'react-dom/client'
import { Vimu } from './threejs/Vimu.jsx'

function App() {
    return (
        <div id="canvas-container">
            <Vimu />
        </div>
    )
}

export default App