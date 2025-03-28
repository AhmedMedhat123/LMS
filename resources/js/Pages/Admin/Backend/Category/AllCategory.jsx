import React, { useMemo, useState } from "react";
import DataTable from "./DataTable";
import AdminDashboard from "../../AdminDashboard";
import { Link, router } from "@inertiajs/react";

const AllCategory = ({ category }) => {
    const [showModal, setShowModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    const handleDelete = (id) => {
        setDeleteId(id);
        setShowModal(true);
    };

    const confirmDelete = () => {
        router.get(route("admin.category.delete", deleteId), {
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
        if (category && category.length > 0) {
            return category.map((cat, index) => ({
                id: cat.id,
                name: cat.category_name,
                image: cat.category_image ? (
                    <img
                        src={`/upload/category/${cat.category_image}`}
                        alt={cat.category_name}
                        className="w-20 h-20 object-cover rounded"
                    />
                ) : (
                    <img
                        src="/images/no-image.png"
                        alt="No Category"
                        className="w-20 h-20 object-cover rounded"
                    />
                ),
                action: (
                    <>
                        <Link
                            href={route("admin.category.edit", cat.id)}
                            className="btn btn-primary mr-3"
                        >
                            edit
                        </Link>
                        <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(cat.id)}
                        >
                            Delete
                        </button>
                    </>
                ),
            }));
        }
        return [];
    }, [category]);
    return (
        <AdminDashboard title="Category List">
            <div className="p-4">
                {data.length === 0 ? (
                    <>
                        <p className="text-gray-500 text-center">
                            No categories available.
                        </p>
                        <Link
                            href={route("admin.category.add")}
                            className="btn btn-primary text-center"
                        >
                            Add Category
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
                            <img
                                src="/images/icon-alert.png"
                                className="w-17 h-17"
                            />
                        </div>
                        <h4 className="text-lg font-semibold mb-2">
                            Are you sure you want to delete this category?
                        </h4>
                        <p className="text-sm text-gray-600 mb-4">
                            This action cannot be undone.
                        </p>
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={confirmDelete}
                                className="btn btn-danger"
                            >
                                Yes, Delete
                            </button>
                            <button
                                onClick={closeModal}
                                className="btn btn-secondary"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </AdminDashboard>
    );
};

export default AllCategory;
