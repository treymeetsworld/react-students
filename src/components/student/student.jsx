import Score from "../score";

const students = (props) => {
  return ( 
    <>
    <div>
      <h1>
      {props.person.name}
      </h1>
      <p>
        {props.person.bio}
      </p>
      <Score 
      scores={props.person.scores}
      />
    </div>
    </>
  );
}

export default students;