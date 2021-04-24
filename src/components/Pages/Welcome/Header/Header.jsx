import { useSpring } from 'react-spring'
import { BackgroundImage, H1 } from './HeaderStyle'

const Header = () => {
    const props = useSpring({ 
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 400,
        margin: 0,
        config: {
            duration: 1000,
        }
    })
    console.log(props)
    return (
        <BackgroundImage>
            <H1 style={props}>This is going to be the Welcome/Home page</H1>
        </BackgroundImage>
    )
}

export default Header
