import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
  }

  updateTitle(e) {
    this.setState({ title: e.target.value });
  }
  
  updateBody(e) {
    this.setState({ body: e.target.value });
  }

  render () {
    return (
      <div>
        <form onSubmit={ () => this.props.action(this.state) }>
          <input onChange={ this.updateTitle.bind(this) } type='text' value={ this.state.title }></input>
          <textarea onChange= { this.updateBody.bind(this) } value={ this.state.body }>Body</textarea>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
