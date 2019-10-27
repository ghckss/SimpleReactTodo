import Todo from "components/todo";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  todo: state.todo
});

const TodoContainer = connect(
  mapStateToProps,
  null
)(Todo);

export default TodoContainer;
