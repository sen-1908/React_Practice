import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";


export const Page2Routes = [
    {
        path: "/",
        exact: true,
        Children: <Page2 />
    },
    {
        path: "/:id",
        exact: true,
        Children: <UrlParameter />
    },
  
];