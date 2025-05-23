/* eslint-disable */
import React, { useState, useEffect } from "react"
import { MobileView, BrowserView } from "react-device-detect"
import { Link } from "react-router-dom";
import { history } from "../../helpers/history";
import { whiteUrls } from "../../helpers/urlGroups";
import './nav.css'
import logo1Black from "../../images/logo.svg";
import logo1White from "../../images/logo-whito.svg";
import logo2Black from "../../images/emgalaiprint SIMPLE logo.svg";
import logo2White from "../../images/emgalaiprint SIMPLE logoBLANC.png";
import NavLink from "./NavLink";
import { useSpring, animated } from "react-spring"
// import NavDropLink from "./NavDropLink";
import NavDropLinkMobile from "./NavDropLinkMobile";

const Nav = () => {
    const [isWhite] = useState(whiteUrls.includes(history.location.pathname))
    const [isPrint] = useState(history.location.pathname.split('/')[1].includes("print"))

    const [logo, setLogo] = useState()

    //const [isPoster] = useState(history.location.pathname === '/posters')

    useEffect(() => {
        setLogo(isPrint ? isWhite ? logo2White : logo2Black : isWhite ? logo1White : logo1Black)
    }, [isPrint, isWhite])

    const fade = useSpring({
        from: { opacity: 0, }, opacity: 1
    })

    return <div>

        {/*LOGO*/}
        <header /*style={isPoster ? {backgroundColor: 'black'} : {}}*/ className="header">
            <Link to="/" className="logo-link">
                <img src={logo} className="logo" alt="logo" />
            </Link>
        </header>

        {/*LINKS*/}
        <BrowserView>
            <section /*style={isPoster ? {backgroundColor: 'black'} : {}}*/ className="nav">
                {isPrint ?
                    <NavLink isWhite={isWhite} text={'about'} url={'/print/about'} /> :
                    <NavLink isWhite={isWhite} text={'about'} url={'/about'} />
                }

                {isPrint ?
                    <NavLink isWhite={isWhite} text={'devis'} url={'/print/devis'} /> :
                    <NavLink isWhite={isWhite} text={'contact'} url={'/contact'} />
                }

                {isPrint ?
                    <NavLink isWhite={isWhite} text={'workshops'} url={'/print/workshops'} /> :
                    <NavLink isWhite={isWhite} text={'editions'} url={'/editions'} />
                }

                {isPrint ?
                    <NavLink isWhite={isWhite} text={'tshirts'} url={'/print/tshirts'} /> :
                    <NavLink isWhite={isWhite} text={'music'} url={'/music'} />
                }

                {isPrint ?
                    <NavLink isWhite={isWhite} text={'LP'} url={'/print/lp'} /> :
                    <NavLink isWhite={isWhite} text={'gig posters'} url={'/posters'} />
                }

                {isPrint ?
                    <NavLink isWhite={isWhite} text={'cd'} url={'/print/cd'} /> :
                    <NavLink isWhite={isWhite} text={'logos'} url={'/logos'} />
                }

                {isPrint ?
                    <NavLink isWhite={isWhite} text={'tapes'} url={'/print/tapes'} /> :
                    <NavLink isWhite={isWhite} text={'shop'} url={"https://emgalaishop.bigcartel.com/"} />
                    // <animated.div className="nav-link-container" style={fade}>
                    //     <a target="_blank" rel="noopener noreferrer" href="https://emgalaishop.bigcartel.com/"
                    //         className="nav-link">shop</a>
                    //    </animated.div>
                }
                {isPrint ?
                    <NavLink isWhite={isWhite} text={'other'} url={'/print/other'} /> :
                    <></>
                }
            </section>
        </BrowserView>
        <MobileView>
            <section /*style={isPoster ? {backgroundColor: 'black'} : {}}*/ className="nav">
                {isPrint ?
                    <NavLink isWhite={isWhite} text={'about'} url={'/print/about'} /> :
                    <NavLink isWhite={isWhite} text={'about'} url={'/about'} />
                }

                {isPrint ?
                    <NavLink isWhite={isWhite} text={'devis'} url={'/print/devis'} /> :
                    <NavLink isWhite={isWhite} text={'contact'} url={'/contact'} />
                }

                {isPrint ?
                    <NavLink isWhite={isWhite} text={'workshop'} url={'/print/workshop'} /> :
                    <NavLink isWhite={isWhite} text={'editions'} url={'/editions'} />
                }

                {isPrint ?
                    <NavLink isWhite={isWhite} text={'tshirts'} url={'/print/tshirts'} /> :
                    <NavLink isWhite={isWhite} text={'music'} url={'/music'} />
                }

                {isPrint ?
                    <NavLink isWhite={isWhite} text={'lp'} url={'/print/lp'} /> :
                    <NavLink isWhite={isWhite} text={'gig posters'} url={'/posters'} />
                }

                {isPrint ?
                    <NavLink isWhite={isWhite} text={'cd'} url={'/print/cd'} /> :
                    <NavLink isWhite={isWhite} text={'logos'} url={'/logos/all'} />
                }

                {isPrint ?
                    <NavLink isWhite={isWhite} text={'tapes'} url={'/print/tapes'} /> :
                    <NavLink isWhite={isWhite} text={'shop'} url={"https://emgalaishop.bigcartel.com/"} />
                }

                {isPrint ?
                    <NavLink isWhite={isWhite} text={'other'} url={'/print/other'} /> :
                    <></>
                }

                {/* {isPrint ?
                    <></> :
                    // <NavDropLinkMobile isWhite={isWhite} text={'shop'}/>
                    <a target="_blank" rel="noopener noreferrer" href="https://emgalaishop.bigcartel.com/"
                       className="home-link">SHOP</a>
                } */}
            </section>
        </MobileView>
    </div>
}

export default Nav
