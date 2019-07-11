import React, { Component } from "react";

class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '1036036000837-9ds1io7c32ti6gfc74bdv3u2utb9htgr.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    }


    render() {
        return (
            <div></div>
        );
    }
}

export default GoogleAuth;