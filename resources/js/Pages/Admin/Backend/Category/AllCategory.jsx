import React, { useMemo } from "react";
import DataTable from "./DataTable";
import AdminDashboard from "../../AdminDashboard";
import { Link } from "@inertiajs/react";

const AllCategory = ({ category }) => {
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
                        <Link className="btn btn-danger">delete</Link>
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
                    <p className="text-gray-500 text-center">
                        No categories available.
                    </p>
                ) : (
                    <DataTable data={data} />
                )}
            </div>
        </AdminDashboard>
    );
};

export default AllCategory;
