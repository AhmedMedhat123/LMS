import React, { useMemo, useState } from 'react';
import DataTable from './DataTable';
import { Link, router } from '@inertiajs/react';
import InsturctorDashboard from '../InstructorDashboard';

const AllCourses = ({ courses }) => {
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleDelete = (id) => {
    setDeleteId(id);
    setShowModal(true);
  };

  const confirmDelete = () => {
    router.get(route('instructor.course.delete', deleteId), {
      onSuccess: () => {
        setShowModal(false);
        setDeleteId(null);
      },
    });
  };

  const closeModal = () => {
    setShowModal(false);
    setDeleteId(null);
  };

  const data = useMemo(() => {
    if (courses && courses.length > 0) {
      return courses.map((course, index) => ({
        id: course.id,
        image: course.course_image ? (
          <img
            src={`/upload/course/image/${course.course_image}`}
            alt="Course Image"
            className="w-20 h-20 object-cover rounded"
          />
        ) : (
          <img
            src="/images/no-image.png"
            alt="No Category"
            className="w-20 h-20 object-cover rounded"
          />
        ),
        course_name: course.course_name,
        category: course.category.category_name,
        price: course.selling_price,
        discount: course.discount_price,
        action: (
          <>
            <Link
              href={route('instructor.course.edit', course.id)}
              className="btn btn-primary mr-3 la la-edit"
              title="Edit Course"
            ></Link>
            <button
              className="btn btn-danger mr-3 la la-trash"
              onClick={() => handleDelete(course.id)}
              title="Delete Course"
            ></button>
            <Link
              href={route('instructor.course.lecture.all', course.id)}
              className="btn btn-warning la la-list"
              title="View Lecture"
            ></Link>
          </>
        ),
      }));
    }
    return [];
  }, [courses]);
  return (
    <InsturctorDashboard title="Courses List">
      <div className="p-4">
        {data.length === 0 ? (
          <>
            <p className="text-gray-500 text-center">No courses available.</p>
            <Link
              href={route('instructor.course.add')}
              className="btn btn-primary text-center"
            >
              Add Course
            </Link>
          </>
        ) : (
          <DataTable data={data} />
        )}
      </div>
      {showModal && (
        <div
          onClick={closeModal}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <div className="bg-white p-6 rounded shadow-md text-center">
            <div className="flex justify-center mb-4">
              <img src="/images/icon-alert.png" className="w-17 h-17" />
            </div>
            <h4 className="text-lg font-semibold mb-2">
              Are you sure you want to delete this course?
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              This action cannot be undone.
            </p>
            <div className="flex justify-center gap-4">
              <button onClick={confirmDelete} className="btn btn-danger">
                Yes, Delete
              </button>
              <button onClick={closeModal} className="btn btn-secondary">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </InsturctorDashboard>
  );
};

export default AllCourses;
