<Fragment>
  <h1>All Posts</h1>
  {this.stores.NewPost && toJS(this.stores.NewPost.blogPosts).map((post, i) => {
    return <Blogpost _id={post._id} title={post.title} blogtext={post.blogtext} key={i} />
  })}
  <button onClick={()=> delete localStorage.store}>Delete storage</button>
</Fragment>
