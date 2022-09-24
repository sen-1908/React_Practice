import {Page1} from "../Page1";
import {Page1Detail } from "../Page1Detail";
import {Page2Detail} from "../Page2Detail"


export const Page1Routes = [
    {
        path: "/",
        exact: true,
        Children: <Page1 />
    },
    {
        path: "/",
        exact: true,
        Children: <Page1Detail />
    },
    {
        path: "/",
        exact: true,
        Children: <Page2Detail />
    },
  
];