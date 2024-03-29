import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Writers from './Writers';
import { NotFound } from './Errors';
import Layout from '../Components/Layout'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      writers: []
    }
  }

  /*  componentDidMount(){
     fetch('http://localhost:3004/writers')
     .then(res => res.json())
     .then(writers => this.setState({
       writers
     }))
   } */

  async componentDidMount() {
    const writers = await (await fetch('http://localhost:3004/writers?_embed=texts')).json();
    console.log(writers);
    this.setState({ writers });
  }

  render() {
    const { writers } = this.state;

    return (
      <BrowserRouter>
        <Layout writers={writers}>
          {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/writers">Writers</Link>
            </li>
          </ul>

          <hr /> */}
          <Switch>
            <Route exact path="/" render={() => <div>Home</div>} />
            <Route path="/writers" render={
              (props) => <Writers {...props} writers={writers} />
            } />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
