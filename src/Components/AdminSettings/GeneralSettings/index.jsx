import CameraIcon from "Assets/icons/camera.svg";
import {Button, Form, Input, InputNumber, Card, message} from "antd";
import {UseAxios} from "Hooks/useAxios";
import {useState} from "react";
import Http from "Http";

const Index = () => {
  const staticCardsData = [
    {heading: "Trial Period", key: "trialPeriod", unit: "Days"},
    {heading: "VAT %", key: "vat", unit: "%"},
  ];

  const [configuration, setConfiguration] = useState([
    {key: "trialPeriod", value: 0},
    {key: "vat", value: 0},
  ]);
  const [profile, setProfile] = useState(null);

  // Fetch Data - http request
  const {
    response: data,
    isLoading,
    error,
  } = UseAxios({
    endpoint: `/BusinessInfo`, // setup base URL in UseAxios file.
    query: {}, // all the query strings in - {} object
    method: "get", // http request method
    deps: [], // dependency state variable which trigger re-render.
    successMessage: "", // success message
  });

  // update conf in state
  const handleConfChange = (value, index) => {
    if (value) {
      const data = [...configuration];
      data[index].value = value;
      setConfiguration(data);
    }
  };

  // update conf in DB - http request
  const handleConfUpdate = (index) => {
    Http.put(`/configurations/${configuration[index].key}`)
      .then((res) => {
        message.success("Updated successfully");
      })
      .catch((err) => message.error("Something went wrong, please try again"));
  };

  // update profile image

  const handleProfileChange = ({target}) => {
    setProfile(target.files[0]);
  };

  return (
    <div className='page-card business-info-wrapper mt-20'>
      <Card bordered={false} loading={isLoading}>
        <Form layout='vertical' initialValues={data}>
          {
            // general settings
          }
          <div className='page-card-header'>
            {
              // breadcrumbs
            }
            <span className='mt-0 f-16 fw-600'>General Settings</span>
          </div>

          <div className='general-setting-wrapper'>
            {staticCardsData.map((card, index) => (
              <div key={card.key} className='card-gs'>
                <h1 className='f-16 fw-600'>{card?.heading}</h1>
                <p className='f-12 fw-500'>Change Trial Duration</p>
                <div className='d-flex align-items-center'>
                  <InputNumber
                    className='primary-input-number'
                    value={configuration[index].value}
                    onChange={(value) => handleConfChange(value, index)}
                  />
                  <span className='ml-10 fw-500'>{card?.unit}</span>

                  <u
                    onClick={() => handleConfUpdate(index)}
                    className='color-primary f-16 fw-500 d-inline-block'
                  >
                    Save Changes
                  </u>
                </div>
              </div>
            ))}
          </div>

          {
            // general details
          }
          <div className='page-card-header'>
            {
              // breadcrumbs
            }
            <span className='mt-0 f-16 fw-600'>Business Details</span>
          </div>
          {
            // content
          }
          <div className='business-profile'>
            <label htmlFor='profile'>
              <div
                className='profile'
                style={{
                  backgroundImage: `url(${
                    profile ? URL.createObjectURL(profile) : ""
                  })`,
                }}
              >
                {!profile && (
                  <>
                    <img src={CameraIcon} alt='' />
                    <p>Add Logo</p>
                  </>
                )}
              </div>
              <input
                type='file'
                className='d-none'
                id='profile'
                onChange={handleProfileChange}
              />
            </label>
          </div>

          <div className='general-details'>
            <h1 className='f-14 fw-500 color-gray'> General Details</h1>
            <div className='d-flex'>
              <Form.Item
                label='Seller Name (Arabic)'
                className='mr-24'
                name='sellerNameArabic'
              >
                <Input className='primary-input' />
              </Form.Item>
              <Form.Item
                label='Seller Name (English)'
                className='mr-24'
                name='sellerNameEnglish'
              >
                <Input className='primary-input' />
              </Form.Item>
              <Form.Item label='Email' name='email'>
                <Input className='primary-input' />
              </Form.Item>
            </div>
            <div className='d-flex'>
              <Form.Item
                label='Business Name (Arabic)'
                className='mr-24'
                name='businessNameArabic'
              >
                <Input className='primary-input' />
              </Form.Item>
              <Form.Item
                label='Business Name (English)'
                className='mr-24'
                name='businessNameEnglish'
              >
                <Input className='primary-input' />
              </Form.Item>
              <Form.Item
                label='Business Tagline (Arabic)'
                className='mr-24'
                name='businessTagLineArabic'
              >
                <Input className='primary-input' />
              </Form.Item>
              <Form.Item
                label='Business Tagline (English)'
                name='businessTagLineEnglish'
              >
                <Input className='primary-input' />
              </Form.Item>
            </div>
            <div className='d-flex'>
              <Form.Item label='Mobile' className='mr-24' name='mobile'>
                <Input className='primary-input' />
              </Form.Item>
              <Form.Item label='Telephone' className='mr-24' name='telephone'>
                <Input className='primary-input' />
              </Form.Item>
            </div>
            <div className='d-flex'>
              <Form.Item label='District' className='mr-24' name='district'>
                <Input className='primary-input' />
              </Form.Item>
              <Form.Item label='City' className='mr-24' name='city'>
                <Input className='primary-input' />
              </Form.Item>
              <Form.Item
                label='Street Name (Arabic)'
                className='mr-24'
                name='streetNameArabic'
              >
                <Input className='primary-input' />
              </Form.Item>
              <Form.Item
                label='Street Name (English)'
                className='mr-24'
                name='streetNameEnglish'
              >
                <Input className='primary-input' />
              </Form.Item>
            </div>
            <div className='d-flex'>
              <Form.Item
                label='Postal Code'
                className='mr-24'
                name='postalCode'
              >
                <Input className='primary-input' />
              </Form.Item>
            </div>

            {
              //tax details
            }
            <h1 className='f-14 fw-500 color-gray mt-24'> Tax Details</h1>
            <div className='d-flex'>
              <Form.Item label='VAT Number' className='mr-24' name='vatNumber'>
                <Input className='primary-input' />
              </Form.Item>
              <Form.Item
                label='Group VAT Number'
                className='mr-24'
                name='groupVATNumber'
              >
                <Input className='primary-input' />
              </Form.Item>
              <Form.Item label='CR' className='mr-24' name='cr'>
                <Input className='primary-input' />
              </Form.Item>
            </div>
            {
              // action
            }
            <div className='d-flex justify-content-end align-items-center mt-16'>
              <Button className='default-button  btn-role mr-16'>Cancel</Button>
              <Button className='primary-button  btn-role'>Create Role</Button>
            </div>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Index;
