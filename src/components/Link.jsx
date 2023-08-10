import React from 'react';

const Link = ({ title, to, className, onClick }) => (
    <a className={className} href={to} onClick={onClick}>
        {title}
    </a>
);

export default Link;