import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';
import {SYSTEM_LINK} from "@/constant";

const Footer: React.FC = () => {
  const defaultMessage = "苏御出品";
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      style={{
        background: 'none',
      }}
      links={[
        {
          key: 'planet',
          title: '优质平台',
          href: SYSTEM_LINK,
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined /> 苏御 GitHub </>,
          href: 'https://github.com/Atopos-suyu',
          blankTarget: true,
        },
        {
          key: 'team',
          title: '校园团队',
          href: 'https://apps.youkeda.com/',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
