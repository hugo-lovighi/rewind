import "./App.css";
import './i18n';
import { Button } from "@/components/button/Button";
import { Button2 } from "@/components/button/Button2";

function App() {
    return (
        <div className="App">
            <Button isLoading>Test</Button>
            <Button2 isLoading>Test</Button2>
        </div>
    );
}

export default App;
