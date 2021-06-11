import Card from '../UI/Card';
import style from './MeetupForm.module.css'


function MeetupForm () {
    function submitHandler (event) {
        event.preventDefault();

    }
    return (
        <Card>
        <div>
<form className={style.form} onSubmit={submitHandler()}>
    <div className={style.control}>
    <label htmlFor='title'> Meetup Title</label>
    <input type='text' required id='title'></input>
    </div>
    <div className={style.control}>
    <label htmlFor='image'> Meetup Image</label>
    <input type='url' required id='image'></input>
    </div>
    <div className={style.control}>
    <label htmlFor='address'> Meetup Addy</label>
    <input type='text' required id='adress'></input>
    </div>
    <div className={style.control}>
    <label htmlFor='description'> Meetup Description</label>
    <textarea id='description' required rows='5'></textarea>
    </div>
    <div className={style.actions}>
        <button> Submit</button>

    </div>
</form>

        </div>
        </Card>
    )
}

export default MeetupForm;