<Navbar light expand="md">
  <NavbarBrand href="/">Blog engine</NavbarBrand>
  <NavbarToggler onClick={this.toggle} />
  <Collapse isOpen={this.props.collapseOpen} navbar>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink to="/" exact={true} activeClassName="active">New Post</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/posts" activeClassName="active">All Posts</NavLink>
      </NavItem>
    </Nav>
  </Collapse>
</Navbar>
