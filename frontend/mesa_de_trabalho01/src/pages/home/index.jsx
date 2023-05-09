import { Header } from '../../components/header'
import './styles.sass'

export function Home(){
  return(
    <div className='container'>
      <header className='header'>
        <Header />
      </header>
    </div>
  )
}
