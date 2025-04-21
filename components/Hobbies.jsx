import HobbyComponent from "./Hobby";

const Hobbies = ({ hobbies }) => {
  return (
    <div className="row mt-5">
      <div className="col">
        <h2>Hobbies</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {hobbies.map((hobby) => (
            <HobbyComponent key={hobby.name} {...hobby} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
