import CourseCard from "../components/CourseCard";

const Index = () => {
  const data = {
    courses: [
      {
        id: 1,
        name: "HTML",
        fees: 100,
        active: true,
        img: "https://kinsta.com/wp-content/uploads/2021/03/HTML-5-Badge-Logo.png",
      },
      {
        id: 2,
        name: "JavaScript",
        fees: 150,
        active: true,
        img: "https://cdn.sanity.io/images/3do82whm/next/a69e3ba2441d35dd1a7945e826064708f30c10a9-1000x667.jpg?w=1000&h=667&fit=clip&auto=format",
      },
      {
        id: 3,
        name: "React",
        fees: 200,
        active: false,
        img: "https://cdn.prod.website-files.com/61b9e37d1106b57eaa076efd/629df2647290ef3b75d74f2c_a2bc81309136b0c1864f582b1af95307_546c60cadefd5c0f5e78014543c554cb.png",
      },
      {
        id: 4,
        name: "Database",
        fees: 120,
        active: true,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_VDuwEpca9uE7T3AsgTl0ZuMRSAtpphELug&s",
      },
    ],
  };

  const courses = data.courses.map((el) => (
    <CourseCard
      id={el.id}
      name={el.name}
      fees={el.fees}
      active={el.active}
      img={el.img}
    />
  ));
  return (
    <>
      <div className="d-flex justify-content-center my-4">
        <h1>Courses</h1>
      </div>

      <div className="m-5 m-md-5 d-md-flex flex-md-wrap  justify-content-md-between ">
        {courses}
      </div>
    </>
  );
};

export default Index;
