import React from "react";
import Layout from "Layout/Index";
import { Tabs, Button, Select, Input, TimePicker } from "antd";
import { useState } from "react";
import CrossIcon from "../../Assets/icons/Group 2271.svg";

function TicketSetting(props) {
  const [disabled, setDisabled] = useState(false);
  const [disabled1, setDisabled1] = useState(false);
  const [disabled2, setDisabled2] = useState(false);
  const [fieldArray, setFieldArray] = useState([1, 2, 3, 4, 5]);
  const [fieldArray2, setFieldArray2] = useState([1, 2, 3, 4, 5]);

  const { Option } = Select;
  const { RangePicker } = TimePicker;
  function createNewField() {
    setFieldArray([...fieldArray, 1]);
  }
  function createNewField2() {
    setFieldArray2([...fieldArray2, 1]);
  }
  const { TabPane } = Tabs;
  return (
    <div>
      <Layout title="Ticket Settings">
        <div className="main-wrapper">
          <div className="ticket-settings">
            <Tabs defaultActiveKey="1">
              <TabPane tab="SLA" key="1">
                <div className="d-flex justify-content-between b1">
                  <div>
                    <p className="t1">High priority</p>
                    <p className="t2">
                      Please define the time and reminder for high priority
                      tickets
                    </p>
                  </div>
                  <div>
                    <div class="btns-wrap" style={{ marginTop: "53px" }}>
                      <Button className="btn-cancel">Reset</Button>
                      <Button
                        className="btn-create"
                        onClick={() => setDisabled(true)}
                      >
                        Update
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="response-time-wrap d-flex">
                  <div style={{ width: "20%" }}>
                    <p className="t2">First Response time</p>
                    <Input
                      className="time-d2"
                      disabled={disabled ? false : true}
                    />
                  </div>
                  <div style={{ width: "20%" }}>
                    <p className="t2">Resolution time</p>

                    <Input
                      className="time-d2"
                      disabled={disabled ? false : true}
                    />
                  </div>
                  <div style={{ width: "20%" }}>
                    <p className="t2">Operational hours</p>
                    <Select
                      className="time-d2"
                      disabled={disabled ? false : true}
                    >
                      <Option>workign hours</Option>
                    </Select>
                  </div>
                  <div style={{ width: "40%" }}></div>
                </div>

                <div className="response-time-wrap ">
                  <p className="t5">Reminder</p>
                  <div className="d-flex">
                    <div style={{ width: "20%" }}>
                      <p className="t2">First Response time</p>
                      <Input
                        className="time-d2"
                        disabled={disabled ? false : true}
                      />
                    </div>
                    <div style={{ width: "20%" }}>
                      <p className="t2">Resolution time</p>
                      <Input
                        className="time-d2"
                        disabled={disabled ? false : true}
                      />
                    </div>
                    <div style={{ width: "20%" }}>
                      <p className="t2">Action</p>
                      <Select
                        className="time-d2"
                        disabled={disabled ? false : true}
                      >
                        <Option>Notification</Option>
                      </Select>
                    </div>
                    <div style={{ width: "40%" }}></div>
                  </div>
                </div>

                <section id="medium priority">
                  <div className="response-time-wrap">
                    <div className="d-flex justify-content-between b1">
                      <div>
                        <p className="t1">Medium Priority</p>

                        <p className="t2">
                          Please define the time and reminder for medium
                          priority tickets
                        </p>
                      </div>
                      <div>
                        <div class="btns-wrap" style={{ marginTop: "53px" }}>
                          <Button className="btn-cancel">Reset</Button>
                          <Button
                            className="btn-create"
                            onClick={() => setDisabled1(true)}
                          >
                            Update
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div style={{ width: "20%" }}>
                        <p className="t2">First Response time</p>
                        <Input
                          className="time-d2"
                          disabled={disabled1 ? false : true}
                        />
                      </div>
                      <div style={{ width: "20%" }}>
                        <p className="t2">Resolution time</p>
                        <Input
                          className="time-d2"
                          disabled={disabled1 ? false : true}
                        />
                      </div>
                      <div style={{ width: "20%" }}>
                        <p className="t2">Action</p>
                        <Select
                          className="time-d2"
                          disabled={disabled1 ? false : true}
                        >
                          <Option>Notification</Option>
                        </Select>
                      </div>
                      <div style={{ width: "40%" }}></div>
                    </div>
                  </div>
                  <div className="response-time-wrap ">
                    <p className="t5">Reminder</p>
                    <div className="d-flex">
                      <div style={{ width: "20%" }}>
                        <p className="t2">First Response time</p>
                        <Input
                          className="time-d2"
                          disabled={disabled1 ? false : true}
                        />
                      </div>
                      <div style={{ width: "20%" }}>
                        <p className="t2">Resolution time</p>
                        <Input
                          className="time-d2"
                          disabled={disabled1 ? false : true}
                        />
                      </div>
                      <div style={{ width: "20%" }}>
                        <p className="t2">Action</p>
                        <Select
                          className="time-d2"
                          disabled={disabled1 ? false : true}
                        >
                          <Option>Notification</Option>
                        </Select>
                      </div>
                      <div style={{ width: "40%" }}></div>
                    </div>
                  </div>
                </section>

                <section id="Low priority">
                  <div className="response-time-wrap">
                    <div className="d-flex justify-content-between b1">
                      <div>
                        <p className="t1">Low Priority</p>

                        <p className="t2">
                          Please define the time and reminder for medium
                          priority tickets
                        </p>
                      </div>
                      <div>
                        <div class="btns-wrap" style={{ marginTop: "53px" }}>
                          <Button className="btn-cancel">Reset</Button>
                          <Button
                            className="btn-create"
                            onClick={() => setDisabled2(true)}
                          >
                            Update
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div style={{ width: "20%" }}>
                        <p className="t2">First Response time</p>
                        <Input
                          className="time-d2"
                          disabled={disabled2 ? false : true}
                        />
                      </div>
                      <div style={{ width: "20%" }}>
                        <p className="t2">Resolution time</p>
                        <Input
                          className="time-d2"
                          disabled={disabled2 ? false : true}
                        />
                      </div>
                      <div style={{ width: "20%" }}>
                        <p className="t2">Action</p>
                        <Select
                          className="time-d2"
                          disabled={disabled2 ? false : true}
                        >
                          <Option>Notification</Option>
                        </Select>
                      </div>
                      <div style={{ width: "40%" }}></div>
                    </div>
                  </div>
                  <div
                    className="response-time-wrap"
                    style={{ marginBottom: "10px" }}
                  >
                    <p className="t5">Reminder</p>
                    <div className="d-flex">
                      <div style={{ width: "20%" }}>
                        <p className="t2">First Response time</p>
                        <Input
                          className="time-d2"
                          disabled={disabled2 ? false : true}
                        />
                      </div>
                      <div style={{ width: "20%" }}>
                        <p className="t2">Resolution time</p>
                        <Input
                          className="time-d2"
                          disabled={disabled2 ? false : true}
                        />
                      </div>
                      <div style={{ width: "20%" }}>
                        <p className="t2">Action</p>
                        <Select
                          className="time-d2"
                          disabled={disabled2 ? false : true}
                        >
                          <Option>Notification</Option>
                        </Select>
                      </div>
                      <div style={{ width: "40%" }}></div>
                    </div>
                  </div>
                </section>
              </TabPane>
              <TabPane tab="General" key="2">
                <section id="Sources">
                  <div className="response-time-wrap">
                    <div className="d-flex justify-content-between b1">
                      <div>
                        <p className="t1">Sources</p>

                        <p className="t2">
                          Please add, edit or update sources for the tickets
                        </p>
                      </div>
                      <div>
                        <div class="btns-wrap" style={{ marginTop: "53px" }}>
                          <Button
                            className="btn-create"
                            onClick={() => setDisabled2(true)}
                            onClick={() => createNewField()}
                          >
                            Add new
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="d-flex justify-content-between flex-wrap"
                      style={{ width: "60%" }}
                    >
                      {fieldArray.map((source) => (
                        <div
                          className="position-relative"
                          style={{ width: "50%", marginBottom: 10 }}
                        >
                          <Input className="time-d3" value="Email" />
                          <img
                            src={CrossIcon}
                            className="position-absolute cross-align"
                            height="15px"
                            style={{
                              right: "13%",
                              top: "11px",
                            }}
                            alt=""
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
                {/* ======================================
                Ticket type 
                  ======================================= */}

                <div className="response-time-wrap">
                  <div className="d-flex justify-content-between b1">
                    <div>
                      <p className="t1">Ticket type</p>

                      <p className="t2">
                        Please add, edit or update sources for the tickets
                      </p>
                    </div>
                    <div>
                      <div class="btns-wrap" style={{ marginTop: "53px" }}>
                        <Button
                          className="btn-create"
                          onClick={() => createNewField2()}
                        >
                          Add new
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div
                    className="d-flex justify-content-between flex-wrap"
                    style={{ width: "60%" }}
                  >
                    {fieldArray2.map((source) => (
                      <div
                        className="position-relative"
                        style={{ width: "50%", marginBottom: 10 }}
                      >
                        <Input className="time-d3" value="Email" />
                        <img
                          src={CrossIcon}
                          className="position-absolute cross-align"
                          height="15px"
                          style={{
                            right: "13%",
                            top: "11px",
                          }}
                          alt=""
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="operational-hours-wrap">
                  <div className="operational-heading d-flex justify-content-between">
                    <h1> Business Operational Hours</h1>
                    <Button className="btn-update">Update</Button>
                  </div>

                  <div className="d-flex inner-container">
                    <div style={{ width: "33%" }}>
                      <p className="t2">Time Zone </p>
                      <Input
                        className="time-d3"
                        value=""
                        style={{ marginTop: "30px" }}
                      />
                    </div>

                    <div style={{ width: "40%" }}>
                      <p className="t2">Bussiness hours from </p>
                      <div className="d-flex" style={{ marginTop: "20px" }}>
                        <TimePicker bordered={false} className="time-d3" />
                        <RangePicker bordered={false} className="time-d3" />
                      </div>
                    </div>
                    <div style={{ width: "27%" }}></div>
                  </div>
                </div>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default TicketSetting;
