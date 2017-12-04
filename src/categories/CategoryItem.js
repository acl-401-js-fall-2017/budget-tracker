import { removeCategory, updateCategory, loadExpenses } from '../categories/actions';
import React, { PureComponent } from 'react';
import CategoryForm from './CategoryForm';
import { connect } from 'react-redux';

class CategoryItem extends PureComponent {
  
  handleUpdate = category => event => {
    event.preventDefault();
    const update = {
      ...category,
      name: event.target.name.value,
      budget: event.target.budget.value
    }
    this.props.updateCategory(update);
  }
  
  handleRemove = id => this.props.removeCategory(id);
  loadExpenses = id => this.props.loadExpenses(id);

  render() {
    const { category } = this.props;
    return (
      <div>
        <h1>{category.name}</h1>
        <p>Budget - {category.budget}</p>
        <CategoryForm onComplete={this.handleUpdate(category)} buttonText={'edit'}/>
        <input type="button" value="remove" onClick={() => this.handleRemove(category._id)}/>
        <input type="button" value="show expenses" onClick={() => this.loadExpenses(category._id) }/>
      </div>
    );
  }
}


const connectedCategoryItem = connect(
  null, 
  { removeCategory, updateCategory, loadExpenses }
)(CategoryItem);

export default connectedCategoryItem;