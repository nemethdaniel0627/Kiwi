import React, { useEffect, useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Footer from './Footer';
import Popup from "./Popup";
import justphone from "../images/justphone.png"
import phone_hand from "../images/phone_hand.png"

export default function Home() {

    const [NewPopup, setNewPopup] = useState({        
        title: "",
        content: ""
    });    

    function showPopup(title, content) {
        var pWrapper = document.getElementById("pWrapper");
        var popup = document.getElementById("popup");
        console.log("homelog");

        if (pWrapper) pWrapper.classList.toggle("wrapperAnim");
        if (popup) popup.classList.toggle("popupAnim");

        setNewPopup({title: title, content: content});

        console.log(title, content);

        // return (
        //     <Popup show={show} content={content} />
        // )

    }

    // function doShow() {
    //     return NewPopup.show ? <Popup header={NewPopup.title} content={NewPopup.content} /> : <i/>;
    // }

    useEffect(() => {
        // doShow();
    }, [NewPopup])

    return (
        <ReactFullpage
            //fullpage options
            licenseKey={process.env.REACT_APP_FP_LICENCE_KEY}
            scrollingSpeed={1000}
            responsiveWidth= {1}
            responsiveHeight= {1}
            onLeave={function onLeave(origin, destination, direction) {
                if (destination.item.className.includes("section--second")) {
                    var inVisibles = document.getElementsByClassName("invisible");
                    var visible = 1;
                    for (let i = 0; i < inVisibles.length; i++) {
                        inVisibles[i].classList.value = "visible visible--" + visible;
                        visible++
                    }
                    inVisibles = document.getElementsByClassName("invisible");
                    for (let i = 0; i < inVisibles.length; i++) {
                        inVisibles[i].classList.value = "visible visible--" + visible;
                        visible++
                    }
                    inVisibles = document.getElementsByClassName("invisible");
                    for (let i = 0; i < inVisibles.length; i++) {
                        inVisibles[i].classList.value = "visible visible--" + visible;
                        visible++
                    }                    
                    // document.getElementById("fullpage").classList.toggle("fullpage--2");
                    document.getElementById("fullpage").style.transform = "translate3d(0px,-700px,0px)";
                    console.log("asd");
                }
                if (destination.item.className.includes("section--third") && origin.item.className.includes("section--second")) {
                    let phone = document.getElementById("movingPhone");
                    // phone.classList.toggle("phoneUp");
                    if (phone.classList.toString().includes("phoneUp")) phone.classList.toggle("phoneUp");
                    phone.classList.toggle("phoneDown");
                    // document.getElementById("fullpage").classList.toggle("fullpage--2");
                    // document.getElementById("fullpage").classList.toggle("fullpage--3");
                }
                if (destination.item.className.includes("section--second") && origin.item.className.includes("section--third")) {
                    let phone = document.getElementById("movingPhone");
                    phone.classList.toggle("phoneDown");
                    phone.classList.toggle("phoneUp");
                    // document.getElementById("fullpage").classList.toggle("fullpage--3");
                    // document.getElementById("fullpage").classList.toggle("fullpage--2");
                    
                }
                if (destination.item.className.includes("section--first")) {
                    // document.getElementById("fullpage").classList.toggle("fullpage--1");
                    // document.getElementById("fullpage").classList.toggle("fullpage--2");
                }
            }}

            render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div className="section section--first">
                            <div className="home--container">
                                <h2 className="home--h2">
                                    THE BEST PRODUCTS FOR THE BEST PRICES
                                    </h2>
                                <h1 className="home--h1">
                                    MEET <span className="small-h1">THE</span> NEW <span className="Amatic">Kiwi PRO</span>
                                    {/* <button onClick={le}>Lefele</button> */}
                                </h1>
                            </div>
                            <img id="kep" className="home--phone" src={phone_hand} alt="Phone" />
                        </div>
                        <div className="section section--second" id="secondSec">
                            {/* <div id="two"></div> */}
                            <div className="specs--container">
                                <div className="specs--phone">
                                    <img id="movingPhone" className="specs--phone--img" src={justphone} alt="Phone" />
                                    <div className="invisible">{/*  finger */}
                                        <div className="specs--point specs--finger--point">
                                            <svg className="specs--finger" width="30" height="29" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.8819 14.8242C10.849 14.5774 10.6203 14.4036 10.3753 14.4387C10.1289 14.4716 9.95649 14.6986 9.98979 14.9453C10.4658 18.4569 9.19858 22.0046 6.60067 24.4349C6.41918 24.6047 6.40974 24.8898 6.57993 25.0717C6.66821 25.1662 6.78795 25.2139 6.90864 25.2139C7.01899 25.2139 7.12928 25.1739 7.2162 25.0924C10.0267 22.463 11.3971 18.6245 10.8819 14.8242Z" fill="white" />
                                                <path d="M4.35634 15.3502C4.35185 15.329 4.34599 15.3087 4.33876 15.2885C4.24779 14.821 4.19243 14.346 4.17259 13.8749C4.16266 13.6264 3.95015 13.435 3.70423 13.4435C3.45568 13.4534 3.26248 13.6633 3.27282 13.9119C3.29536 14.4514 3.36111 14.9953 3.46824 15.5294C3.4723 15.5502 3.47816 15.5704 3.48534 15.5902C3.77896 17.1614 3.20702 18.7735 1.98308 19.8102C1.79347 19.9714 1.76961 20.2555 1.93041 20.4451C2.02002 20.5505 2.14656 20.6046 2.27443 20.6046C2.37755 20.6046 2.48066 20.5694 2.56536 20.4974C4.05548 19.2351 4.74178 17.2627 4.35634 15.3502Z" fill="white" />
                                                <path d="M6.88759 18.9366C6.65566 18.8465 6.39449 18.9613 6.3044 19.1933C5.82165 20.4366 5.02147 21.5399 3.99109 22.3838C3.79879 22.541 3.77045 22.8251 3.92803 23.0174C4.01722 23.1259 4.14645 23.1822 4.27659 23.1822C4.37702 23.1822 4.47834 23.1489 4.56209 23.0804C5.71178 22.1383 6.60473 20.9071 7.14422 19.5192C7.2343 19.2878 7.11905 19.0266 6.88759 18.9366Z" fill="white" />
                                                <path d="M2.70183 6.17313C2.78199 6.23165 2.87476 6.26004 2.96706 6.26004C3.10574 6.26004 3.24263 6.19608 3.33092 6.07497C5.19166 3.52572 7.92102 1.77844 11.0165 1.1543C13.763 0.599934 16.5415 0.958414 19.0503 2.19006C19.2741 2.3004 19.5438 2.20716 19.6528 1.98425C19.7627 1.76092 19.6704 1.49115 19.447 1.3817C16.7591 0.0618186 13.782 -0.321834 10.8387 0.271218C7.52159 0.939944 4.59724 2.8124 2.60367 5.54403C2.45686 5.74488 2.50098 6.02679 2.70183 6.17313Z" fill="white" />
                                                <path d="M1.1631 15.9956C1.16083 15.9848 1.15365 15.9767 1.15048 15.9659C0.589835 13.1523 0.982089 10.3189 2.28709 7.7696C2.40055 7.54848 2.31321 7.27697 2.09167 7.16346C1.87014 7.04952 1.59905 7.13781 1.48553 7.35935C0.081852 10.1004 -0.337843 13.1487 0.272359 16.174C0.275947 16.1906 0.285393 16.2041 0.290354 16.2199C0.326819 16.3978 0.365554 16.5738 0.408352 16.7485C0.459224 16.9539 0.642976 17.0908 0.845621 17.0908C0.881189 17.0908 0.917232 17.0867 0.953698 17.0781C1.19508 17.0183 1.34279 16.7742 1.28331 16.5328C1.23962 16.3559 1.19909 16.1766 1.1631 15.9956Z" fill="white" />
                                                <path d="M11.4826 3.46718C7.31045 4.30836 4.14334 7.56107 3.41424 11.7535C3.37192 11.9985 3.53583 12.2318 3.78079 12.2746C4.02893 12.3169 4.25901 12.1525 4.30181 11.908C4.96647 8.08388 7.85532 5.11762 11.661 4.34979C16.71 3.3334 21.6446 6.61128 22.6619 11.6594C22.6646 11.6738 22.6681 11.6873 22.6722 11.7008C22.7537 12.1093 22.824 12.5137 22.8811 12.9036C22.914 13.1275 23.1063 13.2882 23.326 13.2882C23.3481 13.2882 23.3702 13.2868 23.3922 13.2832C23.6381 13.2472 23.8083 13.0184 23.7723 12.7726C23.711 12.3542 23.6349 11.9201 23.5471 11.4819C23.5439 11.4675 23.5404 11.4526 23.5359 11.4387C22.4011 5.92777 17.0031 2.35448 11.4826 3.46718Z" fill="white" />
                                                <path d="M17.1535 12.7699C16.9572 11.7958 16.3934 10.9564 15.5657 10.4066C14.738 9.85628 13.7455 9.66266 12.7719 9.85807C11.3097 10.153 10.1686 11.2865 9.86414 12.746C9.81326 12.9896 9.96952 13.2282 10.2127 13.2791C10.4572 13.3296 10.695 13.1737 10.7458 12.9301C10.9764 11.8237 11.8415 10.9645 12.9497 10.7411C13.6883 10.593 14.4398 10.7397 15.0671 11.1563C15.6795 11.5634 16.1011 12.1795 16.2591 12.8955C16.2609 12.9135 16.2632 12.9315 16.2668 12.9495C16.4951 14.0794 16.6122 15.2326 16.6153 16.3769C16.6162 16.6254 16.8175 16.8263 17.0657 16.8263H17.0666C17.3156 16.8258 17.5169 16.6236 17.516 16.3751C17.5128 15.1907 17.3935 13.9974 17.1611 12.8279C17.1598 12.8086 17.1571 12.7892 17.1535 12.7699Z" fill="white" />
                                                <path d="M13.9513 13.416C13.9022 13.1723 13.6649 13.0157 13.4208 13.0634C13.1772 13.1124 13.0191 13.3502 13.0682 13.5938C13.9544 17.9894 12.7629 22.4444 9.79933 25.8173C9.63542 26.0042 9.65389 26.2888 9.84028 26.4532C9.92583 26.528 10.0321 26.5649 10.1375 26.5649C10.2627 26.5649 10.3869 26.5135 10.4761 26.4122C13.6266 22.8259 14.8934 18.0894 13.9513 13.416Z" fill="white" />
                                                <path d="M26.7476 10.8358C26.7449 10.8223 26.7359 10.8119 26.7318 10.7984C26.0384 7.40704 24.0979 4.44484 21.2636 2.45576C21.0601 2.31211 20.7786 2.36209 20.6363 2.56563C20.4936 2.76917 20.5426 3.05018 20.7462 3.19293C23.4013 5.05636 25.2165 7.83438 25.8578 11.015C25.86 11.0271 25.8672 11.0366 25.8704 11.0483C26.0487 11.9444 26.1307 12.8563 26.1136 13.7597C26.1091 14.0082 26.3068 14.2136 26.5553 14.2185H26.5643C26.8089 14.2185 27.0097 14.0222 27.0142 13.7768C27.0326 12.7961 26.943 11.8072 26.7476 10.8358Z" fill="white" />
                                                <path d="M20.3494 12.1259C19.9811 10.2976 18.9228 8.72285 17.3697 7.69116C15.8165 6.65905 13.9549 6.29471 12.1271 6.66264C8.35428 7.42324 5.90318 11.1123 6.6642 14.885C6.66959 14.9116 6.67724 14.9368 6.68674 14.9611C6.83128 15.7136 6.86326 16.4765 6.78178 17.2303C6.75524 17.4775 6.93398 17.6995 7.18169 17.7265C7.42349 17.7509 7.65093 17.5743 7.67748 17.3266C7.77115 16.4548 7.72972 15.5731 7.55452 14.7053C7.54914 14.6792 7.54149 14.6539 7.53199 14.6301C6.91772 11.3707 9.04459 8.2031 12.3049 7.54567C13.8968 7.22461 15.5189 7.5425 16.8712 8.44137C18.2159 9.3348 19.1345 10.6957 19.461 12.2758C19.4624 12.2853 19.4637 12.2952 19.4655 12.3046C19.9662 14.7855 20.0131 17.3 19.605 19.7773C19.5649 20.0231 19.7311 20.2546 19.9766 20.2951C20.0013 20.2987 20.0256 20.301 20.05 20.301C20.2665 20.301 20.4575 20.1442 20.494 19.9236C20.9178 17.3477 20.8709 14.7345 20.3544 12.1556C20.353 12.1457 20.3517 12.1358 20.3494 12.1259Z" fill="white" />
                                                <path d="M23.5157 14.4437C23.2675 14.4594 23.0789 14.6733 23.0946 14.9215C23.2572 17.5032 23.0018 20.0808 22.3354 22.5823C22.2714 22.8223 22.4142 23.0691 22.6546 23.133C22.6934 23.1434 22.7325 23.1488 22.7708 23.1488C22.9699 23.1488 23.1518 23.0155 23.2058 22.8138C23.8975 20.2181 24.1623 17.5436 23.9935 14.8647C23.9782 14.6166 23.7697 14.4279 23.5157 14.4437Z" fill="white" />
                                                <path d="M19.7271 21.4472C19.4853 21.3819 19.2399 21.5251 19.1759 21.7656C18.8328 23.0458 18.3649 24.299 17.7839 25.4906C17.675 25.7144 17.7682 25.9837 17.9915 26.0927C18.0555 26.1238 18.1222 26.1382 18.1888 26.1382C18.3554 26.1382 18.5157 26.0454 18.5936 25.8851C19.1998 24.6417 19.6879 23.334 20.0454 21.9984C20.1103 21.7583 19.9676 21.5111 19.7271 21.4472Z" fill="white" />
                                                <path d="M17.0026 17.9981C16.7572 17.9702 16.5321 18.1472 16.5042 18.3944C16.1826 21.2103 15.1622 23.9428 13.5523 26.2957C13.4118 26.5006 13.4641 26.7807 13.6694 26.9212C13.7473 26.9748 13.8356 27 13.9234 27C14.0671 27 14.2085 26.9316 14.2954 26.8041C15.9882 24.3305 17.0613 21.4579 17.399 18.4966C17.4269 18.2494 17.2494 18.0261 17.0026 17.9981Z" fill="white" />
                                            </svg>
                                        </div>
                                        <div className="specs--line specs--line--finger">
                                            <div className="specs--block specs--block--right">
                                                <span className="specs--block--font">
                                                    Super fast <i className="specs--block--font--bold">underdisplay</i> fingerprint sensor
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="invisible">{/*selfie*/}
                                        <div className="specs--point specs--selfie--point"></div>
                                        <div className="specs--line specs--line--selfie">
                                            <div className="specs--block specs--block--right">
                                                <span className="specs--block--font specs--block--selfie">
                                                    164MP <span>selfie camera</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="invisible">{/*display*/}
                                        <div className="specs--point specs--display--point"></div>
                                        <div className="specs--line specs--line--display">
                                            <div className="specs--block specs--block--left">
                                                <span className="specs--block--font specs--block--display">
                                                    4K resolution for every day
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="invisible">{/*display-size*/}
                                        <svg className="specs--two-arrow" width="566" height="24" viewBox="0 0 566 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M565.061 13.0607C565.646 12.4749 565.646 11.5252 565.061 10.9394L555.515 1.39345C554.929 0.80766 553.979 0.80766 553.393 1.39345C552.808 1.97923 552.808 2.92898 553.393 3.51477L561.879 12L553.393 20.4853C552.808 21.0711 552.808 22.0209 553.393 22.6066C553.979 23.1924 554.929 23.1924 555.515 22.6067L565.061 13.0607ZM2 13.5L564 13.5L564 10.5L2 10.5L2 13.5Z" fill="#CDB30C" />
                                            <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM76 10.5L2 10.5V13.5L76 13.5V10.5Z" fill="#CDB30C" />
                                        </svg>
                                        <div className="specs--point specs--display-size--point"></div>
                                        <div className="specs--line specs--line--display-size">
                                            <div className="specs--block specs--block--left">
                                                <span className="specs--block--font specs--block--display-size">
                                                    6.5" AMOLED display
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="invisible">{/*port*/}
                                        <div className="specs--arrow">
                                            <svg className="specs--arrow--head" width="30" height="65" viewBox="0 0 30 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g filter="url(#filter0_d)">
                                                    <path className="specs--arrow--head--line" d="M13.0607 0.939339C12.4749 0.353554 11.5251 0.353554 10.9393 0.939339L1.3934 10.4853C0.807614 11.0711 0.807614 12.0208 1.3934 12.6066C1.97919 13.1924 2.92893 13.1924 3.51472 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.939339ZM13.5 65L13.5 2L10.5 2L10.5 65L13.5 65Z" fill="#CDB30C" />
                                                </g>
                                                <defs>
                                                    <filter id="filter0_d" x="0.95406" y="0.5" width="32.0919" height="75.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                        <feOffset dy="6" />
                                                        <feGaussianBlur stdDeviation="2.5" />
                                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.37 0" />
                                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                                                    </filter>
                                                </defs>
                                            </svg>
                                            <svg className="specs--arrow--line">
                                                <line x1="0" y1="7" x2="51" y2="7" stroke="#CDB30C" strokeWidth="3" />
                                            </svg>
                                        </div>
                                        <div className="specs--block specs--block--left specs--block--charge-1">
                                            <span className="specs--block--font">
                                                USB Type-C 3.0 connector
                                            </span>
                                        </div>
                                        <div className="specs--line specs--line--charge-2">
                                            <div className="specs--block specs--block--left">
                                                <span className="specs--block--font specs--block--charge-2">
                                                    120W fast charge
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section  section--third"></div>
                        <div className="real--footer"> {/*real footer*/}
                            <span className="footer--text">
                                Buy our new <span className="Amatic allcaps">product</span> <span className="allcaps underline">today!</span>
                            </span>
                            <Footer
                                email="Support"
                                linkedIn="Phone"
                                twitterHref="https://www.twitter.com"
                                instaHref="https://www.instagram.com"
                                emailHref="kiwi@gmail.com"
                                linkedInHref={""}
                                showPopup={showPopup} />
                            
                            <Popup header={NewPopup.title} content={NewPopup.content} />                            

                        </div>
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    );
}