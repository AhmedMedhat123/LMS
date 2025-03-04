import { Link, useForm } from "@inertiajs/react";
import DashboardLayout from "../../../Layouts/DashboardLayout";
const Profile = ({ user }) => {
    return (
        <>
            <DashboardLayout>
                <div className="breadcrumb-content d-flex flex-wrap align-items-center justify-content-between mb-5">
                    <div className="media media-card align-items-center">
                        <div className="media-img media--img media-img-md rounded-full">
                            <img
                                className="rounded-full"
                                src={
                                    user?.photo
                                        ? `/upload/users_images/${user.photo}`
                                        : "/images/user_placeholder.png"
                                }
                                alt="user image"
                            />
                        </div>
                        <div className="media-body">
                            <h2 className="section__title fs-30">
                                {user.name}
                            </h2>
                        </div>
                        {/* end media-body */}
                    </div>
                    {/* end media */}
                    <Link
                        href={route("user.profile.edit")}
                        className="file-upload-wrap file-upload-wrap-2 file--upload-wrap"
                    >
                        <div className="btn theme-btn theme-btn-sm lh-28 theme-btn-transparent">
                            <i className="la la-edit m-1" /> Edit Profile
                        </div>
                    </Link>
                    {/* file-upload-wrap */}
                </div>
                <div className="section-block mb-5" />
                <div>
                    <div className="dashboard-heading mb-5">
                        <h3 className="fs-22 font-weight-semi-bold">
                            My Profile
                        </h3>
                    </div>
                    <div className="profile-detail mb-5">
                        <ul className="generic-list-item generic-list-item-flash">
                            <li>
                                <span className="profile-name">
                                    Registration Date:
                                </span>
                                <span className="profile-desc">
                                    Sat 20 Apr 2019, 03:50:30 AM
                                </span>
                            </li>
                            <li>
                                <span className="profile-name">
                                    First Name:
                                </span>
                                <span className="profile-desc">Alex</span>
                            </li>
                            <li>
                                <span className="profile-name">Last Name:</span>
                                <span className="profile-desc">Smith</span>
                            </li>
                            <li>
                                <span className="profile-name">User Name:</span>
                                <span className="profile-desc">
                                    {user.username}
                                </span>
                            </li>
                            <li>
                                <span className="profile-name">Email:</span>
                                <span className="profile-desc">
                                    {user.email}
                                </span>
                            </li>
                            <li>
                                <span className="profile-name">
                                    Phone Number:
                                </span>
                                <span className="profile-desc">
                                    {user.phone ? user.phone : "None"}
                                </span>
                            </li>
                            <li>
                                <span className="profile-name">Bio:</span>
                                <span className="profile-desc">
                                    Hello! I am a Alex Smith, Washington area
                                    graphic designer with over 6 years of
                                    graphic design experience. I specialize in
                                    designing infographics, icons, brochures,
                                    and flyers.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </DashboardLayout>
        </>
    );
};

export default Profile;
