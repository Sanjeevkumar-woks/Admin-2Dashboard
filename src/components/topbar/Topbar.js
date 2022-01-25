import './topbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {Badge} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';


// Top Bar Function 
export  function Topbar() {
    return (
            <div className='topbarwrapper'>
                <div className='topLeft'>
                    <div className='logo'>
                    <span >🙂 ADMIN</span>
                    </div>
                </div>
            
                <div className='topRight'>
                    <div className='iconscomponent'>
                         <Badge badgeContent={+3} color="error">
                        <NotificationsNoneIcon color="action" />
                        </Badge>
                        <Badge badgeContent={4} color="error">
                        <MailIcon color="action" />
                        </Badge>
                    </div>
                    <div class="vl"></div>
                    <div className='profile'>
                         <p>Sanjeev</p>
                    <img className='profileimg' alt="bob" src='https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile.svg'/>
                </div>
            </div>           
        </div>
    )
}
