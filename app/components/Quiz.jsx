import React from 'react';
import { browserHistory } from 'react-router';
import { FlatButton, RaisedButton, TextField } from 'material-ui';
import { Card } from 'material-ui/Card';
import Statements from './Statements.jsx';
import Version from './Version.jsx';

const statements = [
  {id: 'statement1',
    text: 'My direct manager gives me necessary support and clear objectives.'},
  {id: 'statement2',
  text: 'I feel like I have a healthy work/life balance.' },
  {id: 'statement3', text: 'I feel comfortable working and interacting with the colleagues on my team.'},
  {id: 'statement4', text: 'I am satisfied with my roles and responsibilities.'},
  {id: 'statement5', text: 'I like my work environment, and I believe it helps me perform at my best.'}];

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      version: 0,
      statement1: 0,
      statement2: 0,
      statement3: 0,
      statement4: 0,
      statement5: 0,
      feedback: '',
      button: true
    };
    this.handleStarChange = this.handleStarChange.bind(this);
    this.handleFeedbackChange = this.handleFeedbackChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({version: this.props.location.query.v});
  }

  handleStarChange (nextVal, prevVal, name) {
    if (name === 'statement5') {
      this.setState({[name]: nextVal, button: false});
    } else {
      this.setState({ [name]: nextVal });
    }
  }

  handleFeedbackChange (e) {
    this.setState({feedback: e.target.value});
  }

  handleSubmit () {
    browserHistory.push('/quiz/submit');
  }

  render (){
    return (
      <div className="quiz" >
        <div className="support-btn" >
          <FlatButton href="http://support.butterfly.ai" />
        </div>
        <div className="rating-header">
          <Version version={this.state.version} />
        </div>
        <div className="statements" >
          <h2>Do you agree with the following statements:</h2>
          {
            statements.map(statement => (
              <Statements statement={statement.text} id={statement.id} handleStarChange={this.handleStarChange} handleFeedbackChange={this.handleFeedbackChange} key={statement.id} />
            ))
          }
        </div>
        <div>
          <Card>
            <TextField
            hintText="Please add additional feedback here."
            multiLine={true}
            rows={2}
            rowsMax={4}
            onChange={this.handleFeedbackChange}
            />
          </Card>
        </div>
        <div>
          <RaisedButton disabled={this.state.button} primary={true} label="Submit" onClick={this.handleSubmit.bind(this)} />
        </div>
      </div>
    );
  }
}

export default Quiz;
