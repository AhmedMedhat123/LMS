import InputError from "@/Components/InputError";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };
    return (
        <>
            <MainLayout>
                <Head title="Log in" />

                {status && (
                    <div className="mb-4 text-sm font-medium text-green-600">
                        {status}
                    </div>
                )}
                <div>
                    <section className="contact-area section--padding position-relative">
                        <span className="ring-shape ring-shape-1" />
                        <span className="ring-shape ring-shape-2" />
                        <span className="ring-shape ring-shape-3" />
                        <span className="ring-shape ring-shape-4" />
                        <span className="ring-shape ring-shape-5" />
                        <span className="ring-shape ring-shape-6" />
                        <span className="ring-shape ring-shape-7" />
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 mx-auto">
                                    <div className="card card-item">
                                        <div className="card-body">
                                            <h3 className="card-title text-center fs-24 lh-35 pb-4">
                                                Login to Your Account!
                                            </h3>
                                            <div className="section-block" />
                                            <form
                                                onSubmit={submit}
                                                className="pt-4"
                                            >
                                                {" "}
                                                <div className="input-box">
                                                    <label className="label-text">
                                                        Email
                                                    </label>
                                                    <div className="form-group">
                                                        <input
                                                            className="form-control form--control"
                                                            type="email"
                                                            name="name"
                                                            id="email"
                                                            placeholder="Email"
                                                            autoComplete="username"
                                                            value={data.email}
                                                            onChange={(e) =>
                                                                setData(
                                                                    "email",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                        <span className="la la-user input-icon" />
                                                        <InputError
                                                            message={
                                                                errors.email
                                                            }
                                                            className="mt-2"
                                                        />
                                                    </div>
                                                </div>
                                                {/* end input-box */}
                                                <div className="input-box">
                                                    <label className="label-text">
                                                        Password
                                                    </label>
                                                    <div className="input-group mb-3">
                                                        <span className="la la-lock input-icon" />
                                                        <input
                                                            className="form-control form--control password-field"
                                                            id="password"
                                                            type="password"
                                                            name="password"
                                                            value={
                                                                data.password
                                                            }
                                                            autoComplete="current-password"
                                                            onChange={(e) =>
                                                                setData(
                                                                    "password",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            placeholder="Password"
                                                        />
                                                    </div>
                                                    <InputError
                                                        message={
                                                            errors.password
                                                        }
                                                        className="mt-2"
                                                    />
                                                </div>
                                                {/* end input-box */}
                                                <div className="btn-box">
                                                    <div className="d-flex align-items-center justify-content-between pb-4">
                                                        <div className="custom-control custom-checkbox fs-15">
                                                            <input
                                                                className="custom-control-input"
                                                                name="remember"
                                                                checked={
                                                                    data.remember
                                                                }
                                                                onChange={(e) =>
                                                                    setData(
                                                                        "remember",
                                                                        e.target
                                                                            .checked
                                                                    )
                                                                }
                                                            />
                                                            <label
                                                                className="custom-control-label custom--control-label"
                                                                htmlFor="rememberMeCheckbox"
                                                            >
                                                                Remember Me
                                                            </label>
                                                        </div>
                                                        {/* end custom-control */}
                                                        <a
                                                            href="recover.html"
                                                            className="btn-text"
                                                        >
                                                            Forgot my password?
                                                        </a>
                                                    </div>
                                                    <button
                                                        disabled={processing}
                                                        className="btn theme-btn"
                                                        type="submit"
                                                    >
                                                        Login Account{" "}
                                                        <i className="la la-arrow-right icon ml-1" />
                                                    </button>
                                                    <p className="fs-14 pt-2">
                                                        Don't have an account?{" "}
                                                        <Link
                                                            href={route(
                                                                "register"
                                                            )}
                                                            className="text-color hover-underline"
                                                        >
                                                            Register
                                                        </Link>
                                                    </p>
                                                </div>
                                                {/* end btn-box */}
                                            </form>
                                        </div>
                                        {/* end card-body */}
                                    </div>
                                    {/* end card */}
                                </div>
                                {/* end col-lg-7 */}
                            </div>
                            {/* end row */}
                        </div>
                        {/* end container */}
                    </section>
                    {/* end contact-area */}
                </div>
            </MainLayout>
        </>
    );
}
