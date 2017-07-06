import React from 'react';
import { browserHistory } from 'react-router';
import { FlatButton, RaisedButton, TextField } from 'material-ui';
import { Card, CardHeader } from 'material-ui/Card';
import Statements from './Statements.jsx';
import Version from './Version.jsx';
import { fetchStatements } from '../reducers/reducer.js';
import axios from 'axios';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      version: 0,
      feedback: '',
      statements: [],
      button: true
    };
    this.handleStarChange = this.handleStarChange.bind(this);
    this.handleFeedbackChange = this.handleFeedbackChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({version: this.props.location.query.v});
  }

  // componentWillUpdate(nextProps) {
  //   console.log('hello in here', nextProps, this.state)
  //   if (nextProps.statements !== this.state.statements) {
  //     this.setState({statements: this.props.statements});
  //   }
  // }

  componentDidMount() {
    axios.get('/api/statements')
      .then(res => {
        console.log('res data', res.data)
        this.setState({ statements: res.data });
      });
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
    console.log(this.state)
    return (
      <div className="quiz-body">
        <div className="left-menu" >
           <div className="support-btn">
           <FlatButton href="http://support.butterfly.ai" style={{minWidth: '45px'}} />
           </div>

        </div>
        <div className="quiz" >

          <div className="rating-header">
            <Version version={this.state.version} />
          </div>
          <div className="statements" >
            <h4>Do you agree with the following statements:</h4>
            {
              this.state.statements && this.state.statements.map(statement => (
                <Statements statement={statement.text} id={statement.id} handleStarChange={this.handleStarChange} handleFeedbackChange={this.handleFeedbackChange} key={statement.id} />
              ))
            }
            <hr />
          </div>
          <div className="feedback" >
            <Card
              style={{backgroundColor: '#1b828e'}}>
              <CardHeader
                title="Anything to add?"
                titleStyle={{color: '#fff', fontSize: 'x-large', fontFamily: 'Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif'}}
              />
              <div className="circle">
              Extra Feedback Helps
              </div>

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
      </div>
    );
  }
}

/* ----- CONTAINER ----- */

import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    statements: state.statements
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStatements: () => {
      dispatch(fetchStatements());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
