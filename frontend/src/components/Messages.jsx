import React from 'react';
import Message from './Message';
import useGetMessages from '../hooks/useGetMessages';
import { useSelector } from "react-redux";
import useGetRealTimeMessage from '../hooks/useGetRealTimeMessage';

const Messages = () => {
    // Fetch initial messages and subscribe to real-time updates
    useGetMessages();
    useGetRealTimeMessage();

    const { messages } = useSelector(store => store.message) || {}; // Ensure fallback for messages

    return (
        <div className='px-4 flex-1 overflow-auto'>
            {Array.isArray(messages) && messages.length > 0 ? (
                messages.map((message) => (
                    <Message key={message._id} message={message} />
                ))
            ) : (
                <p className="text-center text-gray-400">No messages available.</p> // Empty state
            )}
        </div>
    );
};

export default Messages;
