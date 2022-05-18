import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionFetchApi } from '../actions/index';

class Wallet extends React.Component {
  componentDidMount() {
    const { getApi } = this.props;
    getApi();
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <h2>TrybeWallet</h2>
        <p data-testid="email-field">{`Email:${email}`}</p>
        <p data-testid="total-field">Despesa total: 0</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  getApi: () => dispatch(actionFetchApi()),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  getApi: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
