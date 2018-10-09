<Fragment>
  <FormGroup>
    <Label for="title">Titel</Label>
    <Input name="title" value={this.state.title} onChange={this.onChangeInput} />
  </FormGroup>
  <FormGroup>
    <Label for="blogtext">Inlägg</Label>
    <Input type="textarea" name="blogtext" value={this.state.blogtext} onChange={this.onChangeInput} />
  </FormGroup>
  <Button color="secondary" onClick={this.save}>save</Button>
</Fragment>
