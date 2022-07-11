import React from "react";
import styles from "./navbar.module.sass";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ArticleIcon from '@mui/icons-material/Article';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import { useNavigate } from "react-router-dom";





const NavBar = () => {
  const [anchorEl_more, setAnchorEl_more] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorEl_notif, setAnchorEl_notif] =
    React.useState<null | HTMLElement>(null);
  const [anchorEl_msg, setAnchorEl_msg] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorEl_user, setAnchorEl_user] = React.useState<null | HTMLElement>(
    null
  );
  
  const open_more = Boolean(anchorEl_more);
  const open_notif = Boolean(anchorEl_notif);
  const open_msg = Boolean(anchorEl_msg);
  const open_user = Boolean(anchorEl_user);
  
  const handleClickMore = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl_more(event.currentTarget);
  };
  const handleClickNotif = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl_notif(event.currentTarget);
  };
  
  const handleClickMsg = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl_msg(event.currentTarget);
  };
  
  const handleClickUser = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl_user(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl_msg(null);
    setAnchorEl_more(null);
    setAnchorEl_notif(null);
    setAnchorEl_user(null);
  };
  
  const navigate = useNavigate()





  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <a href="/">Logo</a>
        <a href="/">ValPals</a>
        <a href="/">Community</a>
        <a href="/">Services</a>
        <a>
          <Button
            id="basic-button"
            aria-controls={open_more ? "more-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open_more ? "true" : undefined}
            onClick={handleClickMore}
          >
            <ArrowDropDownIcon style={{ color: "white" }} />
          </Button>
          <Menu
            id="more-menu"
            anchorEl={anchorEl_more}
            open={open_more}
            onClose={handleClose}
            PaperProps={{
              style: {
                color: "white",
                backgroundColor: "#21212C",
                fontStyle: "bold",
                fontSize: "10px",
                paddingRight: "30px",
              },
            }}
          >
            <div className={styles.menuitem}>
              <h4>Contact</h4>
              <h1>Twitter</h1>
              <h1>Github</h1>
              <h1>Linkedin</h1>
              <h1>Business inquiry</h1>
              <h4>Help</h4>
              <h1>FAQ</h1>
              <h1>Issues</h1>
              <h4>About</h4>
              <h1>About us</h1>
            </div>
          </Menu>
        </a>
      </div>
      <div className={styles.menu}>
        { sessionStorage.getItem("token") ? <div>
          <button className={styles.button}>Join</button>
        </div> : null}
        <div>
          { sessionStorage.getItem("token") ? <button
            id="basic-button"
            aria-controls={open_notif ? "notif-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open_notif ? "true" : undefined}
            onClick={handleClickNotif}
          >
            <NotificationsNoneIcon
              fontSize="medium"
              style={{ color: "white" }}
            />
          </button> : null}
          <Menu
            id="notif-menu"
            anchorEl={anchorEl_notif}
            open={open_notif}
            onClose={handleClose}
            PaperProps={{
              style: {
                color: "white",
                backgroundColor: "#21212C",
                fontStyle: "bold",
                fontSize: "10px",
                paddingRight: "30px",
              },
            }}
          >
            <div className={styles.notifmenu}>
              <h4>Notifications</h4>
              <div className={styles.notification}>
                <div>
                  <h1>Notifcation Title</h1>
                  <h5>1 week ago</h5>
                </div>
                <h3>Congratulations on signing up for your first account</h3>
                <h5>view &gt;</h5>
              </div>
            </div>
          </Menu>
        </div>
        <div>
          { sessionStorage.getItem("token") ? <button
            id="basic-button"
            aria-controls={open_msg ? "msg-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open_msg ? "true" : undefined}
            onClick={handleClickMsg}
          >
            <Badge badgeContent={4} color="error">
              <MailOutlineIcon fontSize="medium" style={{ color: "white" }} />
            </Badge>
          </button> : <button onClick={() => navigate("/login")} className={styles.button}>Login</button>}
          <Menu
            id="msg-menu"
            anchorEl={anchorEl_msg}
            open={open_msg}
            onClose={handleClose}
            PaperProps={{
              style: {
                color: "white",
                backgroundColor: "#21212C",
                fontStyle: "bold",
                fontSize: "10px",
                paddingRight: "30px",
              },
            }}
          >
            <div className={styles.notifmenu}>
              <h4>Messages</h4>
              <div className={styles.messages}>
                <div>
                  <AccountCircleIcon
                    fontSize="small"
                    style={{ color: "white" }}
                  />
                  <h1>username</h1>
                </div>
                <h5>view messages &gt;</h5>
              </div>
            </div>
          </Menu>
        </div>
        <div>
          { sessionStorage.getItem("token") ? <button
            id="basic-button"
            aria-controls={open_user ? "msg-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open_user ? "true" : undefined}
            onClick={handleClickUser}
          >
            <AccountCircleIcon fontSize="large" style={{ color: "white" }} />
          </button> : <button onClick={() => navigate("/signup")} className={styles.button}>Sign up</button>}
          <Menu
            id="user-menu"
            anchorEl={anchorEl_user}
            open={open_user}
            onClose={handleClose}
            PaperProps={{
              style: {
                color: "white",
                backgroundColor: "#21212C",
                fontStyle: "bold",
                fontSize: "10px",
                paddingRight: "30px",
              },
            }}
          >
            <div className={styles.usermenu}>
              <div className={styles.header}>
                <AccountCircleIcon
                  fontSize="large"
                  style={{ color: "white" }}
                />
                <h1>username</h1>
              </div>
              <div className={styles.details}>
                <div>
                  <h1>0</h1>
                  <h2>followers</h2>
                </div>
                <div>
                  <h1>0</h1>
                  <h2>following</h2>
                </div>
              </div>
              <div className={styles.info}>
                <div>
                <Badge badgeContent={1} variant="dot" invisible={false} color="error">
                <AccountBalanceWalletIcon style={{color: "#559FFF"}}/>
                </Badge>
                <h1>100 Credits</h1>
                </div>
                <div>
                  <ArticleIcon style={{color: "#9263FF"}} />
                  <h1>Orders</h1>
                </div>
              </div>
              <div className={styles.join}>
                <h1>Join</h1>
                <p>Connect and play with amazing people</p>
              </div>
              <div className={styles.settings}>
                <SettingsIcon style={{ color: "white" }}/>
                <h1>Settings</h1>
              </div>
              <div className={styles.settings}>
                <HelpIcon style={{ color: "white" }}/>
                <h1>Support</h1>
              </div>
              
            </div>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
