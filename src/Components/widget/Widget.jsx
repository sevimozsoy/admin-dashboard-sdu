import React from 'react'
import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import GroupIcon from "@mui/icons-material/Group";
import BugReportIcon from '@mui/icons-material/BugReport';
import DoneIcon from '@mui/icons-material/Done';

const Widget = ({ type }) => {

    let data;

    switch (type) {

        case "user":
            data = {
                title: "USERS",
                link: "See all users",
                icon: <GroupIcon className='icon' />
            };
            break;

        case "issue":
            data = {
                title: "ISSUES",
                counter: 1111,
                link: "See new bug reports",
                icon: <BugReportIcon className='icon' />
            };
            break;

        case "closedIssues":
            data = {
                title: "CLOSED ISSUES",
                counter: 2222,
                link: "See closed bug reports",
                icon: <DoneIcon className='icon' />
            };
            break;

        default:
            break;
    }

    return (
        <div className='widget'>
            <div className="left">
                <span className="title">{data.title}</span>
                {type !== "users" && <span className="counter">{data.counter}</span>}
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />20%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget;