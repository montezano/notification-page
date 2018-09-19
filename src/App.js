import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.redirectTo) {
    //         // this.context.router.replace(nextProps.redirectTo);
    //         store.dispatch(push(nextProps.redirectTo));
    //         this.props.onRedirect();
    //     }
    // }
    //
    // componentWillMount() {
    //     const token = window.localStorage.getItem('jwt');
    //     if (token) {
    //         agent.setToken(token);
    //     }
    //
    //     this.props.onLoad(token ? agent.Auth.current() : null, token);
    // }

    render() {
        if (this.props.appLoaded) {
            return (
                <div>
                    <Header
                        appName={this.props.appName}
                        currentUser={this.props.currentUser} />
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/editor/:slug" component={Editor} />
                        <Route path="/editor" component={Editor} />
                        <Route path="/article/:id" component={Article} />
                        <Route path="/settings" component={Settings} />
                        <Route path="/@:username/favorites" component={ProfileFavorites} />
                        <Route path="/@:username" component={Profile} />
                    </Switch>
                </div>
            );
        }
        return (
            <div>
                <Header
                    appName={this.props.appName}
                    currentUser={this.props.currentUser} />
            </div>
        );
    }
}

export default App;
