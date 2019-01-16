import React from "react";
import { Field, reduxForm } from "redux-form";

class Setting extends React.Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  renderFormElement = ({ input, label, meta, options }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <select {...input}>
          <option>select</option>
          {options
            ? options.map(option => <option key={option}>{option}</option>)
            : null}
        </select>
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          <Field
            name="level"
            label="level"
            options={[1, 2, 3]}
            component={this.renderFormElement}
          />
          <Field
            name="filter"
            label="filter"
            options={["all questions", "incorrenct questions"]}
            component={this.renderFormElement}
          />
          <Field
            name="duration"
            label="duration"
            options={[
              "unlimited",
              "5 sec",
              "6 sec",
              "7 sec",
              "8 sec",
              "9 sec",
              "10 sec"
            ]}
            component={this.renderFormElement}
          />
          <Field
            name="mode"
            label="mode"
            options={["Translating mode", "Answering mode"]}
            component={this.renderFormElement}
          />
          <Field
            name="numberOfQuestions"
            label="number of questions"
            options={[10, 15, 20]}
            component={this.renderFormElement}
          />
          <button className="button ui">Start</button>
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.level || formValues.level === "select") {
    errors.level = "You must choose level";
  }
  if (!formValues.filter || formValues.filter === "select") {
    errors.filter = "You must choose filter";
  }
  if (!formValues.duration || formValues.duration === "select") {
    errors.duration = "You must choose duration";
  }
  if (!formValues.mode || formValues.mode === "select") {
    errors.mode = "You must choose mode";
  }
  if (
    !formValues.numberOfQuestions ||
    formValues.numberOfQuestions === "select"
  ) {
    errors.numberOfQuestions = "You must choose number of questions";
  }
  return errors;
};

export default reduxForm({
  form: "setting",
  validate
})(Setting);