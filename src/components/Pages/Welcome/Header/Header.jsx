import { useState, useEffect } from 'react'
import { BackgroundImage, H1, BasilLeaf, RedPepperImgStyle, BlackPepperImgStyle } from './HeaderStyle'
import { useSpring } from 'react-spring'

import BasilLeafImg from '../images/basil-leaf2.png'
import RedPepperImg from '../images/red-pepper1.png' 
import BlackPepperImg from '../images/single-pepper2.png'

const Header = () => {
    const [offsetY, setOffsetY] = useState(0)
    const handleScroll = () => setOffsetY(window.pageYOffset)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const H1Styles = useSpring({
        from: { translateY: offsetY * 0.3 },
        to: { translateY: offsetY * 0.1 },
    })
    const BasilStyles = useSpring({
        from: { translateY: offsetY * 0.4 },
        to: { translateY: offsetY * 0.2 },
    })
    const RedPepperStyles = useSpring({
        from: { translateY: -offsetY * 0.2 },
        to: { translateY: -offsetY * 0.1 },
    })
    const BlackPepperStyles = useSpring({
        from: { translateY: -offsetY * 0.4 },
        to: { translateY: -offsetY * 0.3 },
    })

    return (
        <BackgroundImage>
            <H1 style={H1Styles}>Welcome to my Recipe Finder app.</H1>
            <BasilLeaf style={BasilStyles} src={BasilLeafImg} alt="BasilLeaf"/>
            <RedPepperImgStyle style={RedPepperStyles} src={RedPepperImg}/>
            <BlackPepperImgStyle style={BlackPepperStyles} src={BlackPepperImg}/>
        </BackgroundImage>
    )
}

export default Header
