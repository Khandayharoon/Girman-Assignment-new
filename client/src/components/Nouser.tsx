
import notfoundimg from "../assets/nouserfound.png";

function Nouser() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[400px] h-[350px] absolute top-[230px]">
        <img className="w-full h-full" src={notfoundimg} alt="No user found" />
      </div>
    </div>
  );
}

export default Nouser;
