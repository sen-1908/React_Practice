import { CssModules } from "./inLineStyle/CssModules";
import { InLineStyle } from "./inLineStyle/inlineStyle";
import {StyleComponents} from "./inLineStyle/StyleComponents";

export default function App() {
    return (
        <div>
            <InLineStyle />
            <CssModules />
            <StyleComponents />
        </div>      
    );
};