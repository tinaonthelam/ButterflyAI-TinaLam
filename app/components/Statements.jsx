import React from 'react';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import { FlatButton } from 'material-ui';
import StarRatingComponent from 'react-star-rating-component';

const Statements = ({ statement, id, handleStarChange }) => {
  return (
    <div className="statement" >
      <Card>
        <CardHeader
          title={statement}
          titleStyle={{color: '#757575', fontSize: 'x-large', fontFamily: 'Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif'}}
        />
        <StarRatingComponent
            name={id}
            starCount={5}
            onStarClick={handleStarChange}
        />
        <CardActions>
          <FlatButton label="Add Feedback Below" />
        </CardActions>
      </Card>
    </div>
  );
};

export default Statements;
