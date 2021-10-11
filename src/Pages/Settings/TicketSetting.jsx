import React from "react";
import Layout from "Layout/Index";
import { Tabs } from "antd";
function TicketSetting(props) {
  const { TabPane } = Tabs;
  return (
    <div>
      <Layout title="Ticket Settings">
        <div className="main-wrapper">
          <div className="ticket-settings">
            <Tabs defaultActiveKey="1">
              <TabPane tab="SLA" key="1">
                <div className="d-flex">
                  <p className="t1">High priority</p>
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
