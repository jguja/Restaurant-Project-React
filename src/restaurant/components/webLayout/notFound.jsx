import React from 'react';

const NotFoundPage = () => {
    const notFoundImageUrl = 'https://cdn-icons-png.flaticon.com/512/2748/2748558.png'; 

    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ color: 'black' }}>Oops! Page Not Found</h1>
            <p style={{ color: 'black' }}>The page you are looking for could not be found.</p>
            <img src={notFoundImageUrl} alt="Not Found" style={{ width: '50%', height: 'auto' }} />
        </div>
    );
};

export default NotFoundPage;
