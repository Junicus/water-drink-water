import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="h-screen w-64 bg-amber-200 p-4">
            <ul className="flex flex-col gap-y-2">
                <li><Link to="/wdw">Home</Link></li>
                <li><Link to="/wdw/logConsumption">Log Consumption</Link></li>
                <li><Link to="/ogout">Log Out</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar
