import 'antd/dist/antd.min.css';
import { Menu, Switch, Button, Form, Input, GithubOutlined } from 'antd';
import './index.css';
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 }
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 }
};
const Login = () => {
  return (
    <div className="login">
      <i style={{ textAlign: 'center' }}>^_^😊</i>
      <Form {...layout}>
        <Form.Item label="昵称">
          <Input placeholder="请输入昵称" />
        </Form.Item>
        <Form.Item label="密码">
          <Input placeholder="请输入密码" />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            登陆
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
