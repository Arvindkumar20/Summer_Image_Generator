export const Navbar = ({name,age,email}) => {
  return (
    <>
      <header className="header">
        <div className="img">
            <img src={"https://my.alfred.edu/zoom/_images/foster-lake.jpg"} alt="" />
        </div>
        <div className="title">Hindtech learning point {name} +  {age}+ {email}</div>
        <div>
          <button className="btn">generate iamge</button>
        </div>
      </header>
    </>
  );
};
