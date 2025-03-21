import AdminDashboard from '../../AdminDashboard';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardImage,
  CCardTitle,
  CCardText,
} from '@coreui/react';

const CourseDetails = ({ course }) => {
  if (!course) {
    return (
      <AdminDashboard title="Course Details">
        <p className="text-red-500 text-center">Course not found!</p>
      </AdminDashboard>
    );
  }
  console.log(course);
  return (
    <AdminDashboard title="Course Details">
      <div>
        <CCard className="shadow-lg">
          <CCardBody className="flex items-center gap-4 p-4">
            <div>
              <CCardImage
                className="w-[10rem] h-[10rem] object-cover rounded-md"
                src={`/upload/course/image/${course.course_image}`}
                alt={course.course_name}
              />
            </div>
            <div className="flex-grow">
              <CCardTitle className="text-2xl font-bold">
                {course.course_name}
              </CCardTitle>
              <CCardText className="text-gray-600">
                {course.course_title}
              </CCardText>
            </div>
          </CCardBody>
        </CCard>

        <CCard className="shadow-lg mt-6">
          <CCardHeader className="font-semibold">
            Course Information
          </CCardHeader>
          <CCardBody className="flex gap-28">
            <div>
              <p>
                <strong>Category:</strong> {course.category.category_name}
              </p>
              <p>
                <strong>Subcategory:</strong>{' '}
                {course.subcategory.subcategory_name}
              </p>
              <p>
                <strong>Instructor:</strong> {course.instructor.name}
              </p>
              <p>
                <strong>Duration:</strong> {course.duration}
              </p>
            </div>
            <div>
              <p>
                <strong>Resources:</strong> {course.resources}
              </p>

              <p>
                <strong>Label:</strong> {course.label}
              </p>
              <p>
                <strong>Certificate:</strong>{' '}
                <span
                  className={
                    course.certificate === 'yes'
                      ? 'text-green-500'
                      : 'text-red-500'
                  }
                >
                  {course.certificate === 'yes' ? ' yes' : ' no'}
                </span>
              </p>

              <p>
                <strong>Price:</strong>
                {course.discount_price ? (
                  <>
                    <span className="line-through text-gray-500 mr-2 ml-1">
                      ${course.selling_price}
                    </span>
                    <span className="text-green-500">
                      ${course.discount_price}
                    </span>
                  </>
                ) : (
                  `$${course.selling_price}`
                )}
              </p>
              <p>
                <strong>Status:</strong>
                <span
                  className={
                    course.status === 1 ? 'text-green-500' : 'text-red-500'
                  }
                >
                  {course.status === 1 ? ' Active' : ' Inactive'}
                </span>
              </p>
            </div>
          </CCardBody>
        </CCard>
      </div>

      {/* Video Preview */}
      {course.video && (
        <div className="mt-6">
          <video
            controls
            crossOrigin="anonymous"
            playsInline
            poster={`/upload/course/image/${course.course_image}`}
            id="player"
          >
            <source
              src={`/upload/course/video/${course.video}`}
              type="video/mp4"
            />
          </video>
        </div>
      )}
    </AdminDashboard>
  );
};

export default CourseDetails;
