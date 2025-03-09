import Select from "react-select";
import AdminDashboard from "../../AdminDashboard";
import {
    CAlert,
    CButton,
    CCard,
    CCardBody,
    CForm,
    CFormLabel,
} from "@coreui/react";
import { useForm } from "@inertiajs/react";

const EditSubCategory = ({ category, subcategory }) => {
    const { data, setData, post, reset, processing, errors } = useForm({
        category_id: subcategory.category_id || "",
        subcategory_id: subcategory.id || "",
        subcategory_name: subcategory.subcategory_name || "",
    });

    // Prepare options for react-select
    const categoryOptions = category.map((cat) => ({
        value: cat.id,
        label: cat.category_name,
    }));

    const handleCategoryChange = (selectedOption) => {
        setData("category_id", selectedOption ? selectedOption.value : "");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("admin.subcategory.update"), {
            onSuccess: () => reset(),
        });
    };

    return (
        <AdminDashboard title="Edit Sub-Category">
            <CCard className="w-full md:w-2/3 shadow-lg rounded-lg">
                <CCardBody>
                    <CForm onSubmit={handleSubmit}>
                        <CFormLabel htmlFor="category_id">
                            Category Name
                        </CFormLabel>
                        <Select
                            options={categoryOptions}
                            onChange={handleCategoryChange}
                            value={
                                categoryOptions.find(
                                    (opt) =>
                                        opt.value === parseInt(data.category_id)
                                ) || null
                            }
                            name="category_id"
                            isClearable
                            placeholder="Select Category"
                            className="mb-4"
                        />

                        {errors.category_id && (
                            <CAlert color="danger">{errors.category_id}</CAlert>
                        )}
                        <CFormLabel htmlFor="subcategory_name">
                            Sub-Category Name
                        </CFormLabel>
                        <input
                            type="text"
                            name="subcategory_name"
                            value={data.subcategory_name}
                            onChange={(e) =>
                                setData("subcategory_name", e.target.value)
                            }
                            className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter subcategory name"
                        />
                        {errors.subcategory_name && (
                            <CAlert color="danger">
                                {errors.subcategory_name}
                            </CAlert>
                        )}
                        <CButton
                            type="submit"
                            color="primary"
                            className="m-2"
                            disabled={processing}
                        >
                            {processing ? "Loading..." : "Update"}
                        </CButton>
                    </CForm>
                </CCardBody>
            </CCard>
        </AdminDashboard>
    );
};

export default EditSubCategory;
