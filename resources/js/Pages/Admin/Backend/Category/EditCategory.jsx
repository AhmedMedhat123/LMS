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

const EditCategory = ({ category }) => {
    const { data, setData, post, processing, errors } = useForm({
        id: category.id,
        name: category.category_name,
        image: category.category_image,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("admin.category.update"), {
            forceFormData: true, // Ensures file uploads are handled correctly
        });
    };

    return (
        <>
            <AdminDashboard title="Edit Category">
                <CCard className="w-full max-w-4xl mx-auto shadow-lg rounded-lg">
                    <CCardBody className="flex flex-col md:flex-row gap-5 items-center p-6">
                        <CForm
                            onSubmit={handleSubmit}
                            className="flex flex-col w-full md:w-1/2"
                        >
                            {/* Name Field */}
                            <CCol className="mb-3">
                                <CFormLabel htmlFor="name">
                                    Category Name
                                </CFormLabel>
                                <CFormInput
                                    type="text"
                                    id="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    placeholder="Enter Category name"
                                    invalid={!!errors.name}
                                    className="w-full"
                                />
                                {errors.name && (
                                    <CAlert color="danger" className="mt-2">
                                        {errors.name}
                                    </CAlert>
                                )}
                            </CCol>

                            {/* Image Upload */}
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
                                    className="w-full"
                                />
                                {errors.photo && (
                                    <CAlert color="danger" className="mt-2">
                                        {errors.photo}
                                    </CAlert>
                                )}
                            </CCol>

                            {/* Submit Button */}
                            <CButton
                                type="submit"
                                color="primary"
                                className="mt-4"
                                disabled={processing}
                            >
                                {processing ? "Loading..." : "Edit"}
                            </CButton>
                        </CForm>

                        <img
                            src={
                                category.category_image
                                    ? `/upload/category/${category.category_image}`
                                    : "/images/no-image.png"
                            }
                            alt="Category"
                            className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-primary"
                        />
                    </CCardBody>
                </CCard>
            </AdminDashboard>
        </>
    );
};

export default EditCategory;
