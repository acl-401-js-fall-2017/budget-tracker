import React, { PureComponent } from 'react';

export default class CategoryForm extends PureComponent {

  static defaultProps = {
    text: 'Add'
  }

  constructor(props) {
    super(props);
    const { category = {} } = props;
    this.state = {
      name: category.name || '',
      budget: category.budget || '',
      _id: category._id || '',
      timestamp: category.timestamp 
    };
  }
  
  handleSubmit = event => {
    event.preventDefault();
    const { name, budget, _id } = this.state;
    this.props.onComplete({ name, budget, _id });
  }

  handleChange = ({ target: input }) => {
    this.setState({
      [input.name]: input.value
    });
  }

  render() {
    const { name, budget } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="columns">
          <div className="column is-third">
            Name: <input name="name" value={name} onChange={this.handleChange}/>
          </div>

          <div className="column is-third">
            Budget: <input name="budget" value={budget} onChange={this.handleChange}/>
          </div>
          <div className="column"><button type="submit">{this.props.text}</button></div>
        </div>
      </form>
    );
  }
}