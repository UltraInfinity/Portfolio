import React from 'react';
import './BookLoanStats/styles.css'; // Assuming styles.css is the name of your CSS file

const BookLoanDemo = () => {
    // Load the JS after the component mounts
    useEffect(() => {
        const script = document.createElement('script');
        script.src = './BookLoanStats/script.js'; // Assuming script.js is the name of your JS file
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div dangerouslySetInnerHTML={{ __html: /* Your HTML content here */ }} />
    );
}

export default BookLoanDemo;
