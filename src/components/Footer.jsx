import React from 'react';

export default function Footer(props) {

    function showPopupLinked() {
        props.showPopup("Phone", "+36301234567");
    }

    function showPopupEmail() {
        props.showPopup("Email", "nem@gmail.com")
    }

    return (
        <footer>
            <h3 className="footer--header">Contact Us!</h3>
            <div className="footer--shape">
                <div className="footer--shape--line"></div>
                <div className="footer--shape--circle"></div>
                <div className="footer--shape--line"></div>
            </div>
            <div className="footer--social Amatic">
                <div className="footer--social--container footer--social--container--right">
                    {/* eslint-disable-next-line*/}
                    <a target="_blank" useref="noopener noreferrer" href={props.twitterHref} className="footer--social--links footer--social--twitter">
                        <svg className="footer--social--twitter--logo footer--social--logos" width="28" height="23" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.1218 5.66748C25.1396 5.9162 25.1396 6.16498 25.1396 6.41369C25.1396 13.9999 19.3655 22.7411 8.81218 22.7411C5.5609 22.7411 2.54062 21.7994 0 20.165C0.461945 20.2182 0.906062 20.236 1.38578 20.236C4.06848 20.236 6.53805 19.33 8.51014 17.7843C5.9873 17.7309 3.87308 16.0787 3.14464 13.8045C3.5 13.8578 3.8553 13.8934 4.22844 13.8934C4.74365 13.8934 5.25891 13.8223 5.73858 13.698C3.10915 13.1649 1.13701 10.8553 1.13701 8.06597V7.99493C1.90094 8.42133 2.78934 8.68782 3.73089 8.72331C2.1852 7.69284 1.17255 5.93398 1.17255 3.94412C1.17255 2.87815 1.45677 1.90099 1.95426 1.0482C4.77914 4.53042 9.02535 6.80449 13.7867 7.05327C13.6979 6.62687 13.6446 6.18275 13.6446 5.73858C13.6446 2.57611 16.203 0 19.3832 0C21.0354 0 22.5278 0.692891 23.5761 1.81218C24.873 1.56346 26.1166 1.08374 27.2182 0.426398C26.7917 1.75891 25.8857 2.8782 24.6953 3.58881C25.8502 3.46451 26.9695 3.14464 27.9999 2.70052C27.2183 3.83753 26.2411 4.85018 25.1218 5.66748Z" fill="#1DA1F2" />
                        </svg>
                    Twitter
                </a>
                    {/* eslint-disable-next-line*/}
                    <a target="_blank" useref="noopener noreferrer" href={props.instaHref} className="footer--social--links footer--social--insta">
                        <svg className="footer--social--insta--logo footer--social--logos" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.65855 0H21.342C26.1051 0 30 3.84678 30 8.54623V21.1954C30 25.8959 26.105 29.7414 21.3422 29.7414L8.65855 29.7412C3.89547 29.7412 0 25.8957 0 21.1952V8.54605C0 3.84678 3.89547 0 8.65855 0ZM14.9192 6.84082C19.5477 6.84082 23.3035 10.5967 23.3035 15.2251C23.3035 19.8541 19.5477 23.6095 14.9192 23.6095C10.2895 23.6095 6.53419 19.8541 6.53419 15.2251C6.53419 10.5967 10.2895 6.84082 14.9192 6.84082ZM14.9192 9.67285C17.9842 9.67285 20.4717 12.1598 20.4717 15.2253C20.4717 18.2908 17.9841 20.7783 14.9192 20.7783C11.8532 20.7783 9.36613 18.2908 9.36613 15.2253C9.36613 12.1598 11.8532 9.67285 14.9192 9.67285ZM23.0308 5.67883C23.7826 5.67883 24.3923 6.28849 24.3923 7.03963C24.3923 7.79149 23.7826 8.40115 23.0308 8.40115C22.2794 8.40115 21.67 7.79149 21.67 7.03963C21.67 6.28831 22.2796 5.67883 23.0308 5.67883ZM9.69499 2.42946H20.3066C24.2912 2.42946 27.55 5.67208 27.55 9.63478V20.2995C27.55 24.262 24.2912 27.5041 20.3066 27.5041L9.69499 27.5043C5.71042 27.5043 2.45106 24.2622 2.45106 20.2997V9.6346C2.45106 5.67208 5.71042 2.42946 9.69499 2.42946Z" fill="url(#paint0_linear)" />
                            <defs>
                                <linearGradient id="paint0_linear" x1="17" y1="34.5" x2="6" y2="1.5" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.0739509" stopColor="#FEDA77" />
                                    <stop offset="0.279943" stopColor="#F58529" />
                                    <stop offset="0.582309" stopColor="#DD2A7B" />
                                    <stop offset="0.766354" stopColor="#8134AF" />
                                    <stop offset="1" stopColor="#515BD4" />
                                </linearGradient>
                            </defs>
                        </svg>
                    Instagram
                </a>
                </div>
                <div className="footer--social--container footer--social--container--left">
                    <div onClick={showPopupEmail} className="footer--social--links footer--social--email">
                        {props.email}
                        <svg className="footer--social--email--logo footer--social--logos" width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.375 0H2.625C1.17523 0 0 1.17523 0 2.625V18.375C0 19.8248 1.17523 21 2.625 21H25.375C26.8248 21 28 19.8248 28 18.375V2.625C28 1.17523 26.8248 0 25.375 0ZM25.375 2.625V4.85652C24.1488 5.85506 22.1939 7.40775 18.0148 10.6802C17.0938 11.4046 15.2694 13.1451 14 13.1248C12.7308 13.1453 10.9058 11.4044 9.98523 10.6802C5.80672 7.40824 3.85137 5.85523 2.625 4.85652V2.625H14H25.375ZM2.625 18.375V8.22489C3.87811 9.22299 5.65518 10.6236 8.3638 12.7446C9.5591 13.6855 11.6524 15.7626 14 15.7499C16.3361 15.7626 18.4028 13.7156 19.6357 12.745C22.3443 10.6241 24.1218 9.2231 25.375 8.22495V18.375H2.625Z" fill="#CDB30C" />
                        </svg>
                    </div>
                    <div onClick={showPopupLinked} className="footer--social--links footer--social--phone">
                        {props.linkedIn}
                        <svg className="footer--social--phone--logo footer--social--logos" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.019 1.2971L20.5346 0.0314785C19.9387 -0.105631 19.327 0.205502 19.0844 0.764486L16.5531 6.67074C16.3317 7.18753 16.4793 7.79398 16.917 8.1473L20.1127 10.7629C18.2143 14.8077 14.8973 18.1721 10.7682 20.1075L8.15256 16.9118C7.79396 16.4741 7.19279 16.3264 6.67599 16.5479L0.769739 19.0791C0.205481 19.327 -0.105652 19.9387 0.0314575 20.5346L1.29708 26.019C1.42892 26.5885 1.93517 26.9998 2.53107 26.9998C16.0364 26.9998 26.9998 16.0575 26.9998 2.53109C26.9998 1.94046 26.5938 1.42894 26.019 1.2971Z" fill="#CDB30C" />
                        </svg>
                    </div>
                </div>
            </div>
        </footer>
    );
}