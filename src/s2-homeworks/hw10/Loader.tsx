import s from './Loader.module.css'
import loaderImg from '../../loader.gif'

// export const Loader = () => <img src={loaderImg} style={{width: '60px', margin: '0'}} alt=""/>
export const Loader = () => <div className={s.loader}></div>
