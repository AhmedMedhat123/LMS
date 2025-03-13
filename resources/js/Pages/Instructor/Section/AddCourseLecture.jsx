import { Link, useForm } from "@inertiajs/react";
import InsturctorDashboard from "../InstructorDashboard";
import { useState } from "react";
import {
    CAlert,
    CButton,
    CCol,
    CForm,
    CFormInput,
    CFormLabel,
    CFormTextarea,
} from "@coreui/react";

const AddCourseLecture = ({ course, section }) => {
    const { setData, post, errors, processing } = useForm({
        course_id: course.id,
        section_id: section.id,
        lecture_title: null,
        video: null,
        url: null,
        content: null,
    });

    const AddLecture = (e) => {
        e.preventDefault();
        post(route("instructor.course.lecture.add.store"), {
            forceFormData: true,
        });
    };

    return (
        <>
            <InsturctorDashboard title="Add Lecture">
                {/*Section */}
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
                    Section: {section.section_title}
                </div>

                {/* Add Lecture */}
                <div className="bg-white p-6 shadow-md rounded-lg mt-5 text-black">
                    <CForm onSubmit={AddLecture} className="grid gap-5">
                        {/* Lecture Title */}
                        <CCol>
                            <CFormLabel className="block text-sm font-semibold text-gray-700">
                                Lecture Title
                            </CFormLabel>
                            <CFormInput
                                type="text"
                                name="lecture_title"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                onChange={(e) =>
                                    setData("lecture_title", e.target.value)
                                }
                            />
                            {errors.lecture_title && (
                                <CAlert color="danger">
                                    {errors.lecture_title}
                                </CAlert>
                            )}
                        </CCol>

                        {/* Lecture Content */}
                        <CCol>
                            <CFormLabel className="block text-sm font-semibold text-gray-700">
                                Lecture Content
                            </CFormLabel>
                            <CFormTextarea
                                type="textarea"
                                name="content"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                onChange={(e) =>
                                    setData("content", e.target.value)
                                }
                            ></CFormTextarea>
                            {errors.content && (
                                <CAlert color="danger">{errors.content}</CAlert>
                            )}
                        </CCol>

                        {/* Video URL */}
                        <CCol>
                            <CFormLabel className="block text-sm font-semibold text-gray-700">
                                Video URL
                            </CFormLabel>
                            <CFormInput
                                type="text"
                                name="url"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                onChange={(e) => setData("url", e.target.value)}
                            />
                            {errors.url && (
                                <CAlert color="danger">{errors.url}</CAlert>
                            )}
                        </CCol>

                        {/* Submit Button */}
                        <CCol className="flex justify-end">
                            <CButton
                                type="submit"
                                className="btn btn-primary"
                                disabled={processing}
                            >
                                {processing ? "Loading..." : "Add"}
                            </CButton>
                        </CCol>
                    </CForm>
                </div>
            </InsturctorDashboard>
        </>
    );
};

export default AddCourseLecture;
