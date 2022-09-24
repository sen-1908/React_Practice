import { useLocation } from "react-router-dom";


export const Page1Detail = () => {
    const location = useLocation();
    console.log(location);

    return (
        <div>
            <h1>Page1DetailPage1です</h1>
            <p>  {location} </p>
        </div>
    );
};