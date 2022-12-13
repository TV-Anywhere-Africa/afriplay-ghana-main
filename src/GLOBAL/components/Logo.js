import '../../GLOBAL/components/styles/LogoSection.scss'
import logo from "../../assets/svg/logo.png"

const Logo = (props) => {
    const { w, h } = props
    return (
        <>
            <section className='logo-wrapper'>
                <img
                    src={logo}
                    alt="afriplay-logo"
                    style={{ width: w, height: h }}
                />
            </section>
        </>
    )
}

export default Logo