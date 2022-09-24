import { Link } from "react-router-dom";

export const Page1 = () => {
const arr = [...Array(20).keys()];

    return (
        <div>
            <h1>Page1です</h1>
            <Link to={{ pathname: "/page1/detailA" , state:arr}}>
                DatailA
            </Link>
            <Link to="/page1/detailB">
                DatailB
            </Link>
        </div>
    );
};