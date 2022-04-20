import Sidebar from '../../Components/sidebar/Sidebar';
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar></Sidebar>
      <div className="homeContainer">Home Container</div>
    </div>
  )
}

export default Home;