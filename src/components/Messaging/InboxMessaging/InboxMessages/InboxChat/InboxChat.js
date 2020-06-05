import React, { Component } from 'react'
import './InboxChat.scss'

class InboxChat extends Component {
    render() {
        return (
            <React.Fragment>
            <div class="msg_history">
                <div class="incoming_msg">
                    <div class="incoming_msg_img"> 
                        <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"></img>
                    </div>
                    <div class="received_msg">
                        <div class="received_withd_msg">
                            <p>Test which is a new approach to have all
                                solutions</p>
                            <span class="time_date"> 11:01 AM    |    June 9</span>
                        </div>
                    </div>
                </div>
                <div class="outgoing_msg">
                    <div class="sent_msg">
                        <p>Test which is a new approach to have all
                        solutions</p>
                        <span class="time_date"> 11:01 AM    |    June 9</span> 
                    </div>
                </div>
                <div class="incoming_msg">
                    <div class="incoming_msg_img"> 
                        <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"></img> 
                    </div>
                    <div class="received_msg">
                        <div class="received_withd_msg">
                            <p>Test, which is a new approach to have</p>
                            <span class="time_date"> 11:01 AM    |    Yesterday</span>
                        </div>
                    </div>
                </div>
                <div class="outgoing_msg">
                    <div class="sent_msg">
                        <p>Apollo University, Delhi, India Test</p>
                        <span class="time_date"> 11:01 AM    |    Today</span> 
                    </div>
                </div>
                <div class="incoming_msg">
                    <div class="incoming_msg_img"> 
                        <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"></img>
                    </div>
                    <div class="received_msg">
                        <div class="received_withd_msg">
                            <p>We work directly with our designers and suppliers,
                                and sell direct to you, which means quality, exclusive
                                products, at a price anyone can afford.</p>
                            <span class="time_date"> 11:01 AM    |    Today</span>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default InboxChat