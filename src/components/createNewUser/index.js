import React from 'react'
import '../../App.css'
import { connect } from 'react-redux'
import ImageUploader from 'react-images-upload';

class newUser extends React.Component {
  constructor() {
    super()
    this.state = {
      user: '',
      password: '',
      email: '',
      birdCall: '',
      picture: '',
      aboutMe: '',
      myBirds: '',
      birdsIWatch:'',
      base64TextString: '',
      pictures: [] 
    }

    this.onChange = this.onChange.bind(this)
    this.handlePictureChange = this.handlePictureChange.bind(this)
  }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//       .then(json => {
//         this.props.dispatch({
//           type: 'LOAD_POSTS',
//           payload: json
//         })
//       })
//   }

  onChange(e) {
    this.setState({ 
        [e.target.name]: e.target.value
     })
  }

  handlePictureChange(event){
      console.log("file to upload: ", event.target.files[0])
      let file = event.target.files[0]

      if (file){
        const reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(file);
      }  
    }
    _handleReaderLoaded = (readerEvt) => {
        let binaryString = readerEvt.target.result;
        this.setState({
            base64TextString: btoa(binaryString)
        })
    }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch({
      type: 'NEW_USER',
      payload: { 
        user: this.state.user,
        password: this.state.password,
        email: this.state.email,
        birdCall: this.state.birdCall,
        aboutMe: this.state.aboutMe,
        myBirds: this.state.myBirds,
        birdsIWatch:this.state.birdsIWatch,
        picture: this.state.base64
        }
      })
    }

  onFileSubmit = (e) => {
      e.preventDefault();
      const preview = document.getElementById('profile-picture');
      console.log("binary string: ", this.state.base64TextString)

      let payload = {image: this.state.base64TextString}
      preview.src = "data:image/png;base64," + this.state.base64TextString
    }

  render() {
    console.log(this.state.pictures)
    return (
        <div className="col-6">
            <div className="login-div">
                <h3 className="text-center">Log in to Squawk</h3>
                <form onSubmit={this.handleSubmit}>
                    User: <input
                    type="text" name="user"
                    value={this.state.user}
                    onChange={(e) => this.onChange(e)}
                    /><br></br>
                    Password: <input
                    type="password" name="password"
                    value={this.state.password}
                    onChange={(e) => this.onChange(e)}
                    /><br></br>
                    Email: <input
                    type="email" name="email"
                    value={this.state.email}
                    onChange={(e) => this.onChange(e)}
                    /><br></br>
                    About me: <textarea
                    type="text" name="aboutMe"
                    value={this.state.aboutMe}
                    onChange={(e) => this.onChange(e)}
                    /><br></br>
                    Bird Call: <textarea
                    type="text" name="birdCall"
                    value={this.state.birdCall}
                    onChange={(e) => this.onChange(e)}
                    /><br></br>
                    My Birds: <textarea
                    type="text" name="myBirds"
                    value={this.state.myBirds}
                    onChange={(e) => this.onChange(e)}
                    />     <br></br>
                    Birds I Watch: <textarea
                    type="text" name="birdsIWatch"
                    value={this.state.birdsIWatch}
                    onChange={(e) => this.onChange(e)}
                    />     <br></br>                                
                    <div>
                    <button type="submit">
                        Submit
                    </button>
                    </div>
                </form><br></br>
                <form onSubmit={(event) => this.onFileSubmit(event)} onChange={(event) => this.handlePictureChange(event)}>
                    <input
                        type="file"
                        name="image"
                        id="file"
                        accept=".jpeg, .png, .jpg"
                    />
                    <input type="submit"/>
                </form>

                <div>
                    <a><h5>Create New Account</h5></a>
                    {this.props.isLogged ? <h3>You are logged in</h3> : ''}
                      <img id="profile-picture"/>
                      <p>{this.state.user}</p>
                      <p>{this.state.password}</p>
                      <p>{this.state.email}</p>
                      <p>{this.state.birdCall}</p>
                      <p>{this.state.aboutMe}</p>
                      <p>{this.state.myBirds}</p>
                      <p>{this.state.birdsIWatch}</p>
                </div>
            </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts, isLogged: state.isLogged }
}

const mapDispatchToProps = (dispatch) => {
  return { dispatch }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(newUser)