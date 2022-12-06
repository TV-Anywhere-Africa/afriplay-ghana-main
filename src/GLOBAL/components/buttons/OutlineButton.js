import { Link } from 'react-router-dom'
import '../../components/styles/buttons.scss'

const OutlineButton = (props) => {
    const { label, action, page } = props


    if (action) return (
        <>
            <div className="outline-btn" onClick={action}>
                <div>
                    <p>{label}</p>
                </div>
            </div>
        </>
    )

    if (page) return (
        <>
            <>
                <Link to={page} className="outline-btn">
                    <div>
                        <p>{label}</p>
                    </div>
                </Link>
            </>
        </>
    )

    return <></>
}

export default OutlineButton