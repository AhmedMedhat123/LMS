import { useForm } from "@inertiajs/react";
import DashboardLayout from "../../../Layouts/DashboardLayout";
import { CAlert } from "@coreui/react";

const ProfileEdit = ({ user }) => {
    const { data, setData, post, processing, errors } = useForm({
        name: user.name || "",
        username: user.username || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
        photo: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("user.profile.edit.store"), {
            forceFormData: true, // Ensures file uploads are handled correctly
        });
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
                            Edit Profile
                        </h3>
                        <div className="media media-card align-items-center">
                            <div className="media-img media-img-lg mr-4 bg-gray">
                                <img
                                    className="mr-3"
                                    src={
                                        user.photo
                                            ? `/upload/users_images/${user.photo}`
                                            : "/images/user_placeholder.png"
                                    }
                                    alt="user image"
                                />
                            </div>
                            <div className="media-body">
                                <div className="file-upload-wrap file-upload-wrap-2">
                                    <input
                                        className="multi file-upload-input with-preview"
                                        type="file"
                                        id="photo"
                                        onChange={(e) =>
                                            setData("photo", e.target.files[0])
                                        }
                                    />
                                    <span className="file-upload-text">
                                        <i className="la la-photo mr-2" />
                                        Upload a Photo
                                    </span>
                                </div>
                                {/* file-upload-wrap */}
                                <p className="fs-14">
                                    Max file size is 5MB, Minimum dimension:
                                    200x200 And Suitable files are .jpg &amp;
                                    .png
                                </p>
                                {errors.photo && (
                                    <CAlert color="danger">
                                        {errors.photo}
                                    </CAlert>
                                )}
                            </div>
                        </div>
                        {/* end media */}
                        <form onSubmit={handleSubmit} className="row pt-40px">
                            <div className="input-box col-lg-6">
                                <label className="label-text">Name</label>
                                <div className="form-group">
                                    <input
                                        className="form-control form--control"
                                        type="text"
                                        id="name"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        placeholder="Enter your name"
                                    />
                                    <span className="la la-user input-icon" />
                                </div>
                                {errors.name && (
                                    <CAlert color="danger">
                                        {errors.name}
                                    </CAlert>
                                )}
                            </div>
                            {/* end input-box */}
                            {/* end input-box */}
                            <div className="input-box col-lg-6">
                                <label className="label-text">User Name</label>
                                <div className="form-group">
                                    <input
                                        className="form-control form--control"
                                        type="text"
                                        id="username"
                                        value={data.username}
                                        onChange={(e) =>
                                            setData("username", e.target.value)
                                        }
                                        placeholder="Enter your username"
                                    />
                                    <span className="la la-user input-icon" />
                                </div>
                                {errors.username && (
                                    <CAlert color="danger">
                                        {errors.username}
                                    </CAlert>
                                )}
                            </div>
                            {/* end input-box */}
                            <div className="input-box col-lg-6">
                                <label className="label-text">
                                    Email Address
                                </label>
                                <div className="form-group">
                                    <input
                                        className="form-control form--control"
                                        type="email"
                                        id="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        placeholder="Enter your email"
                                    />
                                    <span className="la la-envelope input-icon" />
                                </div>
                                {errors.email && (
                                    <CAlert color="danger">
                                        {errors.email}
                                    </CAlert>
                                )}
                            </div>
                            {/* end input-box */}
                            <div className="input-box col-lg-6">
                                <label className="label-text">
                                    Phone Number
                                </label>
                                <div className="form-group">
                                    <input
                                        className="form-control form--control"
                                        type="tel"
                                        id="phone"
                                        value={data.phone}
                                        onChange={(e) =>
                                            setData("phone", e.target.value)
                                        }
                                        placeholder="Enter your phone number"
                                    />
                                    <span className="la la-phone input-icon" />
                                    {errors.phone && (
                                        <CAlert color="danger">
                                            {errors.phone}
                                        </CAlert>
                                    )}
                                </div>
                            </div>
                            {/* end input-box */}
                            <div className="input-box col-lg-12">
                                <label className="label-text">Address</label>
                                <div className="form-group">
                                    <input
                                        className="form-control form--control"
                                        type="text"
                                        id="address"
                                        value={data.address}
                                        onChange={(e) =>
                                            setData("address", e.target.value)
                                        }
                                        placeholder="Enter your address"
                                    />
                                </div>
                                {errors.address && (
                                    <CAlert color="danger">
                                        {errors.address}
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

export default ProfileEdit;
