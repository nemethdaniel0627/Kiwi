import React from 'react';

export default function Popup(props) {

    var pWrapper = document.getElementById("pWrapper");
    var popup = document.getElementById("popup");
    var poupClick = false;

    if (popup) {
        popup.addEventListener("click", () => {
            // console.log("klikk pop");
            poupClick = true;
        });
    }

    if (pWrapper) {
        pWrapper.addEventListener("click", () => {
            if (!poupClick) {
                // console.log("klikk");
                popup.classList.remove("popupAnim");
                pWrapper.classList.remove("wrapperAnim");
                console.log("popuplog");
            } else poupClick = false;
        });
    }

    function copyText() {        
        navigator.clipboard.writeText(props.content.toString()).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
    }

    function closePopup() {
        popup.classList.remove("popupAnim");
        pWrapper.classList.remove("wrapperAnim");
    }

    return (
        <div className="popup--wrapper" id="pWrapper">
            <div className="popup" id="popup">
                <h2 className="popup--header">
                    {props.header}
                    <button className="popup--close" onClick={closePopup}>
                        <svg aria-hidden="true" focusable="false" dataprefix="fas" dataicon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                            <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                        </svg>
                    </button>
                </h2>
                <div className="popup--content">
                    {props.content}
                    <button className="popup--copy--btn" onClick={copyText}>
                        <svg className="popup--copy" aria-hidden="true" focusable="false" dataprefix="far" dataicon="clipboard" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path fill="currentColor" d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm144 418c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V118c0-3.3 2.7-6 6-6h42v36c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-36h42c3.3 0 6 2.7 6 6z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}