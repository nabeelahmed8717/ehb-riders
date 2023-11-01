import React, { useState } from 'react';
import { Form, Input, Button, Space, Row, Col } from 'antd';

import closeIcon from '../../../assets/icons/cross-small.svg'

const DeliveryMilestone = () => {
  const [form] = Form.useForm();
  const [fields, setFields] = useState<any>([
    { id: 1, miles: 2, deliveryFee: 50 },
    { id: 2, miles: 3, deliveryFee: 60 },
    { id: 3, miles: 4, deliveryFee: 60 },
  ]);

  const onFinish = (values: any) => {
    // Filter out null values and remove the 'id' property from the response
    const milestoneData = values.fields
      .filter((field: any) => field)
      .map(({ miles, deliveryFee }: any) => ({ miles, deliveryFee }));

    console.log('Received values:', milestoneData);
  };

  const addField = () => {
    const newId = fields[fields.length - 1].id + 1;
    setFields([...fields, { id: newId, miles: null, deliveryFee: null }]);
  };

  const removeField = (id: any) => {
    const updatedFields = fields.filter((field: any) => field.id !== id);
    setFields(updatedFields);
  };

  return (
    <Form
      form={form}
      name="dynamic-form"
      onFinish={onFinish}
      layout="vertical"
      rootClassName='global-form'
    >
      <Row>
        {fields.map((field: any, index: any) => (
          <Col key={field.id} sm={24} md={24} lg={14}>
            <div className='wrapper-fields-milestone'>
              <Row gutter={[20, 10]} >
                <Col xs={24} sm={24} md={10} lg={10}>
                  <Form.Item
                    name={['fields', field.id, 'miles']}
                    label="Miles"
                    initialValue={field.miles}
                    rules={[
                      {
                        required: true,
                        message: 'Please enter miles.',
                      },
                    ]}
                  >
                    <Input type="number" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={10} lg={10}>
                  <Form.Item
                    name={['fields', field.id, 'deliveryFee']}
                    label="Delivery Fee"
                    initialValue={field.deliveryFee}
                    rules={[
                      {
                        required: true,
                        message: 'Please enter the delivery fee.',
                      },
                    ]}
                  >
                    <Input type="number" prefix="Rs." />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={4} lg={4}>
                  <Button className='handel-remove-ent' disabled={fields.length > 1 ? false : true} onClick={() => removeField(field.id)}> <img src={closeIcon} width={20} height={20} alt="" /> </Button>
                </Col>
              </Row>
            </div>

          </Col>
        ))}

      </Row>
      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <Button type="dashed" onClick={addField}>
          Add Milestone
        </Button>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </div>
    </Form>
  );
};

export default DeliveryMilestone;
