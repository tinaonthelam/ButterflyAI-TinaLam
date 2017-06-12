import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default function App ({children}) {
  return (
    <MuiThemeProvider>
      {children}
    </MuiThemeProvider>
  );
}
