import { Form, Input, Button, Layout } from "antd";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { AppDispatch } from "../../../store";
import { setUser } from "../../../store/userSlice";

const { Content } = Layout;

export const Login = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  const dispatch = useDispatch<AppDispatch>();

  const onFinish = (values: any) => {
    setTimeout(() => {
      dispatch(setUser(values));
      history.push("/");
    }, 1000);
  };

  return (
    <Content className="page-login">
      <div className="login-form-wrapper">
        <h2 className="login-title">Login</h2>
        <Form
          name="login"
          layout="vertical"
          form={form}
          autoComplete="off"
          className="login-form"
          initialValues={{ username: "admin", password: "123456" }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item noStyle shouldUpdate>
            {() => (
              <Button
                type="primary"
                htmlType="submit"
                disabled={
                  !!form.getFieldsError().filter(({ errors }) => errors.length)
                    .length
                }
              >
                Submit
              </Button>
            )}
          </Form.Item>
        </Form>
      </div>
    </Content>
  );
};
