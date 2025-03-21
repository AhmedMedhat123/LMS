import React, { useMemo, useState } from 'react';
import DataTable from './DataTable';
import AdminDashboard from '../../AdminDashboard';
import { Link, router, useForm } from '@inertiajs/react';
import { CForm, CFormSwitch } from '@coreui/react';

const AllInstructor = ({ courses }) => {
  const { get } = useForm();
  const handleStatusChange = (id, currentStatus) => {
    const newStatus = currentStatus === 1 ? 0 : 1;

    router.post(
      route('admin.course.update.status', id),
      { status: newStatus },
      {
        preserveScroll: true,
      }
    );
  };

  const getCoursePage = (e, courseId) => {
    e.preventDefault();
    get(route('admin.course.details', courseId));
  };

  const data = useMemo(() => {
    if (courses && courses.length > 0) {
      return courses.map((course, index) => ({
        id: course.id,
        image: course.course_image ? (
          <img
            src={`/upload/course/image/${course.course_image}`}
            alt={course.course_image}
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
        instructor: course.instructor.name,
        category: course.category.category_name,
        price: course.discount_price
          ? course.discount_price
          : course.selling_price,
        action: (
          <Link
            onClick={(e) => getCoursePage(e, course.id)}
            className="la la-eye text-2xl hover:text-blue-500 hover:scale-110 transition duration-300"
          />
        ),
        status: (
          <CFormSwitch
            checked={course.status === 1}
            onChange={() => handleStatusChange(course.id, course.status)}
          />
        ),
      }));
    }
    return [];
  }, [courses]);

  return (
    <AdminDashboard title="Category List">
      <div className="p-4">
        {data.length === 0 ? (
          <p className="text-gray-500 text-center">No courses available.</p>
        ) : (
          <DataTable data={data} />
        )}
      </div>
    </AdminDashboard>
  );
};

export default AllInstructor;
