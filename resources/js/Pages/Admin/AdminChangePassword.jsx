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
        old_password: "",
        new_password: "",
        password_confirmation: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("admin.change-password.store"));
    };

    return (
        <AdminDashboard title='Change Password'>
            <div className="flex flex-col md:flex-row justify-center gap-8">

                <CCard className="w-full md:w-1/3 shadow-lg rounded-lg">
                    <CCardBody className="flex flex-col items-center text-center mt-0">
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
                            {/* Old password Field */}
                            <CCol className="mb-3">
                                <CFormLabel htmlFor="old_password">Old Password</CFormLabel>
                                <CFormInput
                                    type="password"
                                    id="old_password"
                                    value={data.name}
                                    onChange={(e) => setData("old_password", e.target.value)}
                                    placeholder="Enter your old password"
                                    invalid={!!errors.old_password}
                                />
                                {errors.old_password && <CAlert color="danger">{errors.old_password}</CAlert>}
                            </CCol>

                            {/* new password Field */}
                            <CCol className="mb-3">
                                <CFormLabel htmlFor="new_password">New Password</CFormLabel>
                                <CFormInput
                                    type="password"
                                    id="new_password"
                                    value={data.new_password}
                                    onChange={(e) => setData("new_password", e.target.value)}
                                    placeholder="Enter your new password"
                                    invalid={!!errors.new_password}
                                />
                                {errors.new_password && <CAlert color="danger">{errors.new_password}</CAlert>}
                            </CCol>

                            {/* password confirmation Field */}
                            <CCol className="mb-3">
                                <CFormLabel htmlFor="new_password_confirmation">Password Confirmation</CFormLabel>
                                <CFormInput
                                    type="password"
                                    id="new_password_confirmation"
                                    value={data.new_password_confirmation}
                                    onChange={(e) => setData("new_password_confirmation", e.target.value)}
                                    placeholder="Confirm your password"
                                    invalid={!!errors.new_password_confirmation}
                                />
                                {errors.new_password_confirmation && <CAlert color="danger">{errors.new_password_confirmation}</CAlert>}
                            </CCol>


                            {/* Submit Button */}
                            <CButton type="submit" color="primary" className="w-full" disabled={processing}>
                                {processing ? "Loading..." : "Change password"}
                            </CButton>
                        </CForm>
                    </CCardBody>
                </CCard>
            </div>
        </AdminDashboard>
    );
}
