import React from 'react'
import CreateForm from '../category-form'

class CategoryItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  handleDelete(e) {
    console.log(this.props)
  }

  toggleEdit() {
    this.setState({editing: !this.state.editing})
  }

  render() {
    return (
      <li onDoubleClick={this.toggleEdit}>
        {this.state.editing ? 
          <CreateForm 
            buttonText="update category"
            onComplete={this.props.onComplete}
            category={this.props.category}
            toggle={this.toggleEdit}/> :
          <div>
            <button onClick={this.handleDelete}>x</button>
            <p>{this.props.category.name}</p>
            <p>{this.props.category.budget}</p>
          </div>
        }
      </li>
    )
  }
}

export default CategoryItem