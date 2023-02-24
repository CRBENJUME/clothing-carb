import { Outlet } from "react-router-dom";
import Directory from "../../components/directory";

export default function Home () {
    return (
        <>
            <Directory/>
            <Outlet></Outlet>
        </>
    )
}