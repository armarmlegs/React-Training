import { useRef } from "react";

import Card from "../UI/Card";
import style from "./MeetupForm.module.css";

function MeetupForm(props) {
    const titleInputRef = useRef()
    const imageInputRef = useRef()
    const descriptionInputRef = useRef()
    const addressInputRef = useRef()


  function submitHandler(event) {
    event.preventDefault();
    const titleValue = titleInputRef.current.value
    const imageValue = imageInputRef.current.value
    const addressValue = addressInputRef.current.value
    const descriptionValue = descriptionInputRef.current.value

    const meetUpData = {
        title: titleValue,
        image: imageValue,
        address: addressValue,
        description: descriptionValue
    

    };
    props.onMeetUp(meetUpData);
  }
  return (
    <Card>
      <div>
        <form className={style.form} onSubmit={submitHandler}>
          <div className={style.control}>
            <label htmlFor="title"> Meetup Title</label>
            <input type="text" required id="title" ref={titleInputRef}></input>
          </div>
          <div className={style.control}>
            <label htmlFor="image"> Meetup Image</label>
            <input type="url" required id="image" ref={imageInputRef}></input>
          </div>
          <div className={style.control}>
            <label htmlFor="address"> Meetup Addy</label>
            <input type="text" required id="adress" ref={addressInputRef}></input>
          </div>
          <div className={style.control}>
            <label htmlFor="description"> Meetup Description</label>
            <textarea id="description" required rows="5" ref={descriptionInputRef}></textarea>
          </div>
          <div className={style.actions}>
            <button> Submit</button>
          </div>
        </form>
      </div>
    </Card>
  );
}

export default MeetupForm;
