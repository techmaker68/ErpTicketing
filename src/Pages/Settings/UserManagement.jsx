import React, { useState } from "react";
import Layout from "Layout/Index";
import {
  Tabs,
  Button,
  Form,
  Input,
  Table,
  Modal,
  Select,
  Checkbox,
  Switch,
  Radio,
  Space,
  Collapse,
  Tree,
} from "antd";
import SearchIcon from "../../Assets/icons/Icon material-search (1).svg";

import ActionIcon from "../../Assets/icons/ellipsis-horizontal-sharp.svg";

import CrossIcon from "../../Assets/icons/Icon metro-cancel.svg";
import ReactQuill from "react-quill";

import AddIcon from "../../Assets/icons/Icon material-add.svg";
import { right } from "@popperjs/core";

function UserManagement(props) {
  const { Panel } = Collapse;
  const [value, setValue] = React.useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const { Option } = Select;
  const [teamModal, setTeamModal] = useState(false);
  const [userModal, setUserModal] = useState(false);
  const [roleModal, setRoleModal] = useState(false);

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

  // tree
  const treeData = [
    {
      title: "Dashboard",
      key: "0-0",
      children: [
        {
          title: "Tickets",
          key: "0-0-0",
          children: [
            { title: "Edit", key: "ticket:edit" },
            { title: "View all", key: "ticket:view" },
            { title: "View Assigned", key: "ticket:assigned" },
            { title: "Link Tickets", key: "ticket:link" },
            { title: "assign tickets", key: "ticket:assign" },
            { title: "create subtask", key: "ticket:subtask" },
          ],
        },
        {
          title: "0-0-1",
          key: "0-0-1",
          children: [
            { title: "0-0-1-0", key: "0-0-1-0" },
            { title: "0-0-1-1", key: "0-0-1-1" },
            { title: "0-0-1-2", key: "0-0-1-2" },
          ],
        },
      ],
    },

    {
      title: "Reports",
      key: "0-2",
      children: [
        {
          title: "summary Report",
          key: "0-2-1",
          children: [
            { title: "view", key: "Report:view" },
            { title: "Export", key: "Report:export" },
          ],
        },
        {
          title: "Detail Report",
          key: "0-2-3",
          children: [
            { title: "view", key: "Detail:view" },
            { title: "export", key: "detail:export" },
          ],
        },
      ],
    },
    {
      title: "settings",
      key: "0-3",
      children: [
        {
          title: "user management",
          key: "0-3-0",
          children: [
            { title: "view", key: "usermanagement:view" },
            {
              title: "teams",
              key: "0-3-0-1",
              children: [
                { title: "create", key: "teams:create" },
                { title: "view", key: "teams:view" },
                { title: "edit", key: "teams:edit" },
                { title: "delete", key: "teams:delete" },
              ],
            },
            {
              title: "users",
              key: "0-3-0-2",
              children: [
                { title: "Create", key: "users:create" },
                { title: "view", key: "users:view" },
                { title: "edit", key: "users:edit" },
                { title: "delete", key: "users:delete" },
              ],
            },
            {
              title: "Roles",
              key: "0-3-0-3",
              children: [
                { title: "Create", key: "role:create" },
                { title: "view", key: "role:view" },
                { title: "edit", key: "role;edit" },
                { title: "delete", key: "role:delete" },
              ],
            },
          ],
        },

        {
          title: "Detail Report",
          key: "0-4-1",
          children: [
            { title: "view", key: "detailreport:view" },
            { title: "export", key: "detailreport:export" },
          ],
        },
      ],
    },

    {
      title: "ticket settings",
      key: "0-5",
      children: [
        {
          title: "Sla",
          key: "0-5-1",
          children: [{ title: "Update", key: "sla:update" }],
        },
        {
          title: "sources",
          key: "0-5-2",
          children: [{ title: "add new", key: "slaadd:new" }],
        },

        {
          title: "Ticket type",
          key: "0-5-3",
          children: [{ title: "add new", key: "tickettypeadd:new" }],
        },
        {
          title: "operational Hours",
          key: "0-5-4",
          children: [{ title: "Update", key: "operationalhours:update" }],
        },
      ],
    },
  ];

  const [expandedKeys, setExpandedKeys] = useState(["", ""]);
  const [checkedKeys, setCheckedKeys] = useState([""]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const onExpand = (expandedKeysValue) => {
    console.log("onExpand", expandedKeysValue); // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.

    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };

  const onCheck = (checkedKeysValue) => {
    console.log("onCheck", checkedKeysValue);
    setCheckedKeys(checkedKeysValue);
  };

  const onSelect = (selectedKeysValue, info) => {
    console.log("onSelect", info);
    setSelectedKeys(selectedKeysValue);
  };

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

                    <Button
                      className="btn-create"
                      onClick={() => setUserModal(true)}
                    >
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

                    <Button
                      className="btn-create"
                      onClick={() => setRoleModal(true)}
                    >
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
        className="create-team-model"
        footer={false}
      >
        <Form>
          <div className="d-flex">
            <div>
              <p className="mt1">Team Name</p>
              <Form.Item>
                <Input className="tm-input"></Input>
              </Form.Item>
            </div>
            <div style={{ marginLeft: "20px" }}>
              <p className="mt1">Add Member</p>
              <Form.Item>
                <Select
                  defaultValue=""
                  // className="assigned-by"
                  style={{ width: 214, height: "48px" }}
                >
                  <Option value="lucy">
                    <Checkbox>user 1</Checkbox>
                  </Option>
                  <Option value="lucy">
                    <Checkbox>user 2</Checkbox>
                  </Option>
                  <Option value="lucy">
                    <Checkbox>user 3</Checkbox>
                  </Option>
                  <Option value="lucy">
                    <Checkbox>user 4</Checkbox>
                  </Option>
                </Select>
              </Form.Item>

              <div className="sugggestion-wrap d-flex">
                <div className="suggestion-box d-flex">
                  <p className="t1">Member 1</p>
                  <img
                    src={CrossIcon}
                    height="11px"
                    style={{ marginTop: "3px", marginLeft: "8px" }}
                    alt=""
                  />
                </div>
                <div className="suggestion-box d-flex">
                  <p className="t1">Member 1</p>
                  <img
                    src={CrossIcon}
                    height="11px"
                    style={{ marginTop: "3px", marginLeft: "8px" }}
                    alt=""
                  />
                </div>{" "}
                <div className="suggestion-box d-flex">
                  <p className="t1">Member 1</p>
                  <img
                    src={CrossIcon}
                    height="11px"
                    style={{ marginTop: "3px", marginLeft: "8px" }}
                    alt=""
                  />
                </div>{" "}
                <div className="suggestion-box d-flex">
                  <p className="t1">Member 1</p>
                  <img
                    src={CrossIcon}
                    height="11px"
                    style={{ marginTop: "3px", marginLeft: "8px" }}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <p className="mt1">Description</p>
          <div className="quill-wrap" style={{ marginTop: "2px" }}>
            <div id="editor">
              <p className="ql-align-center"></p>
            </div>
            <div id="toolbar">
              <ReactQuill theme="snow" />
            </div>
          </div>

          <div className="checks-wrap d-flex">
            <Switch defaultChecked style={{ marginRight: "15px" }} />
            <p className="mt2">Automatic ticket assessment</p>
            <p className="mt2" style={{ marginLeft: "56px" }}>
              Distribute and balance the number of tickets <br /> assigned to
              members in this team
            </p>
          </div>

          <div className="radio-wrap">
            <Radio.Group onChange={onChange} value={value}>
              <Space direction="vertical">
                <Radio value={1}>Circular Ticket Assignment</Radio>
                <Radio value={2} style={{ marginTop: "20px" }}>
                  Workload ticket assignment
                </Radio>
                <Input
                  type="number"
                  placeholder="set time linit"
                  className="input-num"
                />
              </Space>
            </Radio.Group>
          </div>

          <div class="btns-wrap">
            <Button className="btn-cancel"> Cancel</Button>
            <Button className="btn-create"> Create</Button>
          </div>
        </Form>
      </Modal>

      <Modal
        title="Create Team"
        visible={userModal}
        onCancel={() => setUserModal(false)}
        closable
        className="create-user-model"
        footer={false}
      >
        <Form>
          <div className="d-flex">
            <div>
              <p className="mt1">Full Name</p>
              <Form.Item>
                <Input className="tm-input"></Input>
              </Form.Item>
            </div>
            <div style={{ marginLeft: "20px" }}>
              <p className="mt1">User Name</p>
              <Form.Item>
                <Input className="tm-input"></Input>
              </Form.Item>
            </div>
            <div style={{ marginLeft: "20px" }}>
              <p className="mt1">Email</p>
              <Form.Item>
                <Input className="tm-input"></Input>
              </Form.Item>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <p className="mt1">Role</p>
              <Form.Item>
                <Select
                  defaultValue=""
                  // className="assigned-by"
                  style={{ width: 214, height: "48px" }}
                >
                  <Option value="lucy">
                    <Checkbox>user 1</Checkbox>
                  </Option>
                  <Option value="lucy">
                    <Checkbox>user 2</Checkbox>
                  </Option>
                  <Option value="lucy">
                    <Checkbox>user 3</Checkbox>
                  </Option>
                  <Option value="lucy">
                    <Checkbox>user 4</Checkbox>
                  </Option>
                </Select>
              </Form.Item>
            </div>
            <div style={{ marginLeft: "20px" }}>
              <p className="mt1">Gender</p>
              <Form.Item>
                <Select
                  defaultValue=""
                  // className="assigned-by"
                  style={{ width: 214, height: "48px" }}
                >
                  <Option value="lucy">Male</Option>
                  <Option value="lucy">Female</Option>
                </Select>
              </Form.Item>
            </div>
            <div style={{ marginLeft: "20px" }}>
              <p className="mt1">Select Team</p>
              <Form.Item>
                <Select
                  defaultValue=""
                  // className="assigned-by"
                  style={{ width: 214, height: "48px" }}
                >
                  <Option value="lucy">Team 1</Option>
                  <Option value="lucy">Team 1</Option>
                  <Option value="lucy">Team 1</Option>
                  <Option value="lucy">Team 1</Option>
                </Select>
              </Form.Item>
            </div>
          </div>

          <div class="btns-wrap" style={{ marginTop: "53px" }}>
            <Button className="btn-cancel"> Reset</Button>
            <Button className="btn-create"> Create</Button>
          </div>
        </Form>
      </Modal>

      <Modal
        title="Create Role"
        visible={roleModal}
        onCancel={() => setRoleModal(false)}
        closable
        className="create-role-modal"
        footer={false}
      >
        <Form>
          <div className="d-flex justify-content-between">
            <div>
              <p className="mt1">Full Name</p>
              <Form.Item>
                <Input className="tm-input"></Input>
              </Form.Item>

              <p className="mt1">Description</p>
              <ReactQuill theme="snow" />
              <div class="btns-wrap" style={{ marginTop: "53px" }}>
                <Button className="btn-cancel"> Reset</Button>
                <Button className="btn-create"> Create</Button>
              </div>
            </div>

            <div>
              <p className="mt1">Description</p>

              <div className="checks-wrap">
                <Tree
                  checkable
                  onExpand={onExpand}
                  expandedKeys={expandedKeys}
                  autoExpandParent={autoExpandParent}
                  onCheck={onCheck}
                  checkedKeys={checkedKeys}
                  onSelect={onSelect}
                  selectedKeys={selectedKeys}
                  treeData={treeData}
                />
              </div>
            </div>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default UserManagement;
