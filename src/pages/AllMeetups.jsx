import MeetupItem from '../components/Meetups/MeetupsItem';
import MeetupList from '../components/Meetups/MeetupList' ;
import {useState} from 'react'
 
const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://cdn.shopify.com/s/files/1/0518/3033/products/03-01-1629-KS-Panther-8.25-shopify_600x.png?v=1612234686",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];
 
function AllMeetups() {
  const [isLoading,setIsLoading] = useState(true)
  fetch('https://react-app-baby-default-rtdb.firebaseio.com/meetups.json').then((data) =>{
    return data.json();
  }).then((data) =>{
    setIsLoading(false)
  })
  return (
    <div>
      <section>
      <MeetupList meetups ={DUMMY_DATA} />
      </section>
    </div>
  );
}

export default AllMeetups;
