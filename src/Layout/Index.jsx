import Logo from "Assets/logo.svg";
import { ReactComponent as DashboardIcon } from "Assets/icons/dashboard.svg";
import { ReactComponent as PaymentsIcon } from "Assets/icons/payments.svg";
import { ReactComponent as TenantsIcon } from "Assets/icons/tenants.svg";
import { ReactComponent as RequestsIcon } from "Assets/icons/requests.svg";
import { ReactComponent as ManagementIcon } from "Assets/icons/management.svg";
import { ReactComponent as SettingsIcon } from "Assets/icons/Icon material-settings (2).svg";

import BellIcon from "../Assets/icons/Path 482.svg";

// import SettingIcon from "../Assets/icons/Icon material-settings (1).svg";
import ProfileIcon from "Assets/icons/profile.svg";
import DownIcon from "Assets/icons/downIcon.svg";
import { Menu, Dropdown, Collapse } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";

const { Panel } = Collapse;

// profile menu

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="https://www.antgroup.com">Logout</a>
    </Menu.Item>
  </Menu>
);

// Use as parent wrapper. Render Sidebar, Top nav and Content of the page
const Index = ({ children, title, currentPage }) => {
  const [notificationBox, setNotificationBox] = useState(false);
  // static nav links data
  const navLinks = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: <DashboardIcon />,
    },
    { title: "Tickets", url: "/tickets", icon: <PaymentsIcon /> },
    { title: "Reports", url: "/Reports", icon: <TenantsIcon /> },
    {
      title: "Settings",
      url: "",
      icon: <SettingsIcon style={{ marginRight: "14px" }} />,
      children: [
        { title: "User Managemnet", url: "/settings" },
        { title: "Tickets", url: "/settings/tickets" },
      ],
    },
  ];

  return (
    <div className="layout-wrapper">
      <nav className="side-nav">
        {
          // logo
        }
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        {
          // nav links
        }

        <ul>
          {navLinks.map((link, index) => {
            return (
              <div>
                {!link.children ? (
                  <li
                    key={link.title}
                    className={currentPage === index ? "li-active" : ""}
                  >
                    <Link to={link.url}>
                      {link.icon} {link.title}
                    </Link>
                  </li>
                ) : (
                  <Collapse
                    expandIcon={false}
                    collapsible="header"
                    destroyInactivePanel={true}
                    bordered={false}
                  >
                    <Panel
                      key="1"
                      header={
                        <span
                          style={{
                            fontSize: "16px",
                            padding: "14px 16px !important",
                            borderRadius: "8px 0px 0px 8px",
                            color: "white",
                            cursor: "pointer",
                            height: "47px",
                            marginBottom: "10px !important",
                          }}
                        >
                          {link.icon} {link.title}
                        </span>
                      }
                    >
                      <Collapse defaultActiveKey="1" bordered={false}>
                        {link.children.map((child) => {
                          return (
                            <div
                              header=""
                              key="1"
                              style={{
                                fontSize: "14px",
                                fontWeight: "400",
                                color: "#FFFFFF",
                                marginTop: "11px",
                              }}
                            >
                              <div className="inside-active">
                                <Link to={child.url}>{child.title} </Link>
                              </div>
                            </div>
                          );
                        })}
                      </Collapse>
                    </Panel>
                  </Collapse>
                )}
              </div>
            );
          })}
        </ul>
      </nav>
      <div className="flex-1">
        {
          // top nav
        }
        <nav className="top-nav">
          <div className="f-16 fw-600">{title}</div>

          <div className="d-flex">
            <div className="position-relative">
              <img
                style={{
                  marginRight: "42px",
                  marginTop: "2px",
                  cursor: "pointer",
                }}
                src={BellIcon}
                alt=""
                onClick={() => setNotificationBox(!notificationBox)}
              />
              <div className="notification-dot">
                <p style={{ fontSize: "6px", color: "white" }}>6</p>
              </div>

              {notificationBox && (
                <div className="notification-box">
                  <div className="notification-header d-flex justify-content-between">
                    <p className="tx-1">Notifications</p>
                    <p className="tx-1">
                      {" "}
                      <b> 10 </b>
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className=" d-flex position-relative">
              <p
                style={{
                  marginRight: "30px",
                  fontSize: "12px",
                  color: "#535658",
                  fontWeight: "400",
                  marginBottom: "0px",
                  marginTop: "5px",
                }}
              >
                Online users: <b> 158 </b>
              </p>

              <div className="onnline-dot"></div>
              <Dropdown
                placement="bottomLeft"
                className="cursor-pointer"
                overlay={menu}
                trigger={["click"]}
              >
                <div className="dropdown-trigger">
                  <img src={ProfileIcon} alt="" />
                  <span className="fw-500 f-12 color-primary username">
                    Muzamil Afridi
                  </span>
                  <img className="down-icon" src={DownIcon} alt="" />
                </div>
              </Dropdown>
            </div>
          </div>
        </nav>
        {
          // main content
        }
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Index;
