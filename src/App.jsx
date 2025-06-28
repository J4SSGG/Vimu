import { ConfigProvider, theme } from "antd";
import { Vimu } from './threejs/Vimu.jsx'
import { VimuLayout } from './ui/Layout.jsx'
function App() {
    return (
        <ConfigProvider theme={{
            algorithm: theme.darkAlgorithm
        }}>
            <VimuLayout>
                <Vimu />
            </VimuLayout>
        </ConfigProvider>
    )
}

export default App