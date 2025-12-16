import * as ReactRouterDOM from "react-router-dom";
import App from "./App.tsx";

const { BrowserRouter, StaticRouter } = ReactRouterDOM;

export default ({ pathname }: { pathname: string }) => (
    import.meta.env.SSR
        ? <StaticRouter location={pathname}><App/></StaticRouter>
        : <BrowserRouter basename="/check"><App/></BrowserRouter>
)
