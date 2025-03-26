import { Link, useForm } from '@inertiajs/react';
import InsturctorDashboard from '../InstructorDashboard';
import { useState } from 'react';
import {
  CAlert,
  CButton,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
} from '@coreui/react';

const EditCourseLecture = ({ course, section, lecture }) => {
  const { data, setData, post, errors, processing } = useForm({
    id: lecture.id,
    course_id: course.id,
    section_id: section.id,
    lecture_title: lecture.lecture_title,
    video: course.video || null,
    url: lecture.url,
    content: lecture.content,
  });

  const UpdateLecture = (e) => {
    e.preventDefault();
    post(route('instructor.course.lecture.update'), {
      forceFormData: true,
    });
  };

  return (
    <>
      <InsturctorDashboard title="Edit Lecture">
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
          <div className="flex flex-col">
            <p>
              <span className="font-bold">Section: </span>
              {section.section_title}
            </p>
            <p>
              <span className="font-bold">Lecture: </span>
              {lecture.lecture_title}
            </p>
          </div>
        </div>

        {/* Add Lecture */}
        <div className="bg-white p-6 shadow-md rounded-lg mt-5 text-black">
          <CForm onSubmit={UpdateLecture} className="grid gap-5">
            {/* Lecture Title */}
            <CCol>
              <CFormLabel className="block text-sm font-semibold text-gray-700">
                Lecture Title
              </CFormLabel>
              <CFormInput
                type="text"
                name="lecture_title"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={data.lecture_title}
                onChange={(e) => setData('lecture_title', e.target.value)}
              />
              {errors.lecture_title && (
                <CAlert color="danger">{errors.lecture_title}</CAlert>
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
                onChange={(e) => setData('content', e.target.value)}
                value={data.content}
              ></CFormTextarea>
              {errors.content && (
                <CAlert color="danger">{errors.content}</CAlert>
              )}
            </CCol>

            <CCol>
              <CFormLabel className="block text-sm font-semibold text-gray-700">
                Video
              </CFormLabel>
              <CFormInput
                type="file"
                name="video"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={(e) => setData('video', e.target.files[0])}
              />
              {errors.video && <CAlert color="danger">{errors.video}</CAlert>}
            </CCol>

            {/* Submit Button */}
            <CCol className="flex justify-end">
              <CButton
                type="submit"
                className="btn btn-primary"
                disabled={processing}
              >
                {processing ? 'Loading...' : 'Update'}
              </CButton>
            </CCol>
          </CForm>
        </div>
      </InsturctorDashboard>
    </>
  );
};

export default EditCourseLecture;
