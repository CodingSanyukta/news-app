import { Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-body">
                <ul className="left-panel list-inline mb-0 p-0">
                    <li className="list-inline-item"><Link to="/dashboard/extra/privacy-policy">Privacy Policy</Link></li>
                    <li className="list-inline-item"><Link to="/dashboard/extra/terms-of-service">Terms of Use</Link></li>
                </ul>
                <ul className="right-panel list-inline mb-0 p-0">
                ©2022 Team DeisyApp with <span className="text-primary">Devlights BootCamp React</span>
                </ul>
                <div>
                    Hope UI, Made with design by <Link to="https://iqonic.design/">IQONIC Design</Link>.
                </div>
            </div>
        </footer>
    )
}

export default Footer