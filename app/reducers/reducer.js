import axios from 'axios';

const FETCH    = 'FETCH_STATEMENTS';

const setStatements   = statements => ({ type: FETCH, statements })

function reducer (statements = [], action) {
  switch (action.type) {
    case FETCH:
      return action.statements;
    default:
      return statements;
  }
}

export const fetchStatements = () => dispatch => {
  axios.get('/api/statements')
       .then(res => dispatch(setStatements(res.data)));
};

export default reducer;
