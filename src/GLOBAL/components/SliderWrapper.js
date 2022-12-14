import chevronRight from "../../assets/svg/chevron-right.svg"
import "../../_global.scss"

const SliderWrapper = ({ title, children, isTopTen }) => {
    const capitalizeStr = (str) => {
        let str_ = str.toLowerCase()
        const str2 = str_.charAt(0).toUpperCase() + str_.slice(1);
        return str2
    }
    return (
        <>
            <section className='slides-container'>
                <div className='slides-wrapper'>
                    <div className='slider-section-name'>
                        {isTopTen ? <div>
                            <h3><span className="primary-color-text">AFRIPLAY</span> <span style={{ fontSize: '1.5rem' }}>| TOP 10</span></h3>
                        </div> : <h3 style={{ textTransform: "capitalize" }}>{capitalizeStr(title)}</h3>}
                        <img src={chevronRight} alt='chevron right' />
                    </div>
                    {children}
                </div>
            </section>
        </>
    )
}

export default SliderWrapper