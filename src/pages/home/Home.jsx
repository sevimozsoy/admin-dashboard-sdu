import Navbar from '../../Components/navbar/Navbar';
import Sidebar from '../../Components/sidebar/Sidebar';
import Widget from '../../Components/widget/Widget';
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar></Sidebar>
      <div className="homeContainer">
        <Navbar></Navbar>
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="issue"/>
          <Widget type="closedIssues"/>
        </div>
      </div>
    </div>
  )
}

export default Home;