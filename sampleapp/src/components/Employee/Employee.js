import "./Employee.css";

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
      <div>{props.joiningDate.toDateString()}</div>
    </div>
  );
}

export default Employee;
