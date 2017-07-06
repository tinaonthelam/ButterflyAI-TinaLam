import React from 'react';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import { FlatButton } from 'material-ui';
import StarRatingComponent from 'react-star-rating-component';

const Statements = ({ statement, id, handleStarChange }) => {
  return (
    <div>
      <Card>
        <CardHeader
          title={statement}
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
