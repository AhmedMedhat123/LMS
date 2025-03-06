import {
    CAlert,
    CButton,
    CCard,
    CCardBody,
    CCol,
    CForm,
    CFormInput,
    CFormLabel,
} from "@coreui/react";
import AdminDashboard from "../../AdminDashboard";
import { useForm } from "@inertiajs/react";

const AddCategory = () => {
    const { data, setData, post, processing, errors } = useForm();

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("admin.category.add.store"), {
            forceFormData: true, // Ensures file uploads are handled correctly
        });
    };
    return (
        <>
            <AdminDashboard title="Add Category">
                <CCard className="w-full md:w-2/3 shadow-lg rounded-lg">
                    <CCardBody>
                        <CForm onSubmit={handleSubmit}>
                            {/* Name Field */}
                            <CCol className="mb-3">
                                <CFormLabel htmlFor="name">
                                    Category Name
                                </CFormLabel>
                                <CFormInput
                                    type="text"
                                    id="name"
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    placeholder="Enter Category name"
                                    invalid={!!errors.name}
                                />
                                {errors.name && (
                                    <CAlert color="danger">
                                        {errors.name}
                                    </CAlert>
                                )}
                            </CCol>

                            <CCol className="mb-3">
                                <CFormLabel htmlFor="category_image">
                                    Category Image
                                </CFormLabel>
                                <CFormInput
                                    type="file"
                                    id="photo"
                                    onChange={(e) =>
                                        setData("photo", e.target.files[0])
                                    }
                                    invalid={!!errors.photo}
                                />
                                {errors.photo && (
                                    <CAlert color="danger">
                                        {errors.photo}
                                    </CAlert>
                                )}
                            </CCol>

                            {/* Submit Button */}
                            <CButton
                                type="submit"
                                color="primary"
                                className="m-2"
                                disabled={processing}
                            >
                                {processing ? "Loading..." : "Add"}
                            </CButton>
                        </CForm>
                    </CCardBody>
                </CCard>
            </AdminDashboard>
        </>
    );
};

export default AddCategory;
