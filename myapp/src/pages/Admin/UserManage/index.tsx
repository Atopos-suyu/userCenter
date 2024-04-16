import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable, TableDropdown } from '@ant-design/pro-components';
import { useRef } from 'react';
import {Button} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {API} from "@/services/ant-design-pro/typings";
import {searchUsers} from "@/services/ant-design-pro/api";
import { Avatar, Space, Tag } from 'antd';

export const waitTimePromise = async (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const waitTime = async (time: number = 100) => {
  await waitTimePromise(time);
};

  const columns: ProColumns<API.CurrentUser>[] = [
    {
      dataIndex: 'id',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: '用户名',
      dataIndex: 'username',
      copyable: true,
    },
    {
      title: '用户账户',
      dataIndex: 'userAccount',
      copyable: true,
    },
    {
      disable: true,
      title: '头像',
      dataIndex: 'avatar',
      search: false,
      align: 'center',
      renderFormItem: (_, {defaultRender}) => {
        return defaultRender(_);
      },
      render: record => (
        <Space>
          <Avatar size={64} src={record?.toString()}/>
        </Space>
      )
    },
    {
      title: '性别',
      dataIndex: 'gender',
    },
    {
      title: '电话',
      dataIndex: 'phone',
      copyable: true,
    },
    {
      title: '邮件',
      dataIndex: 'email',
      copyable: true,
    },
    {
      title: '状态',
      dataIndex: 'userStatus',
    },
    {
      title: '星球编号',
      dataIndex: 'planetCode',
    },
    {
      dataIndex: 'role',
      title: '角色',
      align: 'center',
      renderFormItem: (_, {defaultRender}) => {
        return defaultRender(_);
      },
      render: record => (
        <Space>
          {record === 1 ? (
            <Tag color="#f50">管理员</Tag>
          ) : (
            <Tag color="#2db7f5">普通用户</Tag>
          )}{' '}
        </Space>
      )
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      valueType: 'dateTime',
    },
    {
      title: '操作',
      valueType: 'option',
      key: 'option',
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          编辑
        </a>,
        <TableDropdown
          key="actionGroup"
          onSelect={() => action?.reload()}
          menus={[
            {key: 'copy', name: '复制'},
            {key: 'delete', name: '删除'},
          ]}
        />,
      ],
    },
  ];

  export default () => {
    const actionRef = useRef<ActionType>();
    return (
      <ProTable<API.CurrentUser>
        columns={columns}
        actionRef={actionRef}
        cardBordered
        request={async (params, sort, filter) => {
          console.log(sort, filter);
          await waitTime(2000);
          const {data:userList} = await searchUsers();
          return {
            data: userList,
          };
        }}
        editable={{
          type: 'multiple',
        }}
        columnsState={{
          persistenceKey: 'pro-table-singe-demos',
          persistenceType: 'localStorage',
          defaultValue: {
            option: {fixed: 'right', disable: true},
          },
          onChange(value) {
            console.log('value: ', value);
          },
        }}
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        options={{
          setting: {
            listsHeight: 400,
          },
        }}
        form={{
          // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
          syncToUrl: (values, type) => {
            if (type === 'get') {
              return {
                ...values,
                created_at: [values.startTime, values.endTime],
              };
            }
            return values;
          },
        }}
        pagination={{
          pageSize: 5,
          onChange: (page) => console.log(page),
        }}
        dateFormatter="string"
        headerTitle="高级表格"
        toolBarRender={() => [
          <Button
            key="button"
            icon={<PlusOutlined/>}
            onClick={() => {
              actionRef.current?.reload();
            }}
            type="primary"
          >
            新建
          </Button>
        ]}
      />
    );
  };
