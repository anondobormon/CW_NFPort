import ReactDOM from "react-dom";

export default function TaskController(e) {
  if (e.target.checked) {
    ReactDOM.findDOMNode(e.target).parentNode.parentNode.parentNode.className =
      "checkbox-element hide";
    setTimeout(function () {
      ReactDOM.findDOMNode(
        e.target
      ).parentNode.parentNode.parentNode.className = "checkbox-element none";
    }, 1000);
  }
}
