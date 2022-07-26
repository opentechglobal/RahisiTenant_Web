import React from 'react';
import Head from 'next/head';

import { withAuthSync } from '../../../authentication/auth.utils';
import DashboardLayout from '../../../containers/DashboardLayout/DashboardLayout';
import Widgets from '../../../containers/Widgets/Widgets';

export default withAuthSync(() => (
  <>
    <Head>
      <title>RahisiTenant - Dashboard</title>
    </Head>
    <DashboardLayout>
      <Widgets />
    </DashboardLayout>
  </>
));
