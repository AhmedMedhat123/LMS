import { Link } from "@inertiajs/react";
import React, { useState, useMemo } from "react";
import { useTable } from "react-table";

const DataTable = ({ data }) => {
    // Define table columns
    const columns = useMemo(
        () => [
            { Header: "ID", accessor: "id" },
            { Header: "Image", accessor: "image" },
            { Header: "Name", accessor: "name" },
            { Header: "Action", accessor: "action" },
        ],
        []
    );

    // Search state
    const [searchInput, setSearchInput] = useState("");

    // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5; // Items per page

    // Handle search
    const handleSearchChange = (event) => {
        setSearchInput(event.target.value);
        setCurrentPage(1); // Reset to first page when search changes
    };

    // Filter data based on search input
    const filteredData = useMemo(() => {
        if (!searchInput) return data;
        const lowercasedInput = searchInput.toLowerCase();
        return data.filter((row) =>
            Object.values(row).some((value) =>
                String(value).toLowerCase().includes(lowercasedInput)
            )
        );
    }, [data, searchInput]);

    // Pagination logic
    const totalPages = Math.ceil(filteredData.length / pageSize);
    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * pageSize;
        const end = start + pageSize;
        return filteredData.slice(start, end);
    }, [filteredData, currentPage]);

    // Use the useTable hook
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({
            columns,
            data: paginatedData,
        });

    return (
        <div className="overflow-x-auto">
            <div className="mb-4 flex flex-col md:flex-row justify-between items-center gap-2">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchInput}
                    onChange={handleSearchChange}
                    className="px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Link
                    href={route("admin.category.add")}
                    className="btn btn-primary mr-1"
                >
                    Add category
                </Link>
            </div>

            <table
                {...getTableProps()}
                className="min-w-full bg-white border border-gray-200 shadow-md"
            >
                <thead className="bg-gray-100">
                    {headerGroups.map((headerGroup) => (
                        <tr
                            key={headerGroup.id}
                            {...headerGroup.getHeaderGroupProps()}
                        >
                            {headerGroup.headers.map((column) => (
                                <th
                                    key={column.id}
                                    {...column.getHeaderProps()}
                                    className="text-left px-4 py-2 border-b"
                                >
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr
                                key={row.id}
                                {...row.getRowProps()}
                                className="hover:bg-gray-50"
                            >
                                {row.cells.map((cell) => (
                                    <td
                                        {...cell.getCellProps()}
                                        className="px-4 py-2 border-b"
                                    >
                                        {cell.render("Cell")}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="flex justify-between items-center mt-4">
                <button
                    onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
                >
                    Previous
                </button>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default DataTable;
