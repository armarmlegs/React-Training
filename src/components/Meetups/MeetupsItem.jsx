import Button from "react-bootstrap/Button";
import style from "./MeetupItems.module.css";
import Card from "../UI/Card";

function MeetupItem (props) {
    return (
        <Card >
        <li className={style.item}>
            <div className={style.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={style.content}>
                <h3> {props.title}</h3>
                <address> {props.address}</address>
                <p>{props.description} </p>
            </div>
            <div className={style.actions}>
            <Button variant ="dark" size ="sm" active> To Faves</Button>
            </div>
        </li>
        </Card>
    )
}


export default MeetupItem;