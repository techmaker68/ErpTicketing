import React from "react";
import Layout from "Layout/Index";
import { Tabs, Button } from "antd";
function TicketSetting(props) {
  const { TabPane } = Tabs;
  return (
    <div>
      <Layout title="Ticket Settings">
        <div className="main-wrapper">
          <div className="ticket-settings">
            <Tabs defaultActiveKey="1">
              <TabPane tab="SLA" key="1">
                <div className="d-flex justify-content-between">
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
                      <Button className="btn-create">Update</Button>
                    </div>
                  </div>
                </div>

                <div className="response-time-wrap reminder-high-periority">
                  <div>
                    <p className="t1">First </p>
                    <div className="time-d">
                      <p className="t3">1d 2hrs</p>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="General" key="2">
                Content of Tab Pane 2
              </TabPane>
            </Tabs>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default TicketSetting;
