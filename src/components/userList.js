import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class UserList extends Component {
  componentWillMount(){
    this.props.fetchUsers();
  }

  renderUsers(user){
    return (
      <div className='card card-block'>
        <h4 className='card-title'>{user.name}</h4>
        <p className='card-text'>{user.company.name}</p>
        <a href={user.website} className='btn btn-primary'>Website</a>
      </div>
    );
  }

  render(){
    return (
      <div>
        <h5>Users</h5>
        <div className='userList'>
          {this.props.users.map(this.renderUsers)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, actions)(UserList);
