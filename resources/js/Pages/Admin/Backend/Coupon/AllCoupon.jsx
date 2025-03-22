import React, { useMemo, useState } from 'react';
import DataTable from './DataTable';
import AdminDashboard from '../../AdminDashboard';
import { Link, router } from '@inertiajs/react';
import { CBadge } from '@coreui/react';

const AllCoupon = ({ coupons }) => {
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleDelete = (id) => {
    setDeleteId(id);
    setShowModal(true);
  };

  const confirmDelete = () => {
    router.get(route('admin.coupon.delete', deleteId), {
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
    if (coupons && coupons.length > 0) {
      return coupons.map((coupon, index) => ({
        id: coupon.id,
        coupon_name: coupon.name,
        coupon_discount: `${coupon.discount}%`,
        coupon_validity:
          new Date(coupon.validity) >= new Date() ? (
            <CBadge color="success" className="p-2">
              Valid
            </CBadge>
          ) : (
            <CBadge color="danger" className="p-2">
              Invalid
            </CBadge>
          ),
        action: (
          <>
            <Link
              href={route('admin.coupon.edit', coupon.id)}
              className="btn btn-primary mr-3"
            >
              edit
            </Link>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(coupon.id)}
            >
              Delete
            </button>
          </>
        ),
      }));
    }
    return [];
  }, [coupons]);
  return (
    <AdminDashboard title="Coupon List">
      <div className="p-4">
        {data.length === 0 ? (
          <>
            <p className="text-gray-500 text-center">No coupons available.</p>
            <Link
              href={route('admin.coupon.add')}
              className="btn btn-primary text-center"
            >
              Add Coupon
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
              Are you sure you want to delete this coupon?
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
    </AdminDashboard>
  );
};

export default AllCoupon;
