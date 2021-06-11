import MeetupForm from '../components/Meetups/MeetupForm'
import { history, useHistory} from 'react-router-dom'

function NewMeetUps () {
    const history = useHistory()
    function MeetUpHandler(meetupData) {
        fetch('https://react-app-baby-default-rtdb.firebaseio.com/meetups.json', {
            method:'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-type': "application/json"
            }
        }).then(() =>{
            history.replace('/')
        }).catch((error) =>{console.log(error)})
        

    }
    return (
        <div>
        <h1>Add new Events</h1>
        <MeetupForm onMeetUp={MeetUpHandler}/>
        </div>
    )
}

export default NewMeetUps