import Typography from '@material-ui/core/Typography';
import React from "react";
import { Link } from "react-router-dom";
import "./Details.css";


const BackToHome = () => {
    return (
        <Typography style={{ cursor: "pointer", width: "max-content" }}
            gutterBottom={true}
        >
            <Link to="/">{"< Back to Home"}</Link>
        </Typography>
    )
}

export default BackToHome;