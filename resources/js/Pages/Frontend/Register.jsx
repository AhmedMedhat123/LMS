import InputError from "@/Components/InputError";
import MainLayout from "@/Layouts/MainLayout"
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };
    return (
        <>
            <MainLayout>
                <Head title="Register" />
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
                                            <h3 className="card-title text-center fs-24 lh-35 pb-4">Create an Account and <br /> Start Learning!</h3>
                                            <div className="section-block" />
                                            <form onSubmit={submit} className="pt-4">
                                                <div className="d-flex flex-wrap align-items-center pb-4">
                                                    <button className="btn theme-btn flex-grow-1 mx-2 mb-2"><i className="la la-google mr-2" />Google</button>
                                                    <button className="btn theme-btn flex-grow-1 mx-2 mb-2"><i className="la la-facebook mr-2" />Facebook</button>
                                                    <button className="btn theme-btn flex-grow-1 mx-2 mb-2"><i className="la la-twitter mr-2" />Twitter</button>
                                                </div>
                                                <div className="text-center pt-3 pb-4">
                                                    <div className="icon-element icon-element-md fs-25 shadow-sm">Or</div>
                                                </div>
                                                <div className="input-box">
                                                    <label className="label-text">Name</label>
                                                    <div className="form-group">
                                                        <input
                                                            className="form-control form--control"
                                                            type="text"
                                                            placeholder="name"
                                                            id="name"
                                                            name="name"
                                                            value={data.name}
                                                            autoComplete="name"
                                                            onChange={(e) => setData('name', e.target.value)}
                                                            required
                                                        />
                                                        <span className="la la-user input-icon" />
                                                        <InputError message={errors.name} className="mt-2" />

                                                    </div>
                                                </div>{/* end input-box */}

                                                <div className="input-box">
                                                    <label className="label-text">Email Address</label>
                                                    <div className="form-group">
                                                        <input
                                                            className="form-control form--control"
                                                            placeholder="Enter email address"

                                                            id="email"
                                                            type="email"
                                                            name="email"
                                                            value={data.email}
                                                            autoComplete="username"
                                                            onChange={(e) => setData('email', e.target.value)}
                                                            required
                                                        />
                                                        <span className="la la-envelope input-icon" />
                                                        <InputError message={errors.email} className="mt-2" />

                                                    </div>
                                                </div>{/* end input-box */}
                                                <div className="input-box">
                                                    <label className="label-text">Password</label>
                                                    <div className="input-group mb-3">
                                                        <span className="la la-lock input-icon" />
                                                        <input
                                                            className="form-control form--control password-field"
                                                            placeholder="Password"
                                                            id="password"
                                                            type="password"
                                                            name="password"
                                                            value={data.password}
                                                            autoComplete="new-password"
                                                            onChange={(e) => setData('password', e.target.value)}
                                                            required
                                                        />


                                                    </div>
                                                    <InputError message={errors.password} className="mt-2" />
                                                </div>{/* end input-box */}

                                                <div className="input-box">
                                                    <label className="label-text">Confirm Password</label>
                                                    <div className="input-group mb-3">
                                                        <span className="la la-lock input-icon" />
                                                        <input
                                                            className="form-control form--control password-field"
                                                            placeholder="Confirm Password"
                                                            id="password_confirmation"
                                                            type="password"
                                                            name="password_confirmation"
                                                            value={data.password_confirmation}
                                                            autoComplete="new-password"
                                                            onChange={(e) =>
                                                                setData('password_confirmation', e.target.value)
                                                            }
                                                            required
                                                        />


                                                    </div>
                                                    <InputError message={errors.password} className="my-2" />
                                                </div>{/* end input-box */}

                                                <div className="btn-box">

                                                    <button className="btn theme-btn" type="submit">Register Account <i className="la la-arrow-right icon ml-1" /></button>
                                                    <p className="fs-14 pt-2">Already have an account? <Link href={route('login')} className="text-color hover-underline">Log in</Link></p>
                                                </div>{/* end btn-box */}


                                            </form>
                                        </div>{/* end card-body */}
                                    </div>{/* end card */}
                                </div>{/* end col-lg-7 */}
                            </div>{/* end row */}
                        </div>{/* end container */}
                    </section > {/* end contact-area */}

                </div >
            </MainLayout >
        </>
    )
}

