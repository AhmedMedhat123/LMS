import { Link, useForm } from "@inertiajs/react";
import InsturctorDashboard from "../InstructorDashboard";
import { useEffect, useState } from "react";
import {
    CAlert,
    CButton,
    CCol,
    CForm,
    CFormInput,
    CFormLabel,
} from "@coreui/react";

const AllCourseLecture = ({ course, sections }) => {
    const { setData, data, get, post, errors, processing } = useForm({
        course_id: course.id,
        section_title: "",
        section_id: "",
    });

    useEffect(() => {
        if (data.section_id) {
            get(
                route("instructor.course.lecture.add", {
                    course_id: data.course_id,
                    section_id: data.section_id,
                }),
                {
                    forceFormData: true,
                }
            );
        }
    }, [data.section_id]);

    const [showModal, setShowModal] = useState(false);

    const handleModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("instructor.course.section.add.store"), {
            forceFormData: true,
            onSuccess: () => closeModal(),
        });
    };

    const AddLecture = (e, sectionId) => {
        e.preventDefault();
        setData("section_id", sectionId);
        get(
            route("instructor.course.lecture.add", {
                course_id: data.course_id,
                section_id: data.section_id,
            }),
            {
                forceFormData: true,
            }
        );
    };

    const EditLecture = (e, lectureId, sectionId) => {
        e.preventDefault();
        get(
            route("instructor.course.lecture.edit", {
                course_id: data.course_id,
                section_id: sectionId,
                lecture_id: lectureId,
            }),
            {
                forceFormData: true,
            }
        );
    };

    return (
        <>
            <InsturctorDashboard>
                {/* Add Section */}
                <div className="flex items-center gap-4 bg-white p-4 shadow-md rounded-lg">
                    <img
                        src={`/upload/course/image/${course.course_image}`}
                        alt="Course Image"
                        className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                        <h1 className="text-3xl font-semibold text-gray-900">
                            {course.course_name}
                        </h1>
                        <h2 className="text-sm text-gray-600 mt-3">
                            {course.course_title}
                        </h2>
                    </div>
                    <button
                        className="btn btn-primary"
                        onClick={() => handleModal(course.id)}
                    >
                        Add Section
                    </button>
                </div>

                {showModal && (
                    <div
                        onClick={closeModal}
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                    >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white p-6 rounded-lg shadow-xl  w-full max-w-md"
                        >
                            <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                Add Section
                            </h4>

                            <CForm onSubmit={handleSubmit} className="w-full">
                                <div className="mb-4">
                                    <CCol>
                                        <CFormLabel className="block text-sm font-medium text-gray-700">
                                            Section Name
                                        </CFormLabel>
                                        <CFormInput
                                            type="text"
                                            name="section_title"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            onChange={(e) =>
                                                setData(
                                                    "section_title",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {errors.section_title && (
                                            <CAlert color="danger">
                                                {errors.section_title}
                                            </CAlert>
                                        )}
                                    </CCol>
                                    <div className="flex justify-center gap-4 mt-4">
                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                            disabled={processing}
                                        >
                                            {processing
                                                ? "Loading..."
                                                : "Add Section"}
                                        </button>
                                        <button
                                            onClick={closeModal}
                                            className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </CForm>
                        </div>
                    </div>
                )}

                {/* Add Lecture */}
                {sections.map((section, index) => (
                    <div
                        key={index}
                        className="bg-white p-4 shadow-md rounded-lg mt-5 text-black"
                    >
                        {/* Section Header */}
                        <div className="flex justify-between items-center gap-4">
                            <div className="flex gap-2">
                                <div className="font-bold text-lg">
                                    Section {index + 1}:
                                </div>
                                <div>{section.section_title}</div>
                            </div>

                            <div>
                                <button
                                    onClick={(e) => AddLecture(e, section.id)}
                                    className="btn btn-primary mr-2"
                                    disabled={processing}
                                >
                                    {processing ? "Loading..." : "Add Lecture"}
                                </button>
                                <button className="btn btn-danger">
                                    Delete Section
                                </button>
                            </div>
                        </div>

                        {/* Display Lectures for the Section */}
                        {section.lectures.length > 0 && (
                            <div className="mt-4  border-t border-gray-200 pt-4">
                                <h3 className="text-lg font-semibold mb-3">
                                    Lectures:
                                </h3>
                                <ol className="pl-5">
                                    {section.lectures.map((lecture, index) => (
                                        <li
                                            key={index}
                                            className="flex justify-between items-center text-gray-700  border-t border-gray-200 py-3"
                                        >
                                            {index + 1}. {lecture.lecture_title}
                                            <div className="flex gap-2 ">
                                                <Link
                                                    onClick={(e) =>
                                                        EditLecture(
                                                            e,
                                                            lecture.id,
                                                            section.id
                                                        )
                                                    }
                                                    className="btn btn-primary "
                                                >
                                                    Edit
                                                </Link>
                                                <Link className="btn btn-danger">
                                                    Delete
                                                </Link>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        )}
                    </div>
                ))}
            </InsturctorDashboard>
        </>
    );
};

export default AllCourseLecture;
