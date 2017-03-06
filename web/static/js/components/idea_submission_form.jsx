import React, { Component } from "react"

import styles from "./css_modules/idea_submission_form.css"

class IdeaSubmissionForm extends Component {
  constructor(props) {
    super(props)
    this.state = { body: "", category: "happy" }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleIdeaChange = this.handleIdeaChange.bind(this)
    this.handleCategoryChange = this.handleCategoryChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({ body: "" })
    this.props.onIdeaSubmission(this.state)
  }

  handleIdeaChange(event) {
    this.setState({ body: event.target.value })
  }

  handleCategoryChange(event) {
    this.ideaInput.focus()
    this.setState({ category: event.target.value })
  }

  render() {
    const disabled = this.state.body.length < 3

    return (
      <form onSubmit={this.handleSubmit} className="ui form basic attached secondary segment">
        <div className="inline fields">
          <div className="two wide field">
            <label htmlFor="category">Category:</label>
            <select
              name="category"
              value={this.state.category}
              className={`ui dropdown ${styles.select}`}
              onChange={this.handleCategoryChange}
            >
              <option value="happy">happy</option>
              <option value="sad">sad</option>
              <option value="confused">confused</option>
              <option value="action-item">action-item</option>
            </select>
          </div>
          <div className="seven wide field">
            <div className="ui fluid action input">
              <input
                type="text"
                name="idea"
                ref={(input) => { this.ideaInput = input }}
                value={this.state.body}
                onChange={this.handleIdeaChange}
                placeholder="we're actively trying to improve"
              />
              <button
                type="submit"
                disabled={disabled}
                className="ui teal button"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

IdeaSubmissionForm.propTypes = {
  onIdeaSubmission: React.PropTypes.func.isRequired,
}

export default IdeaSubmissionForm
