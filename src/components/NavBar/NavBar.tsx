import React from "react";
import styles from "./navbar.module.sass";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const NavBar = () => {
  const [anchorEl_more, setAnchorEl_more] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorEl_notif, setAnchorEl_notif] =
    React.useState<null | HTMLElement>(null);

  const open_more = Boolean(anchorEl_more);
  const open_notif = Boolean(anchorEl_notif);

  const handleClickMore = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl_more(event.currentTarget);
  };
  const handleClickNotif = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl_notif(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl_more(null);
    setAnchorEl_notif(null);
  };

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
        <div>
          <h1>Join</h1>
        </div>
        <button
          id="basic-button"
          aria-controls={open_notif ? "notif-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open_notif ? "true" : undefined}
          onClick={handleClickNotif}
        >
          <NotificationsNoneIcon fontSize="medium" style={{ color: "white" }} />
        </button>
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
        <MailOutlineIcon fontSize="medium" style={{ color: "white" }} />
        <AccountCircleIcon fontSize="large" style={{ color: "white" }} />
      </div>
    </div>
  );
};

export default NavBar;
