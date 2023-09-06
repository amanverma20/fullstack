import "./Employee.css";
import EmployeeDate from "../SplitingComponents/EmployeeDate";

function Employee(props) {
  return (
    <div className="wrapper">
      <h2>Heading 1</h2>
      <div>Employee Name</div>
      <div>{props.empName}</div>
      <hr></hr>
      <div>Age</div>
      <div>{props.age}</div>
      <hr></hr>
      <div>Joining Date</div>
      <EmployeeDate empDate={props.joiningDate} />
    </div>
  );
}

export default Employee;
