import React from 'react'
import { Col, Form, Input, Row, Tabs } from 'antd';
import '../ridersProfile.scss'

const MainProfile = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="profile-form-main">
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                rootClassName='global-form'
                layout="vertical">
                <Row gutter={[20, 20]}>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <Form.Item
                            label="Name"
                            name="Name"
                            rules={[{ required: true, message: 'Required field' }]}
                        >
                            <Input placeholder="Type here" style={{ width: '100%', height: '45px', backgroundColor: "#FCFBFF" }} readOnly />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <Form.Item
                            label="Email"
                            name="Email"
                            rules={[{ required: true, message: 'Required field' }]}
                        >
                            <Input placeholder="Type here" style={{ width: '100%', height: '45px', backgroundColor: "#FCFBFF" }} readOnly />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <Form.Item
                            label="Rider ID"
                            name="Rider ID"
                            rules={[{ required: true, message: 'Required field' }]}
                        >
                            <Input placeholder="Type here" style={{ width: '100%', height: '45px', backgroundColor: "#FCFBFF" }} readOnly />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <Form.Item
                            label="NIC / Passport"
                            name="NIC / Passport"
                            rules={[{ required: true, message: 'Required field' }]}
                        >
                            <Input placeholder="Type here" style={{ width: '100%', height: '45px', backgroundColor: "#FCFBFF" }} readOnly />
                        </Form.Item>
                    </Col>

                </Row>
            </Form>
        </div>
    )
}

export default MainProfile