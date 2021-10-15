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
  message,
} from "antd";
import SearchIcon from "../../Assets/icons/Icon material-search (1).svg";

import ActionIcon from "../../Assets/icons/ellipsis-horizontal-sharp.svg";

import CrossIcon from "../../Assets/icons/Icon metro-cancel.svg";
import ReactQuill from "react-quill";

import AddIcon from "../../Assets/icons/Icon material-add.svg";
import { right } from "@popperjs/core";
import LeftIcon from "../../Assets/icons/Icon feather-chevrons-left (3).svg";
import LeftIcon1 from "../../Assets/icons/Icon feather-chevrons-left (1).svg";

import Api from "Api.js";
import { useEffect } from "react";

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
  const [dataSource, setDataSource] = useState([]);
  const [expandedKeys, setExpandedKeys] = useState(["", ""]);
  const [checkedKeys, setCheckedKeys] = useState([""]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const [teams, setTeams] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const [role, setRole] = useState([]);
  const [users, setUsers] = useState([]);

  const { TabPane } = Tabs;
  // const dataSource = [];
  const dataSource2 = [
    {
      key: "1",
      Name: "John Doe",
      TotalMembersCount: 32,
      Description: "10 Downing Street",
      Action: 32,
    },
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
      title: "id",
      dataIndex: "teamId",
      key: "teamId",
    },
    {
      title: "Name",
      dataIndex: "teamName",
      key: "teamName",
    },
    {
      title: "status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },

    {
      title: "Action",
      dataIndex: "Action",
      key: "Action",
      render: (text, row) => <TableAction data={row} />,
    },
  ];
  const columns3 = [
    {
      title: "Role Name",
      dataIndex: "name",
      key: "name",
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
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Username",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },

    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Team",
      dataIndex: "team",
      key: "team",
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

  function createNewUser(values) {
    console.log(values);
    Api.post("/Users/Create", values)
      .then((res) => {
        message.success("User added successfully!");
        setUserModal(false);
        setRefresh(!refresh);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    Api.get("/Teams/Team")
      .then((res) => {
        setTeams(res.data);

        console.log(res.data);

        console.log(teams);
      })
      .catch((err) => {
        console.log(err);
      });

    Api.get("/Role")
      .then((res) => {
        setRole(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    Api.get("/Users")
      .then((res) => {
        setUsers(res.data);
        setDataSource(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh]);

  return (
    <div>
      <Layout title="User management" currentPage={3}>
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
                      dataSource={teams}
                      columns={columns2}
                      pagination={false}
                    />
                  </div>
                  <div className="pagination-wrapper">
                    <div className="d-flex justify-content-end pagination">
                      <img
                        src={LeftIcon}
                        style={{ marginRight: "10px" }}
                        alt=""
                      />
                      <div className="paginate-num-box">1</div>
                      <div className="paginate-num-box2">2</div>
                      <div className="paginate-num-box2">3</div>
                      <img
                        style={{ marginLeft: "10px" }}
                        src={LeftIcon1}
                        alt=""
                      />

                      <div className="d-flex images-wrap"></div>
                    </div>
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
                  <div className="pagination-wrapper">
                    <div className="d-flex justify-content-end pagination">
                      <img
                        src={LeftIcon}
                        style={{ marginRight: "10px" }}
                        alt=""
                      />
                      <div className="paginate-num-box">1</div>
                      <div className="paginate-num-box2">2</div>
                      <div className="paginate-num-box2">3</div>
                      <img
                        style={{ marginLeft: "10px" }}
                        src={LeftIcon1}
                        alt=""
                      />

                      <div className="d-flex images-wrap"></div>
                    </div>
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
                      dataSource={role}
                      columns={columns3}
                      pagination={false}
                    />
                  </div>
                  <div className="pagination-wrapper">
                    <div className="d-flex justify-content-end pagination">
                      <img
                        src={LeftIcon}
                        style={{ marginRight: "10px" }}
                        alt=""
                      />
                      <div className="paginate-num-box">1</div>
                      <div className="paginate-num-box2">2</div>
                      <div className="paginate-num-box2">3</div>
                      <img
                        style={{ marginLeft: "10px" }}
                        src={LeftIcon1}
                        alt=""
                      />

                      <div className="d-flex images-wrap"></div>
                    </div>
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
        title="Create User"
        visible={userModal}
        onCancel={() => setUserModal(false)}
        closable
        className="create-user-model"
        footer={false}
      >
        <Form onFinish={createNewUser}>
          <div className="d-flex">
            <div>
              <p className="mt1">Full Name</p>
              <Form.Item name="fullName">
                <Input className="tm-input" required></Input>
              </Form.Item>
            </div>
            <div style={{ marginLeft: "20px" }}>
              <p className="mt1">User Name</p>
              <Form.Item name="userName">
                <Input className="tm-input" required></Input>
              </Form.Item>
            </div>
            <div style={{ marginLeft: "20px" }}>
              <p className="mt1">Email</p>
              <Form.Item name="email">
                <Input className="tm-input" required></Input>
              </Form.Item>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <p className="mt1">Role</p>
              <Form.Item name="role">
                <Select
                  required
                  defaultValue=""
                  style={{ width: 214, height: "48px" }}
                >
                  {role.length > 0 &&
                    role.map((role) => (
                      <Option value={role.id}>
                        <Checkbox>{role.name}</Checkbox>
                      </Option>
                    ))}
                </Select>
              </Form.Item>
            </div>
            <div style={{ marginLeft: "20px" }}>
              <p className="mt1">Gender</p>
              <Form.Item name="gender">
                <Select
                  required
                  defaultValue=""
                  style={{ width: 214, height: "48px" }}
                >
                  <Option value={1}>Male</Option>
                  <Option value={0}>Female</Option>
                </Select>
              </Form.Item>
            </div>
            <div style={{ marginLeft: "20px" }}>
              <p className="mt1">Select Team</p>
              <Form.Item name="teamId">
                <Select
                  required
                  defaultValue=""
                  style={{ width: 214, height: "48px" }}
                >
                  {teams.length > 0 &&
                    teams.map((team) => (
                      <Option value={team.teamId}>{team.teamName}</Option>
                    ))}
                </Select>
              </Form.Item>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <p className="mt1">Password</p>
              <Form.Item name="password">
                <Input required type="password" className="tm-input"></Input>
              </Form.Item>
            </div>
            <div style={{ marginLeft: "20px" }}>
              <p className="mt1">Confrim Password</p>
              <Form.Item name="confirmPassword">
                <Input type="password" className="tm-input"></Input>
              </Form.Item>
            </div>
          </div>

          <div class="btns-wrap" style={{ marginTop: "53px" }}>
            <Button className="btn-cancel"> Reset</Button>
            <Button className="btn-create" htmlType="submit">
              Create
            </Button>
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

const TableAction = ({ data }) => {
  const [refresh, setRefresh] = useState(false);

  function deleteTeam(id) {
    console.log(id);
    Api.delete("/Teams/" + id)
      .then((res) => {
        message.success("deleted successsfully");

        setRefresh(!refresh);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const [action, setAction] = useState(false);
  return (
    <div className="position-relative">
      <img
        style={{ cursor: "pointer" }}
        src={ActionIcon}
        alt=""
        onClick={() => setAction(!action)}
      />

      {action && (
        <div
          style={{
            position: "absolute",
            width: "77px",
            height: "78px",
            background: "#FFFFFF",
            boxShadow: "0px 5px 10px #65656529",
            border: "1px solid #F2F2F2",
            borderRadius: "2px 0px 2px 2px",
            left: "63px",

            zIndex: "20",
          }}
        >
          <p
            style={{ fontSize: "12px", marginBottom: "0px" }}
            onClick={deleteTeam}
          >
            Edit
          </p>
          <p
            style={{ fontSize: "12px", marginBottom: "0px" }}
            onClick={() => deleteTeam(data.teamId)}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};
