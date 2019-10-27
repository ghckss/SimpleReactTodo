import List from "components/todo/list";
import { connect } from "react-redux";
import * as actions from "modules/todo/actions";

const mapStateToProps = state => ({
  todo: state.todo
});

const mapDispatchToProps = dispatch => ({
  update: (content, index) =>
    dispatch(actions.update({ content: content, index: index })),
  remove: index => dispatch(actions.remove(index))
});

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

export default ListContainer;
