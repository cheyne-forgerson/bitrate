class Prices extends React.Component {
    state = {
        currency: 'USD'
    }

    render() {
     
        return (
          <div>
            <ul className="list-group">
                <li className="list-group-item">
                    <h6>Bitcoin rate for</h6>
                    <h6>{this.props.bpi[this.state.currency].description}:</h6>
                    <br/>
                    <span className="badge badge-primary"> {this.props.bpi[this.state.currency].code} </span> 
                    <strong> {this.props.bpi[this.state.currency].rate} </strong>
                </li>
            </ul>
            <br/>
            <select onChange={e => this.setState({currency: e.target.value})} className="form-control">
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="EUR">EUR</option>
            </select>
          </div>
        );
    }
}

export default Prices;