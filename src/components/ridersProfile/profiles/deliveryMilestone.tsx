import React, { useState } from 'react';
import { Form, Input, Button, Space } from 'antd';

const DeliveryMilestone = () => {
  const [form] = Form.useForm();
  const [fields, setFields] = useState<any>([]);

  const onFinish = (values:any) => {
    console.log('Received values:', values);
  };

  const addField = () => {
    setFields([...fields, { name: [], id: fields.length, miles: 0, deliveryFee: 0 }]);
  };

  const removeField = (id:any) => {
    setFields(fields.filter((field:any) => field.id !== id));
  };

  return (
    <Form form={form} name="dynamic-form" onFinish={onFinish}>
      <Space direction="vertical">
        {fields.map((field:any) => (
          <Space key={field.id}>
            <Form.Item
              name={['miles', field.id]}
              label="Miles"
              initialValue={field.miles}
              rules={[
                {
                  required: true,
                  message: 'Please enter miles.',
                },
                {
                  type: 'number',
                  message: 'Please enter a valid number for miles.',
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item
              name={['deliveryFee', field.id]}
              label="Delivery Fee"
              initialValue={field.deliveryFee}
              rules={[
                {
                  required: true,
                  message: 'Please enter the delivery fee.',
                },
                {
                  type: 'number',
                  message: 'Please enter a valid number for the delivery fee.',
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>
            <Button onClick={() => removeField(field.id)}>Remove</Button>
          </Space>
        ))}
        <Button type="dashed" onClick={addField} block>
          Add Milestone
        </Button>
      </Space>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default DeliveryMilestone;
