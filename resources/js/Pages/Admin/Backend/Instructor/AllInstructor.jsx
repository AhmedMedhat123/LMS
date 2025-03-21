import React, { useMemo, useState } from 'react';
import DataTable from './DataTable';
import AdminDashboard from '../../AdminDashboard';
import { Link, router, useForm } from '@inertiajs/react';
import { CForm, CFormSwitch } from '@coreui/react';

const AllInstructor = ({ instructors }) => {
  const handleStatusChange = (id, currentStatus) => {
    const newStatus = currentStatus === '1' ? '0' : '1';

    router.post(
      route('admin.instructor.update.status', id),
      { status: newStatus },
      {
        preserveScroll: true,
      }
    );
  };

  const data = useMemo(() => {
    if (instructors && instructors.length > 0) {
      return instructors.map((instructor, index) => ({
        id: instructor.id,
        instructor_name: instructor.name,
        username: instructor.username,
        email: instructor.email,
        phone: instructor.phone,
        status: (
          <>
            <span
              className={`px-2 py-1 rounded-md ${
                instructor.status === '1'
                  ? 'bg-green-200 text-green-800'
                  : 'bg-red-200 text-red-800'
              }`}
            >
              {instructor.status === '1' ? 'Active' : 'Inactive'}
            </span>
          </>
        ),
        action: (
          <CFormSwitch
            checked={instructor.status === '1'}
            onChange={() =>
              handleStatusChange(instructor.id, instructor.status)
            }
          />
        ),
      }));
    }
    return [];
  }, [instructors]);
  return (
    <AdminDashboard title="Category List">
      <div className="p-4">
        {data.length === 0 ? (
          <p className="text-gray-500 text-center">No instructors available.</p>
        ) : (
          <DataTable data={data} />
        )}
      </div>
    </AdminDashboard>
  );
};

export default AllInstructor;
