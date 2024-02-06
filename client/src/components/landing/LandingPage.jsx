import style from './LandingPage.module.css'
const LandingPage = () => {
    return(
        <div style={{background:'#4475b2'}}>
            <h1 className={style.title}>henry dog</h1>

            <img src="pastor aleman.png" alt="app de perros" width="600px" height="600px" style={{ width: '100%' }}/>

            <button className={style.button}>Home</button>
        </div>
    )
}

export default LandingPage;