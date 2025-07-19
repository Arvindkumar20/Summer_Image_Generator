import { Link, useLocation, useParams } from "react-router-dom";
export const Navbar = ({ name, age, email }) => {
  const url = useLocation();
  // const {id}=useParams;

  return (
    <>
      <header className="header ">
        <div className="img">
          <img
            src={"https://my.alfred.edu/zoom/_images/foster-lake.jpg"}
            alt=""
          />
        </div>
        <div className=" md:block sm:text-lg font-bold text-center hidden text-white">
          Hindtech learning point {name} + {age}+ {email}
        </div>
        <div className="font-normal">
          {url.pathname === "/" ? (
            <Link to="/history">
              <button className="btn capitalize">History</button>
            </Link>
          ) : (
            <Link to="/">
              <button className="btn capitalize ">generate iamge</button>
            </Link>
          )}
        </div>
      </header>
    </>
  );
};
