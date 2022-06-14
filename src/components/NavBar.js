import { Icon } from "@iconify/react";
import React from "react";
import {Link} from "react-router-dom";

export default function NavBar() {
    return (
        <div className="navbar">
            <ul>
            <Icon icon="line-md:home-md-twotone" />
                <Link className="link" to="/">Home</Link>
            </ul>
        </div>
    )
}