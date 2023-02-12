import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "A comment"
    },
    {
        id: 2,
        message: "B comment"
    },
    {
        id:3,
        message: "C comment"
    },
];

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: [],
        };
    }

    componentDidMount() {
        const {notifications } =this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            } else {
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    render() {
        return(
            <div>
                {this.state.notifications.map((notifications) => {
                    return <Notification key={notifications.id} id={notifications.id} message={notifications.message} />;
                })}
            </div>
        );
    }
}

export default NotificationList;