import React, { Component } from 'react';
import App from './App';

class Login extends Component {
    constructor(props) {
        super(props);
        const { clientId, clientSecret } = this.props;
        this.state = {
            clientId,
            clientSecret
        };
    }

    onClick() {
        const clientId = this.clientIdInput.value;
        const clientSecret = this.clientSecretInput.value;
        localStorage.setItem('clientId', clientId);
        localStorage.setItem('clientSecret', clientSecret);
        location.href = `https://account.box.com/api/oauth2/authorize?response_type=code&client_id=${clientId}`
    }

    onChange({ target: { name, value } }) {
        this.setState({
            [name]: value
        });
    }

    render() {
        const { clientId, clientSecret } = this.state;
        return (
            <App className='login'>
                <div className='loginInput'>
                    <label>
                        <div>Client ID</div>
                        <input
                            name='clientId'
                            type='text'
                            ref={(input) => this.clientIdInput = input}
                            value={clientId}
                            onChange={this.onChange.bind(this)}
                        />
                    </label>
                </div>
                <div className='loginInput'>
                    <label>
                        <div>Client Secret</div>
                        <input
                            name='clientSecret'
                            type='text'
                            ref={(input) => this.clientSecretInput = input}
                            value={clientSecret}
                            onChange={this.onChange.bind(this)}
                        />
                    </label>
                </div>
                <button
                    type='button'
                    className='buik-btn buik-btn-primary'
                    onClick={this.onClick.bind(this)}
                >
                    Authorize
                </button>
            </App>
        );
    }
}

export default Login;
