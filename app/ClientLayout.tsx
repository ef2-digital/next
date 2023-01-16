'use client';

import { ThemeProvider } from '@ef2/react';
import { PropsWithChildren } from 'react';
import theme from 'theme';

const ClientLayout = ({ children }: PropsWithChildren) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ClientLayout;
