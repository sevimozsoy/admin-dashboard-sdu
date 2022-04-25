import Navbar from '../../Components/navbar/Navbar';
import Sidebar from '../../Components/sidebar/Sidebar';
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar></Sidebar>
      <div className="homeContainer">
        <Navbar></Navbar>
        home container
      </div>
    </div>
  )
}

export default Home;