import swag from "./MeetupList.module.css";
import MeetupItem from "./MeetupsItem";

function MeetUpList(props) {
  return (
    <ul className={swag.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem key={meetup.id}
         id={meetup.id}
          image={meetup.image}
           title={meetup.title} 
           address={meetup.address} 
        description={meetup.description} />
      ))}
    </ul>
  );
}

export default MeetUpList;
