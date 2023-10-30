// Import react dependencies
import { useState, useEffect } from 'react';

// Import the 'arrow-top' image from the specified file path.
import arrowTop from '../assets/img/arrow-top.svg'

/* 
    ScrollUpButton moves the user back to the top. 
    It only appears when user has scrolled down a bit.
*/
function ScrollUpButton() {

    const scrollToSelector = '#character-grid-container';
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        function checkScrollPosition() {
            const scrollPosition = window.scrollY;

            // Adjust this value as needed to control when the button appears
            if (scrollPosition > 100) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        }

        window.addEventListener('scroll', checkScrollPosition);

        return () => {
            window.removeEventListener('scroll', checkScrollPosition);
        };
    }, []);

    function goToTop () {
        const targetElement = document.querySelector(scrollToSelector);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
            });
        }
    }

    return (
        <>
            {/* The goToTop button only appears when the user scrolls down */}
            {showButton && (
                <a 
                    id="go-to-top-btn" 
                    onClick={goToTop}
                >
                    <img src={arrowTop} alt="Go to top"/>
                </a>
            )}
        </>
    )
}

export default ScrollUpButton