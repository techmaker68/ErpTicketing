import {
  Col,
  Row,
  Form,
  Input,
  InputNumber,
  DatePicker,
  Select,
  Upload,
  message,
} from "antd";
import React from "react";
import DatePickerIcon from "Assets/icons/datepicker.svg";
import SelectArrowDownIcon from "Assets/icons/selectarrowdown.svg";

const {Option} = Select;
const {Dragger} = Upload;
function BankTransfer() {
  const props = {
    name: "file",
    onChange(info) {
      const {status} = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
    beforeUpload: (file) => {
      return false;
    },
  };
  return (
    <>
      <Row gutter={24}>
        <Col xs={24} lg={8}>
          <Form.Item label='Invoice Upload'>
            <Dragger {...props} className='primary-upload-dragger'>
              <p className='ant-upload-drag-icon'></p>
              <p className='ant-upload-text f-12 fw-500'>
                Drag & drop file to upload
                <p className=' f-12'>Or</p>
                <u className='f-12 fw-500 color-info'>Browse</u>
              </p>
            </Dragger>
          </Form.Item>
        </Col>
        <Col xs={24} lg={16}>
          <Row gutter={24}>
            <Col xs={24} lg={12}>
              <Form.Item label='From Account Number'>
                <InputNumber className='primary-input-number' />
              </Form.Item>
            </Col>
            <Col xs={24} lg={12}>
              <Form.Item label='To Account Number'>
                <Input className='primary-input' />
              </Form.Item>
            </Col>
            <Col xs={24} lg={12}>
              <Form.Item label='Bank Name'>
                <Select
                  suffixIcon={<img src={SelectArrowDownIcon} alt='' />}
                  className='primary-select-option'
                >
                  <Option>Ahmad bilaar bin Abdul Aziz</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} lg={12}>
              <Form.Item label='Amount'>
                <Input
                  className='primary-input'
                  suffix={<span className='input-domain-suffix'>SAR</span>}
                />
              </Form.Item>
            </Col>
            <Col xs={24} lg={12}>
              <Form.Item label='Received By'>
                <Select
                  suffixIcon={<img src={SelectArrowDownIcon} alt='' />}
                  className='primary-select-option'
                >
                  <Option>Ahmad bilaar bin Abdul Aziz</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} lg={12}>
              <Form.Item label='Payment Date'>
                <DatePicker
                  clearIcon={false}
                  suffixIcon={<img src={DatePickerIcon} alt='' />}
                  className='primary-date-picker'
                />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default BankTransfer;