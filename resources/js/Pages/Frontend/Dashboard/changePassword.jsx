import { CAlert } from "@coreui/react";
import DashboardLayout from "./DashboardLayout";
import { useForm } from "@inertiajs/react";

const changePassword = () => {
    const { data, setData, post, processing, errors } = useForm({
        old_password: "",
        new_password: "",
        password_confirmation: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("user.change-password.store"));
    };
    return (
        <>
            <DashboardLayout>
                <div
                    className="tab-pane fade show active"
                    id="edit-profile"
                    role="tabpanel"
                    aria-labelledby="edit-profile-tab"
                >
                    <div className="setting-body">
                        <h3 className="fs-17 font-weight-semi-bold pb-4">
                            Change Password
                        </h3>

                        {/* end media */}
                        <form onSubmit={handleSubmit} className="row pt-40px">
                            <div className="input-box col-lg-12">
                                <label className="label-text">
                                    Old password
                                </label>
                                <div className="form-group">
                                    <input
                                        className="form-control form--control"
                                        type="password"
                                        id="old_password"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData(
                                                "old_password",
                                                e.target.value
                                            )
                                        }
                                        placeholder="Enter your old password"
                                    />
                                    <span className="la la-user input-icon" />
                                </div>
                                {errors.old_password && (
                                    <CAlert color="danger">
                                        {errors.old_password}
                                    </CAlert>
                                )}
                            </div>

                            <div className="input-box col-lg-12">
                                <label className="label-text">
                                    New Password
                                </label>
                                <div className="form-group">
                                    <input
                                        className="form-control form--control"
                                        type="password"
                                        id="new_password"
                                        value={data.new_password}
                                        onChange={(e) =>
                                            setData(
                                                "new_password",
                                                e.target.value
                                            )
                                        }
                                        placeholder="Enter your new password"
                                    />
                                    <span className="la la-user input-icon" />
                                </div>
                                {errors.new_password && (
                                    <CAlert color="danger">
                                        {errors.new_password}
                                    </CAlert>
                                )}
                            </div>

                            <div className="input-box col-lg-12">
                                <label className="label-text">
                                    Password Confirmation
                                </label>
                                <div className="form-group">
                                    <input
                                        className="form-control form--control"
                                        type="password"
                                        id="new_password_confirmation"
                                        value={data.new_password_confirmation}
                                        onChange={(e) =>
                                            setData(
                                                "new_password_confirmation",
                                                e.target.value
                                            )
                                        }
                                        placeholder="Confirm your password"
                                    />
                                    <span className="la la-user input-icon" />
                                </div>
                                {errors.new_password_confirmation && (
                                    <CAlert color="danger">
                                        {errors.new_password_confirmation}
                                    </CAlert>
                                )}
                            </div>

                            {/* end input-box */}
                            <div className="input-box col-lg-12 py-2">
                                <button
                                    className="btn theme-btn"
                                    disabled={processing}
                                >
                                    {processing
                                        ? "Updating..."
                                        : "Update Profile"}
                                </button>
                            </div>
                            {/* end input-box */}
                        </form>
                    </div>
                    {/* end setting-body */}
                </div>
            </DashboardLayout>
        </>
    );
};

export default changePassword;
