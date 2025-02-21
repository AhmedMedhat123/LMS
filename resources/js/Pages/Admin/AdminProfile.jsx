import AdminDashboard from "./AdminDashboard";
import { useForm } from "@inertiajs/react";
import {
    CButton,
    CCol,
    CForm,
    CFormInput,
    CFormLabel,
    CCard,
    CCardBody,
    CCardHeader,
    CCardTitle,
    CAlert
} from '@coreui/react';

export default function AdminProfile({ admin }) {
    const { data, setData, post, processing, errors } = useForm({
        name: admin.name || "",
        username: admin.username || "",
        email: admin.email || "",
        phone: admin.phone || "",
        address: admin.address || "",
        photo: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("admin.profile.store"), {
            forceFormData: true, // Ensures file uploads are handled correctly
        });
    };

    return (
        <AdminDashboard title='User Profile'>
            <div className="flex flex-col md:flex-row justify-center gap-8">
                {/* User Profile Card */}
                <CCard className="w-full md:w-1/3 shadow-lg rounded-lg">
                    <CCardBody className="flex flex-col items-center text-center mt-24">
                        <img
                            src={admin.photo ? `/upload/admin_images/${admin.photo}` : "/images/user_placeholder.png"}
                            alt="User Image"
                            className="w-52 h-52 rounded-full object-cover border-4 border-primary mb-3"
                        />
                        <CCardTitle className="text-xl font-semibold">{admin.name}</CCardTitle>
                        <p className="text-gray-600 mb-3">{admin.email}</p>
                        <div>
                            <CButton color="primary" className="mr-2">Follow</CButton>
                            <CButton color="secondary">Message</CButton>
                        </div>
                    </CCardBody>
                </CCard>

                {/* Profile Update Form */}
                <CCard className="w-full md:w-2/3 shadow-lg rounded-lg">
                    <CCardBody>
                        <CForm onSubmit={handleSubmit}>
                            {/* Name Field */}
                            <CCol className="mb-3">
                                <CFormLabel htmlFor="name">Name</CFormLabel>
                                <CFormInput
                                    type="text"
                                    id="name"
                                    value={data.name}
                                    onChange={(e) => setData("name", e.target.value)}
                                    placeholder="Enter your name"
                                    invalid={!!errors.name}
                                />
                                {errors.name && <CAlert color="danger">{errors.name}</CAlert>}
                            </CCol>

                            {/* Username Field */}
                            <CCol className="mb-3">
                                <CFormLabel htmlFor="username">Username</CFormLabel>
                                <CFormInput
                                    type="text"
                                    id="username"
                                    value={data.username}
                                    onChange={(e) => setData("username", e.target.value)}
                                    placeholder="Enter your username"
                                    invalid={!!errors.username}
                                />
                                {errors.username && <CAlert color="danger">{errors.username}</CAlert>}
                            </CCol>

                            {/* Email Field */}
                            <CCol className="mb-3">
                                <CFormLabel htmlFor="email">Email Address</CFormLabel>
                                <CFormInput
                                    type="email"
                                    id="email"
                                    value={data.email}
                                    onChange={(e) => setData("email", e.target.value)}
                                    placeholder="Enter your email"
                                    invalid={!!errors.email}
                                />
                                {errors.email && <CAlert color="danger">{errors.email}</CAlert>}
                            </CCol>

                            {/* Phone Field */}
                            <CCol className="mb-3">
                                <CFormLabel htmlFor="phone">Phone Number</CFormLabel>
                                <CFormInput
                                    type="tel"
                                    id="phone"
                                    value={data.phone}
                                    onChange={(e) => setData("phone", e.target.value)}
                                    placeholder="Enter your phone number"
                                    invalid={!!errors.phone}
                                />
                                {errors.phone && <CAlert color="danger">{errors.phone}</CAlert>}
                            </CCol>

                            {/* Address Field */}
                            <CCol className="mb-3">
                                <CFormLabel htmlFor="address">Address</CFormLabel>
                                <CFormInput
                                    type="text"
                                    id="address"
                                    value={data.address}
                                    onChange={(e) => setData("address", e.target.value)}
                                    placeholder="Enter your address"
                                    invalid={!!errors.address}
                                />
                                {errors.address && <CAlert color="danger">{errors.address}</CAlert>}
                            </CCol>

                            {/* Profile Image Upload */}
                            <CCol className="mb-3">
                                <CFormLabel htmlFor="profile_image">Profile Image</CFormLabel>
                                <CFormInput
                                    type="file"
                                    id="photo"
                                    onChange={(e) => setData("photo", e.target.files[0])}
                                    invalid={!!errors.photo}
                                />
                                {errors.photo && <CAlert color="danger">{errors.photo}</CAlert>}
                            </CCol>

                            {/* Submit Button */}
                            <CButton type="submit" color="primary" className="w-full" disabled={processing}>
                                {processing ? "Updating..." : "Update Profile"}
                            </CButton>
                        </CForm>
                    </CCardBody>
                </CCard>
            </div>
        </AdminDashboard>
    );
}
