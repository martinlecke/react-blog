import './Post.scss';

export default class Post extends Component {

  async start() {
    this.post = toJS(this.stores.NewPost.blogPosts)
      .find((post) => {
        return post._id === this.props.match.params.postUrl
      });
  }
}
