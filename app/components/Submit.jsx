import React from 'react';
import {Card, CardHeader} from 'material-ui/Card';

const Submit = (props) => {
  return (
    <div id="submit-page">
      <Card>
        <CardHeader
          title="Thank you!"
          subtitle="Your feedback has been sent. Have a lovely day."
        />
      </Card>
    </div>
  );
};

export default Submit;
