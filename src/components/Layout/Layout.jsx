import style from './Layout.module.css';
import MainNav from './MainNav';

function Layout (props) {
    return (
        <div>
            <MainNav />
        <div className={style.main}>{props.children} </div>
        </div>
    )
}


export default Layout