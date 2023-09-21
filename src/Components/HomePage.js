import "../CSS/HomePage.css"
import React from 'react'
import userimg from '../Assets/Cover.jpg'
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import SwitchAccountOutlinedIcon from '@mui/icons-material/SwitchAccountOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Cards from "./Cards";

function HomePage() {
    return (
        <div className='homepage'>
            <div className="homepageSidebar">
                <div className="appInfo">
                    <img src="" alt="logo" />
                    <h2>Personal Finance</h2>
                </div>
                <div className="appFeatures">
                    <div className="appFeaturesOptions">
                        <WidgetsOutlinedIcon />
                        <p>Homepage</p>
                    </div>
                    <div className="appFeaturesOptions">
                        <SwitchAccountOutlinedIcon />
                        <p>Accounts</p>
                    </div>

                    <div className="appFeaturesOptions">
                        <EventNoteOutlinedIcon />
                        <p>Scheduler</p>
                    </div>

                    <div className="appFeaturesOptions">
                        <NotificationsNoneOutlinedIcon />
                        <p>Notification</p>
                    </div>

                    <div className="appFeaturesOptions">
                        <HistoryOutlinedIcon />
                        <p>History</p>
                    </div>
                    <h5>Prefrences</h5>
                    <div className="appFeaturesOptions">
                        <WbSunnyOutlinedIcon />
                        <p>Themes</p>
                    </div>
                    <div className="appFeaturesOptions">
                        <InfoOutlinedIcon />
                        <p>Get Help</p>
                    </div>
                    <div className="appFeaturesOptions">
                        <SettingsOutlinedIcon />
                        <p>Setting</p>
                    </div>
                </div>
            </div>

            <div className="homepageMain">
                <div className="homepageMain_top">
                    <div className="homepageMain_top_left">
                        <h1>Welcome to Personal Finance</h1>
                        <p>Hello User name, Welcome back</p>
                    </div>
                    <div className="homepageMain_top_right">
                        <div className='userImg'>
                            <img src={userimg} alt="userimg" />
                        </div>
                        <div className='userInfo'>
                            <p id="userName">Bilal</p>
                            <p id="userCountry">Sindh, Pakistan</p>
                        </div>
                    </div>
                </div>

                <div className="homepageMain_bottom">
                    <div className="homepageMain_bottom_options">
                        <Cards />
                    </div>
                </div>

                {/* Balance Card */}
                {/* Expenses Card */}
                {/* Cash Flow Card */}
                {/* Charts Card */}
                {/* Saving Goal Card */}
                {/* Income Category Card */}
                {/* Investments Card */}
            </div>
        </div >
    )
}

export default HomePage