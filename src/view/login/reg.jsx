import React from 'react'
import { Form, Input, Button, Row,Col} from 'antd';
import { UserOutlined,LockOutlined } from '@ant-design/icons';
import {validate_pwd,validate_phone} from '../../utils/validate'
class RegForm extends React.Component {
    constructor(props){
        super(props);
        this.changeForm=this.changeForm.bind(this);
        this.onFinish=this.onFinish.bind(this);
        this.onFinishFailed=this.onFinishFailed.bind(this);
    }
    changeForm(){
        this.props.siwtchformtype('login')
    }
    onFinish(values){
        console.log('Success:', values);
    };
    onFinishFailed(errorInfo){
        console.log('Failed:', errorInfo);
    };
    render(){
    return (
        <div className="form-wrap">
          <div className="form-box">
            <div className="title-form">
                <h3>注册</h3>
                <span className="link-change-type" onClick={this.changeForm}>登录</span>
            </div>
            <div className="form-content">
                <Form name="basic" initialValues={{remember: true,}} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
                    <Form.Item name="username"
                        rules={[
                            {
                                pattern: validate_phone,
                                message: '请输入11位手机号码',
                            },
                        ]}
                    >
                        <Input placeholder="请输入11位手机号码" prefix={<UserOutlined />} />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                        {
                            pattern: validate_pwd,
                            message: '请输入8-20位数字及大小写字母组合',
                        }
                        ]}
                    >
                        <Input.Password  placeholder="请输入8-20位数字及大小写字母组合" prefix={<LockOutlined />} />
                    </Form.Item>
                    <Form.Item
                        name="confirm"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                        {
                            required: true,
                            message: '请再次输入密码',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject('两次密码不一致');
                            },
                        }),
                        ]}
                    >
                        <Input.Password  placeholder="请再次输入密码" prefix={<LockOutlined />} />
                    </Form.Item>
                    <Form.Item
                        name="code"
                        rules={[
                        {
                            required: true,
                            message: '请输入验证码',
                        },
                        ]}
                    >
                        <Row gutter={16}>
                            <Col span={16}><Input  placeholder="验证码" prefix={<LockOutlined />} /></Col>
                            <Col span={8}><Button className="btn-send-yzm" type="primary" danger block>发送验证码</Button></Col>
                        </Row>
                    </Form.Item>
                    <Form.Item >
                    <Button type="primary" htmlType="submit" block>登录</Button>
                </Form.Item>
                </Form>
            </div>
          </div>
      </div>
    )
  }
}

export default RegForm;