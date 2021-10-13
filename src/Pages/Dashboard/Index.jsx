import Layout from "Layout/Index.jsx";

import {
  DatePicker,
  Button,
  Dropdown,
  Menu,
  Select,
  Progress,
  Tabs,
  Table,
  Checkbox,
} from "antd";
import DateIcon from "../../Assets/icons/XMLID_12_.svg";
import Separator from "Assets/icons/seperator.svg";
import Print from "Assets/icons/print.svg";
import ArrowGraphIcon from "Assets/icons/arrowGraph.svg";
import SpeedoMeter from "Components/Dashboard/SpeedoMeter.jsx";
import LineSalesChart from "Components/Dashboard/LineSalesChart";
import ERPHeatMap from "Components/Dashboard/ERPHeatMap";
import TicketHeatMap from "Components/Dashboard/TicketHeatMap";
import CustomerOverview from "Components/Dashboard/CustomerOverview";
import PurchasingProduct from "Components/Dashboard/PurchasingProduct";
import ArrowDown from "Assets/icons/arrowDownDarkBlue.svg";
import PieMap from "Components/Dashboard/PieMap";

import RedFlag from "../../Assets/icons/Group 3072.svg";
import GreenFlag from "../../Assets/icons/Group 3071.svg";
import BlueFlag from "../../Assets/icons/Group 3070.svg";
import GreenTickIcon from "../../Assets/icons/Icon awesome-check.svg";

import CrossIcon from "../../Assets/icons/Icon metro-cross.svg";
import HorixontalIcon from "../../Assets/icons/ellipsis-horizontal-sharp.svg";

import { useState } from "react";

const { RangePicker } = DatePicker;

const Index = () => {
  const [isUSer, setIsUSer] = useState(false);

  const { TabPane } = Tabs;
  const menu = (
    <Menu>
      <Menu.Item key="1">PDF</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2">CSV</Menu.Item>
    </Menu>
  );
  const { Option } = Select;

  const dataSource = [
    {
      key: "1",
      TicketId: "#123",
      TicketTitle: "Demo",
      Status: "Pending",
      CreatedDate: "10-10-2020",
    },
    {
      key: "1",
      TicketId: "#123",
      TicketTitle: "Demo",
      Status: "Pending",
      CreatedDate: "10-10-2020",
    },
    {
      key: "1",
      TicketId: "#123",
      TicketTitle: "Demo",
      Status: "Pending",
      CreatedDate: "10-10-2020",
    },
    {
      key: "1",
      TicketId: "#123",
      TicketTitle: "Demo",
      Status: "Pending",
      CreatedDate: "10-10-2020",
    },
  ];

  const columns = [
    {
      title: "Ticket Id",
      dataIndex: "TicketId",
      key: "TicketId",
    },
    {
      title: "Ticket title",
      dataIndex: "TicketTitle",
      key: "TicketTitle",
    },
    {
      title: "Status",
      // dataIndex: "Status",
      key: "Status",
      render: (row) => (
        <span style={{ color: "#1767AA", fontWeight: "700" }}>
          {row.Status}
        </span>
      ),
    },
    {
      title: "Created Date",
      dataIndex: "CreatedDate",
      key: "CreatedDate",
    },
  ];

  const columns2 = [
    {
      title: "Ticket Id",
      dataIndex: "TicketId",
      key: "TicketId",
    },
    {
      title: "Ticket title",
      dataIndex: "TicketTitle",
      key: "TicketTitle",
    },
    {
      title: "Status",
      // dataIndex: "Status",
      key: "Status",
      render: (row) => (
        <span style={{ color: "#1767AA", fontWeight: "700" }}>
          {row.Status}
        </span>
      ),
    },
    {
      title: "Created Date",
      dataIndex: "CreatedDate",
      key: "CreatedDate",
    },

    {
      title: "Action",
      // dataIndex: "Action",
      key: "Action",
      render: (row) => <span style={{ color: "#1767AA" }}> {row.Action}</span>,
    },
  ];
  const dataSource2 = [
    {
      key: "1",
      TicketId: "#123",
      TicketTitle: "Demo",
      Status: "Pending",
      CreatedDate: "10-10-2020",
      Action: "View",
    },
    {
      key: "1",
      TicketId: "#123",
      TicketTitle: "Demo",
      Status: "Pending",
      CreatedDate: "10-10-2020",
      Action: "View",
    },
    {
      key: "1",
      TicketId: "#123",
      TicketTitle: "Demo",
      Status: "Pending",
      CreatedDate: "10-10-2020",
      Action: "Action",
    },
    {
      key: "1",
      TicketId: "#123",
      TicketTitle: "Demo",
      Status: "Pending",
      CreatedDate: "10-10-2020",
      Action: "View",
    },
  ];

  const columnsUsers = [
    {
      title: "Users",
      dataIndex: "Users",
      key: "Users",
    },
    {
      title: "Total tickets",
      dataIndex: "TotalTickets",
      key: "TotalTickets",
    },
    {
      title: "Resolved",
      dataIndex: "Resolved",
      key: "Resolved",
    },
    {
      title: "Rate",
      dataIndex: "Rate",
      key: "Rate",
    },
  ];
  const dataSourceUsers = [
    {
      key: "1",
      Users: "John",
      TotalTickets: 12,
      Resolved: "9",
      Rate: "90%",
    },
  ];
  const columnsTeams = [
    {
      title: "Teams",
      dataIndex: "Teams",
      key: "Teams",
    },
    {
      title: "Total tickets",
      dataIndex: "TotalTickets",
      key: "TotalTickets",
    },
    {
      title: "Resolved",
      dataIndex: "Resolved",
      key: "Resolved",
    },
    {
      title: "Rate",
      dataIndex: "Rate",
      key: "Rate",
    },
  ];
  const dataSourceTeams = [
    {
      key: "1",
      Teams: "Team 1",
      TotalTickets: 12,
      Resolved: "9",
      Rate: "90%",
    },
  ];
  return (
    <Layout title="Dashboard" currentPage={0}>
      <div className="main-wrapper dashboard-wrapper">
        {
          // top action
        }
        <div className="d-flex mb-29">
          <div style={{ width: "20%" }}>
            <p className="t0">Duration</p>

            <Select className="s1">
              <Option>1</Option>
              <Option>1</Option>
              <Option>1</Option>
            </Select>
          </div>

          <div style={{ width: "20%" }}>
            <p className="t0">Date (from-To)</p>

            <RangePicker
              style={{ marginTop: "0px" }}
              className="primary-range-picker"
              separator={<img width={70} src={Separator} alt="" />}
              suffixIcon={<img src={DateIcon} alt="" />}
              clearIcon={false}
            />
          </div>
          <div style={{ width: "20%", marginLeft: "120px" }}>
            {!isUSer && (
              <>
                <p className="t0">Users</p>

                <Select className="s1">
                  <Option value="lucy">
                    <Checkbox>User 1</Checkbox>
                  </Option>
                  <Option value="lucy">
                    <Checkbox>In Progress</Checkbox>
                  </Option>{" "}
                  <Option value="lucy">
                    <Checkbox>Support Team Resolved</Checkbox>
                  </Option>{" "}
                  <Option value="lucy">
                    <Checkbox>TEchnical team Resolved</Checkbox>
                  </Option>{" "}
                  <Option value="lucy">
                    <Checkbox>Rsolved</Checkbox>
                  </Option>
                </Select>
              </>
            )}
          </div>
        </div>

        <div className="row gx-2">
          <div className="col-4 ">
            <div className="card-sm">
              <div className="d-flex justify-content-around">
                <p className="t2 mt1"> Tickets</p>

                <PieMap />
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card-sm">
              <p className="t2"> Priority</p>
              <div className="priority-wrap">
                <div className="d-flex justify-content-between">
                  <div style={{ textAlign: "center" }}>
                    <p className="t1">High</p>
                    <p className="t-danger">10</p>

                    <div className="d1">
                      <img src={RedFlag} alt="" />
                    </div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <p className="t1">Medium</p>
                    <p className="t-danger" style={{ color: "#29C452" }}>
                      10
                    </p>

                    <div className="d1">
                      <img src={GreenFlag} alt="" />
                    </div>
                  </div>{" "}
                  <div style={{ textAlign: "center" }}>
                    <p className="t1">Low</p>
                    <p className="t-danger" style={{ color: "#119ABE" }}>
                      10
                    </p>

                    <div className="d1">
                      <img src={BlueFlag} alt="" />
                    </div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <p className="t1">Un assigned</p>
                    <p className="t-danger" style={{ color: "#119ABE" }}>
                      10
                    </p>

                    <div className="d1">
                      <img src={BlueFlag} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card-sm">
              <p className="t2">customer satisfaction</p>

              <div className="d-flex justify-content-around">
                <div style={{ marginTop: "27px" }}>
                  <div className="d-flex">
                    <p className="t1" style={{ marginRight: "56px" }}>
                      Poor
                    </p>
                    <p className="t2">20</p>
                  </div>
                  <div className="d-flex">
                    <p className="t1" style={{ marginRight: "51px" }}>
                      Good
                    </p>
                    <p className="t2">10</p>
                  </div>
                  <div className="d-flex">
                    <p className="t1" style={{ marginRight: "30px" }}>
                      Excelllent
                    </p>
                    <p className="t2">20</p>
                  </div>
                </div>

                <div style={{}}>
                  <Progress
                    width="112px"
                    type="circle"
                    strokeColor={"#29C452"}
                    percent={86}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-2" style={{ marginTop: "20px" }}>
          <div className="col-4">
            <div className="card-sm2">
              <Tabs defaultActiveKey="1">
                <TabPane tab="Status" key="1">
                  <div className="d-flex">
                    <div style={{ width: "50%", textAlign: "left" }}>
                      <p className="t1">New</p>
                    </div>
                    <div style={{ width: "50%" }}>
                      <Progress size="small" status="active" percent={30} />
                    </div>
                  </div>

                  <div className="d-flex pd1">
                    <div style={{ width: "50%", textAlign: "left" }}>
                      <p className="t1">In progress</p>
                    </div>
                    <div style={{ width: "50%" }}>
                      <Progress
                        strokeColor="#119ABE"
                        size="small"
                        status="active"
                        percent={30}
                      />
                    </div>
                  </div>
                  <div className="d-flex pd1">
                    <div style={{ width: "50%", textAlign: "left" }}>
                      <p className="t1">Resolved</p>
                    </div>
                    <div style={{ width: "50%" }}>
                      <Progress
                        strokeColor="#29C452"
                        size="small"
                        status="active"
                        percent={30}
                      />
                    </div>
                  </div>
                  <div className="d-flex pd1">
                    <div style={{ width: "50%", textAlign: "left" }}>
                      <p className="t1">Waiting for customers</p>
                    </div>
                    <div style={{ width: "50%" }}>
                      <Progress
                        strokeColor="#AFAFAF "
                        size="small"
                        status="active"
                        percent={30}
                      />
                    </div>
                  </div>
                  <div className="d-flex pd1">
                    <div style={{ width: "50%", textAlign: "left" }}>
                      <p className="t1">Closed</p>
                    </div>
                    <div style={{ width: "50%" }}>
                      <Progress
                        strokeColor="#1D93F6"
                        size="small"
                        status="active"
                        percent={30}
                      />
                    </div>
                  </div>
                  <div className="d-flex pd1">
                    <div style={{ width: "50%", textAlign: "left" }}>
                      <p className="t1">Reopen</p>
                    </div>
                    <div style={{ width: "50%" }}>
                      <Progress
                        strokeColor="#FB3D3D"
                        size="small"
                        status="active"
                        percent={30}
                      />
                    </div>
                  </div>
                </TabPane>
                <TabPane tab="Sources" key="2">
                  <div className="d-flex">
                    <div style={{ width: "50%", textAlign: "left" }}>
                      <p className="t1">Email</p>
                    </div>
                    <div style={{ width: "50%" }}>
                      <Progress size="small" status="active" percent={30} />
                    </div>
                  </div>

                  <div className="d-flex pd1">
                    <div style={{ width: "50%", textAlign: "left" }}>
                      <p className="t1">Phone</p>
                    </div>
                    <div style={{ width: "50%" }}>
                      <Progress
                        strokeColor="#119ABE"
                        size="small"
                        status="active"
                        percent={30}
                      />
                    </div>
                  </div>
                  <div className="d-flex pd1">
                    <div style={{ width: "50%", textAlign: "left" }}>
                      <p className="t1">WhatsApp</p>
                    </div>
                    <div style={{ width: "50%" }}>
                      <Progress
                        strokeColor="#29C452"
                        size="small"
                        status="active"
                        percent={30}
                      />
                    </div>
                  </div>
                  <div className="d-flex pd1">
                    <div style={{ width: "50%", textAlign: "left" }}>
                      <p className="t1">Message</p>
                    </div>
                    <div style={{ width: "50%" }}>
                      <Progress
                        strokeColor="#AFAFAF "
                        size="small"
                        status="active"
                        percent={30}
                      />
                    </div>
                  </div>
                  <div className="d-flex pd1">
                    <div style={{ width: "50%", textAlign: "left" }}>
                      <p className="t1">Website</p>
                    </div>
                    <div style={{ width: "50%" }}>
                      <Progress
                        strokeColor="#1D93F6"
                        size="small"
                        status="active"
                        percent={30}
                      />
                    </div>
                  </div>
                  <div className="d-flex pd1">
                    <div style={{ width: "50%", textAlign: "left" }}>
                      <p className="t1">ERP Software</p>
                    </div>
                    <div style={{ width: "50%" }}>
                      <Progress
                        strokeColor="#FB3D3D"
                        size="small"
                        status="active"
                        percent={30}
                      />
                    </div>
                  </div>
                </TabPane>
              </Tabs>
            </div>
          </div>
          <div className="col-3">
            <div className="card-sm2">
              <p className="t2">SLA</p>

              <div className="time-wrap">
                <div className="d-flex">
                  <p className="t3">2D</p>
                  <img
                    style={{ marginLeft: "15px", marginRight: "15px" }}
                    src={GreenTickIcon}
                    alt=""
                  />
                  <p className="t4">
                    Time to resolution within 2day{" "}
                    <img
                      height="21px"
                      style={{ marginLeft: "13px" }}
                      src={DateIcon}
                      alt=""
                    />
                  </p>
                </div>
                <div className="d-flex" style={{ marginTop: "48px" }}>
                  <p className="t3">2D</p>
                  <img
                    style={{ marginLeft: "15px", marginRight: "15px" }}
                    src={CrossIcon}
                    alt=""
                  />
                  <p className="t4">
                    Time to resolution within 2day{" "}
                    <img
                      height="21px"
                      style={{ marginLeft: "13px" }}
                      src={DateIcon}
                      alt=""
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className="card-sm2">
              {isUSer ? (
                <div>
                  <div className="d-flex justify-content-between">
                    <p className="t2">Open Tickets</p>
                    <p className="t5">view all </p>
                  </div>

                  <Table
                    dataSource={dataSource}
                    bordered={false}
                    pagination={false}
                    columns={columns}
                  />
                </div>
              ) : (
                <Tabs defaultActiveKey="1">
                  <TabPane tab="Top 5 Users" key="1">
                    <Table
                      dataSource={dataSourceUsers}
                      bordered={false}
                      pagination={false}
                      columns={columnsUsers}
                    />
                  </TabPane>
                  <TabPane tab="Top 5 Teams" key="2">
                    <Table
                      dataSource={dataSourceTeams}
                      bordered={false}
                      pagination={false}
                      columns={columnsTeams}
                    />
                  </TabPane>
                </Tabs>
              )}
            </div>
          </div>
        </div>
        {!isUSer && (
          <div className="row g-2" style={{ marginTop: "15px" }}>
            <div className="col-12">
              <div className="card-sm2">
                <p className="t2">Open Tickets</p>

                <div>
                  <Table
                    dataSource={dataSource2}
                    bordered={false}
                    pagination={false}
                    columns={columns2}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Index;
