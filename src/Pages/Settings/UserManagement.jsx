import React, { useState } from "react";
import Layout from "Layout/Index";
import { Tabs, Button, Form, Input, Table, Modal } from "antd";
import SearchIcon from "../../Assets/icons/Icon material-search (1).svg";

import ActionIcon from "../../Assets/icons/ellipsis-horizontal-sharp.svg";

import AddIcon from "../../Assets/icons/Icon material-add.svg";

function UserManagement(props) {
  const [teamModal, setTeamModal] = useState(false);
  const { TabPane } = Tabs;
  const dataSource = [
    {
      key: "1",
      Fullname: "John Doe",
      Username: 32,
      Email: "10 Downing Street",
      Role: 32,
      CreatedDate: 32,
      Gender: 32,
      Team: 32,
      Action: 32,
    },
  ];
  const dataSource2 = [
    {
      key: "1",
      Name: "John Doe",
      TotalMembersCount: 32,
      Description: "10 Downing Street",
      Action: 32,
    },
  ];
  const dataSource3 = [
    {
      key: "1",
      RoleName: "John Doe",
      Description: 32,
      CreatedBy: "10 Downing Street",
      Action: 32,
    },
  ];

  const columns2 = [
    {
      title: "Name",
      dataIndex: "Name",
      key: "Name",
    },
    {
      title: "Total Members Count",
      dataIndex: "TotalMembersCount",
      key: "TotalMembersCount",
    },
    {
      title: "Description",
      dataIndex: "Description",
      key: "Description",
    },

    {
      title: "Action",
      dataIndex: "Action",
      key: "Action",
      render: (text, row) => (
        <div className="position-relative">
          <img src={ActionIcon} alt="" />
        </div>
      ),
    },
  ];
  const columns3 = [
    {
      title: "Role Name",
      dataIndex: "RoleName",
      key: "RoleName",
    },
    {
      title: "Description",
      dataIndex: "Description",
      key: "Description",
    },
    {
      title: "Created By",
      dataIndex: "CreatedBy",
      key: "CreatedBy",
    },

    {
      title: "Action",
      dataIndex: "Action",
      key: "Action",
      render: (text, row) => (
        <div className="position-relative">
          <img src={ActionIcon} alt="" />
        </div>
      ),
    },
  ];

  const columns = [
    {
      title: "Full Name",
      dataIndex: "Fullname",
      key: "Fullname",
    },
    {
      title: "Username",
      dataIndex: "Username",
      key: "Username",
    },
    {
      title: "Email",
      dataIndex: "Email",
      key: "Email",
    },
    {
      title: "Role",
      dataIndex: "Role",
      key: "Role",
    },
    {
      title: "Created Date",
      dataIndex: "CreatedDate",
      key: "CreatedDate",
    },
    {
      title: "Gender",
      dataIndex: "Gender",
      key: "Gender",
    },
    {
      title: "Team",
      dataIndex: "Team",
      key: "Team",
    },
    {
      title: "Action",
      dataIndex: "Action",
      key: "Action",
      render: (text, row) => (
        <div className="position-relative">
          <img src={ActionIcon} alt="" />
        </div>
      ),
    },
  ];
  return (
    <div>
      <Layout title="User management" currentPage="4">
        <div className="main-wrapper">
          <div className="settings-wrap">
            <div>
              <Tabs defaultActiveKey="1">
                <TabPane tab="Team" key="1">
                  <div className="d-flex float-end">
                    <div style={{ position: "relative" }}>
                      <input type="text" className="search-input" />
                      <img
                        src={SearchIcon}
                        style={{
                          position: "absolute",
                          left: 0,
                          top: "10px",
                          left: "9px",
                        }}
                        alt=""
                      />
                    </div>

                    <Button
                      className="btn-create"
                      onClick={() => setTeamModal(true)}
                    >
                      <img
                        src={AddIcon}
                        style={{ marginRight: "8px", marginBottom: "1px" }}
                        alt=""
                      />
                      Create New Team
                    </Button>
                  </div>
                  <div className="data-table" style={{ marginTop: "60px" }}>
                    <Table
                      dataSource={dataSource2}
                      columns={columns2}
                      pagination={false}
                    />
                  </div>
                </TabPane>
                <TabPane tab="Users" key="2">
                  <div className="d-flex float-end">
                    <div style={{ position: "relative" }}>
                      <input type="text" className="search-input" />
                      <img
                        src={SearchIcon}
                        style={{
                          position: "absolute",
                          left: 0,
                          top: "10px",
                          left: "9px",
                        }}
                        alt=""
                      />
                    </div>

                    <Button className="btn-create">
                      <img
                        src={AddIcon}
                        style={{ marginRight: "8px", marginBottom: "1px" }}
                        alt=""
                      />
                      Create New User
                    </Button>
                  </div>
                  <div className="data-table" style={{ marginTop: "60px" }}>
                    <Table
                      dataSource={dataSource}
                      columns={columns}
                      pagination={false}
                    />
                  </div>
                </TabPane>
                <TabPane tab="Roles" key="3">
                  <div className="d-flex float-end">
                    <div style={{ position: "relative" }}>
                      <input type="text" className="search-input" />
                      <img
                        src={SearchIcon}
                        style={{
                          position: "absolute",
                          left: 0,
                          top: "10px",
                          left: "9px",
                        }}
                        alt=""
                      />
                    </div>

                    <Button className="btn-create">
                      <img
                        src={AddIcon}
                        style={{ marginRight: "8px", marginBottom: "1px" }}
                        alt=""
                      />
                      Create New Role
                    </Button>
                  </div>
                  <div className="data-table" style={{ marginTop: "60px" }}>
                    <Table
                      dataSource={dataSource3}
                      columns={columns3}
                      pagination={false}
                    />
                  </div>
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </Layout>

      <Modal
        title="Create Team"
        visible={teamModal}
        onCancel={() => setTeamModal(false)}
        closable
      ></Modal>
    </div>
  );
}

export default UserManagement;
