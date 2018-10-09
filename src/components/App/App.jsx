<Router>
  <Fragment>
    <header className="mb-5"><MainMenu /></header>
    <Container tag="main">
      <Route exact={true} path="/" component={NewPost} />
      <Route path="/posts" exact={true} component={Posts} />
      <Route path="/posts/:postUrl" component={Post} />
    </Container>
    <Container tag="footer">
      {/* To be added later... */}
    </Container>
  </Fragment>
</Router>
