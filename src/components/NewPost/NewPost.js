export default class NewPost extends Component {

   state = {
      title: '',
      blogtext: '',
      _id: ''
   }

  async start() {
    this.createStoreConnectedProperties({
      blogPosts: [],
    });
  }

  save = () => {
    const id = this.state.title.replace(/(å|ä|ö|\W)/g, '') + Math.floor(Math.random() * 1000);
    this.blogPosts.push({...this.state, _id: id});
    Object.keys(this.state).forEach(key =>
      this.setState({[key]: ''})
    );

  }

  onChangeInput = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value});
  }

}
