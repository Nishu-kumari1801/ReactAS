import style from './css/userProfile.module.css'
function UserProfile(){
    return (
        <div>
            <h1 className={style.heading}>User Profile</h1>
            <div className={style.card}>
                <img className={style.img} src="https://www.w3schools.com/howto/img_avatar.png"/>
            <div className={style.textWrap}>
            <h4>Nishu jha</h4>
            <p>Software Developer</p>
            </div>
            </div>
        </div>
    )
}


export default UserProfile ;