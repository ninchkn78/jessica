import Link from "next/link";
import { motion } from "framer-motion";
import teachingBlurb from '@/data/teaching_blurb.json';
import teaching from '@/data/teaching.json';
import ta from '@/data/ta.json';

// for some reason tailwind decided to hate this type and this type only
type Coteacher = {
  Name: string;
  Link?: string;
};

type Year = {
  Semester: string;
  Year: number;
  Coteachers?: Coteacher[];
};

type TeachingCourse = {
  Class: string;
  Year: Year[];
  Link?: string;
  Description: string;
};

const Teaching = () => {
  const teachingBlurbData = teachingBlurb[0];

  return (
    <div className="min-h-screen">
      {/* Teaching Blurb */}
      <div>
        <div className="m-6 px-6 py-6 bg-white rounded-3xl shadow-lg">
          <h1 className="pb-2">Teaching</h1>
          <p>
            {teachingBlurbData.Blurb}
          </p>
        </div>

        <div className="px-12">
          {/* Instructing Experience */}
          <div>
            <h2>Instructor Experience</h2>

            {teaching.map((course: TeachingCourse, index) => (
              <div key={index} className="py-4">
                <h3>
                  {course.Link ? (
                    <a href={course.Link} target="_blank" rel="noopener noreferrer" className="underline">
                      {course.Class}
                    </a>
                  ) : (
                    course.Class
                  )}
                </h3>

                {/* Semester and Co-teachers */}
                <h4>
                  {course.Year.map((year, yIndex) => (
                    <span key={yIndex}>
                      {year.Semester} {year.Year}

                      {year.Coteachers && year.Coteachers.length > 0 && " co-taught with "}

                      {year.Coteachers && year.Coteachers.length > 0 && (
                        year.Coteachers.map((teacher, tIndex) => (
                          <span key={tIndex}>
                            {teacher.Link ? (
                              <a href={teacher.Link} target="_blank" rel="noopener noreferrer" className="underline">
                                {teacher.Name}
                              </a>
                            ) : (
                              teacher.Name
                            )}
                            {(year.Coteachers && tIndex < year.Coteachers.length - 1) && ", "}
                          </span>
                        ))
                      )}

                      {yIndex !== course.Year.length - 1 && " | "}
                    </span>
                  ))}
                </h4>

                {/* Description */}
                <p>{course.Description}</p>
              </div>
            ))}
          </div>

          {/* TA Experience */}
          <div className="py-6">
            <h2>TA Experience</h2>
            <ul className="py-2">
              {ta.map((course, index) => (
                <li key={index}>
                  {/* Format the semester-year array into [Fall XXXX, Spring XXXX] */}
                  [
                  {course.Year.map((year, yIndex) => (
                    <span key={yIndex}>
                      {year.Semester} {year.Year}
                      {yIndex < course.Year.length - 1 && ", "}
                    </span>
                  ))}
                  ]
                  <b> {course.Class}</b>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teaching;
