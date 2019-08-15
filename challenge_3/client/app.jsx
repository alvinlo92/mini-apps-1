class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleCheckoutButton = this.handleCheckoutButton.bind(this);
    this.handleCreateAccountNextButton = this.handleCreateAccountNextButton.bind(this);
    this.handleShippingAddressNextButton = this.handleShippingAddressNextButton.bind(this);
    this.handleCreditCardNextButton = this.handleCreditCardNextButton.bind(this);
    this.state = {
      currentPage: 'checkout',
      accountForm: {
        name: null,
        email: null,
        password: null
      },
      shippingForm: {
        address1: null,
        address2: null,
        city: null,
        state: null,
        zipCode: null
      },
      creditCardForm: {
        cardNum: null,
        expDate: null,
        cvv: null,
        zipCode: null
      }
    };
  }

  handleCheckoutButton() {
    this.setState({
      currentPage: 'account'
    })
  }

  handleCreateAccountNextButton() {
    this.setState({
      currentPage: 'shipping',
      accountForm: {
        name: name,
        email: email,
        password: password
      }
    })
  }

  handleShippingAddressNextButton() {
    this.setState({
      currentPage: 'credit'
    })
  }

  handleCreditCardNextButton() {
    this.setState({
      currentPage: 'checkout'
    })
  }

  // componentDidMount() {
  //   return fetch('/create-account', {
  //     method: 'POST',
  //     body: JSON.stringify(this.state.accountForm),
  //     headers:{
  //       'Content-Type': 'application/json'
  //     }
  //   }).then(res => res.json())
  //   .then(response => console.log('Success:', JSON.stringify(response)))
  //   .catch(error => console.error('Error:', error));
  // }
  
  render() {
    const currentPage = this.state.currentPage;
    let page;

    if (currentPage === 'checkout') {
      page = <CheckoutPage handleCheckoutButton={this.handleCheckoutButton}/>
    } else if (currentPage === 'account') {
      page = <CreateAccountForm handleCreateAccountNextButton={this.handleCreateAccountNextButton}/>
    } else if (currentPage === 'shipping') {
      page = <ShippingAddressForm handleShippingAddressNextButton={this.handleShippingAddressNextButton}/>
    } else if (currentPage === 'credit') {
      page = <CreditCardForm handleCreditCardNextButton={this.handleCreditCardNextButton}/>
    }

    return (
      <div>
        {page}
      </div>
    );
  }
}

const CheckoutPage = ({ handleCheckoutButton }) => {
  return (
    <div>
      <h3>Ready to checkout? </h3>
      <button
        value='Next'
        onClick={() => handleCheckoutButton()}
      >Checkout 🛒</button>
    </div>
  )
}

// F1 collects name, email, and password for account creation.
const CreateAccountForm = ({ handleCreateAccountNextButton }) => {
  return (
    <div>
      <div>{console.log(handleCreateAccountNextButton)}</div>
      <h3>Create an Account</h3>
      <form>
        <label>
          Name:
          <input
            type='text'
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type='email'
          />
        </label>
        <br />
        <label>
          Password:
          <input 
            type='password'
          />
        </label>
        <br />
        <label>
          <input
            type='submit'
            value='Next'
            onClick={() => handleCreateAccountNextButton()}
          />
        </label>
      </form>
    </div>
  );
}

// F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
const ShippingAddressForm = ({ handleShippingAddressNextButton }) => {
  return (
    <div>
      <h3>Shipping Address</h3>
      <form>
        <label>
          Address Line 1:
          <input
            type='text'
          />
        </label>
        <br />
        <label>
          Address Line 1:
          <input
            type='text'
          />
        </label>
        <br />
        <label>
          City:
          <input
            type='text'
          />
        </label>
        <br />
        <label>
          State:
          <input
            type='text'
          />
        </label>
        <br />
        <label>
          Zip Code:
          <input
            type='number'
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type='tel'
          />
        </label>
        <br />
        <label>
          <input
            type='submit'
            value='Next'
            onClick={() => handleShippingAddressNextButton()}
          />
        </label>
      </form>
    </div>
  )
}

// F3 collects credit card #, expiry date, CVV, and billing zip code.
const CreditCardForm = ({ handleCreditCardNextButton }) => {
  return (
    <div>
      <h3>Credit Card Information</h3>
      <form>
        <label>
          Card Number:
          <input
            type='number'
          />
        </label>
        <br />
        <label>
          Expiration Date:
          <input
            type='month'
          />
        </label>
        <br />
        <label>
          CVV:
          <input
            type='number'
          />
        </label>
        <br />
        <label>
          Zip Code:
          <input
            type='number'
          />
        </label>
        <br />
        <label>
          <input
            type='submit'
            value='Purchase'
            onClick={() => handleCreditCardNextButton()}
          />
        </label>
      </form>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));