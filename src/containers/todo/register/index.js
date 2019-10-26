import Register from "components/todo/register";
import { connect } from "react-redux";
import * as actions from "modules/todo/actions";

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  create: content => dispatch(actions.create(content))
});

const RegisterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);

export default RegisterContainer;
