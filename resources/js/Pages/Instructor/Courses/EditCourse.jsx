import { useForm } from "@inertiajs/react";
import InstructorDashboard from "../InstructorDashboard";
import {
    CAlert,
    CButton,
    CCol,
    CForm,
    CFormCheck,
    CFormInput,
    CFormLabel,
    CFormSelect,
    CFormTextarea,
} from "@coreui/react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import Select from "react-select";
import { useEffect, useState } from "react";
import axios from "axios";
import { Editor } from "@tinymce/tinymce-react";

export default function EditCourse({
    course,
    categories,
    subcategoriess,
    courseGoals,
}) {
    const { data, setData, post, processing, errors } = useForm({
        course_id: course.id,
        category_id: course.category_id,
        subcategory_id: course.subcategory_id,
        course_image: course.course_image || null,
        course_title: course.course_title,
        course_name: course.course_name,
        description: course.description,
        video: course.video || null,
        label: course.label,
        duration: course.duration,
        resources: course.resources,
        certificate: course.certificate,
        selling_price: course.selling_price,
        discount_price: course.discount_price,
        prerequisites: course.prerequisites,
        bestseller: course.bestseller,
        featured: course.featured,
        highestrated: course.highestrated,
        goals:
            courseGoals.length > 0
                ? courseGoals.map((goal) => goal.goal_name)
                : [""],
        status: "1",
    });

    const [subcategories, setSubcategories] = useState([]);

    const categoryOptions = categories.map((cat) => ({
        value: cat.id,
        label: cat.category_name,
    }));

    const subcategoryOptions = subcategoriess.map((sub) => ({
        value: sub.id,
        label: sub.subcategory_name,
    }));

    useEffect(() => {
        if (course.category_id) {
            axios
                .get(`/subcategories/${course.category_id}`)
                .then((response) => {
                    const options = response.data.map((sub) => ({
                        value: sub.id,
                        label: sub.subcategory_name,
                    }));
                    setSubcategories(options);
                })
                .catch((error) => console.log(error));
        }
    }, [course.category_id]);

    const handleCategoryChange = (selectedOption) => {
        setData("category_id", selectedOption ? selectedOption.value : "");
        setData("subcategory_id", "");

        if (selectedOption) {
            axios
                .get(`/subcategories/${selectedOption.value}`)
                .then((response) => {
                    const options = response.data.map((sub) => ({
                        value: sub.id,
                        label: sub.subcategory_name,
                    }));
                    setSubcategories(options);
                })
                .catch((error) => console.log(error));
        } else {
            setSubcategories([]); // Clear subcategories if no category is selected
        }
    };

    const handleSubCategoryChange = (selectedOption) => {
        setData("subcategory_id", selectedOption ? selectedOption.value : "");
    };

    const defaultCategory = categoryOptions.find(
        (option) => option.value === course.category_id
    );

    const defaultSubCategory = subcategoryOptions.find(
        (option) => option.value === course.subcategory_id
    );

    const handleEditorChange = (content) => {
        setData("description", content);
    };

    const addGoal = () => {
        const updatedGoals = [...data.goals, ""];
        setData("goals", updatedGoals);
    };

    // Function to remove a goal input
    const removeGoal = (index) => {
        const updatedGoals = data.goals.filter((_, i) => i !== index);
        setData("goals", updatedGoals);
    };

    // Function to update goal text
    const updateGoal = (index, value) => {
        const updatedGoals = [...data.goals];
        updatedGoals[index] = value;
        setData("goals", updatedGoals);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("instructor.course.update"), {
            forceFormData: true,
        });
    };

    return (
        <InstructorDashboard title="Edit Course">
            <div className="flex justify-center">
                <CForm
                    onSubmit={handleSubmit}
                    className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-8 text-black"
                >
                    <div className="flex gap-4 mb-4">
                        {/* Course Name */}
                        <CCol className="mb-4">
                            <CFormLabel>Course Name</CFormLabel>
                            <CFormInput
                                type="text"
                                name="course_name"
                                value={data.course_name}
                                onChange={(e) =>
                                    setData("course_name", e.target.value)
                                }
                            />
                            {errors.course_name && (
                                <CAlert color="danger">
                                    {errors.course_name}
                                </CAlert>
                            )}
                        </CCol>

                        {/* Course Title */}
                        <CCol className="mb-4">
                            <CFormLabel>Course Title</CFormLabel>
                            <CFormInput
                                type="text"
                                name="course_title"
                                value={data.course_title}
                                onChange={(e) =>
                                    setData("course_title", e.target.value)
                                }
                                className="w-full"
                            />
                            {errors.course_title && (
                                <CAlert color="danger">
                                    {errors.course_title}
                                </CAlert>
                            )}
                        </CCol>
                    </div>
                    <div className="flex gap-4 mb-4">
                        {/* Category Selection */}
                        <CCol>
                            <CFormLabel htmlFor="category_id">
                                Category
                            </CFormLabel>
                            <Select
                                options={categoryOptions}
                                onChange={handleCategoryChange}
                                name="category_id"
                                isClearable
                                placeholder="Select Category"
                                className="mb-4"
                                defaultValue={defaultCategory}
                            />
                            {errors.category_id && (
                                <CAlert color="danger">
                                    {errors.category_id}
                                </CAlert>
                            )}
                        </CCol>

                        {/* Subcategory Selection */}
                        <CCol>
                            <CFormLabel htmlFor="category_id">
                                Sub Category
                            </CFormLabel>
                            <Select
                                options={subcategories}
                                onChange={handleSubCategoryChange}
                                name="subcategory_id"
                                isClearable
                                placeholder="Select SubCategory"
                                className="mb-4"
                                defaultValue={defaultSubCategory}
                                value={
                                    subcategories.find(
                                        (option) =>
                                            option.value === data.subcategory_id
                                    ) || null
                                }
                            />
                            {errors.subcategory_id && (
                                <CAlert color="danger">
                                    {errors.subcategory_id}
                                </CAlert>
                            )}
                        </CCol>
                    </div>
                    <div className="flex gap-4 mb-4">
                        {/* Upload Course Video */}
                        <CCol className="mb-4">
                            <CFormLabel>Course Video</CFormLabel>
                            <CFormInput
                                type="file"
                                id="course_video"
                                name="course_video"
                                onChange={(e) =>
                                    setData("video", e.target.files[0])
                                }
                                invalid={!!errors.video}
                                className="w-full"
                            />
                            {errors.video && (
                                <CAlert color="danger">{errors.video}</CAlert>
                            )}
                        </CCol>
                        {/* Upload Course Image */}
                        <CCol className="mb-4">
                            <CFormLabel>Course Image</CFormLabel>
                            <CFormInput
                                type="file"
                                id="course_image"
                                name="course_image"
                                onChange={(e) =>
                                    setData("course_image", e.target.files[0])
                                }
                                invalid={!!errors.course_image}
                                className="w-full"
                            />
                            {errors.course_image && (
                                <CAlert color="danger">
                                    {errors.course_image}
                                </CAlert>
                            )}
                        </CCol>
                    </div>

                    <div className="flex gap-4 mb-4">
                        {/*Course Label*/}
                        <CCol className="mb-4">
                            <CFormLabel>Course Label</CFormLabel>
                            <CFormSelect
                                aria-label="Default select example"
                                onChange={(e) =>
                                    setData("label", e.target.value)
                                }
                                options={[
                                    { label: "Open this select menu" },
                                    { label: "Begginer", value: "begginer" },
                                    { label: "Middle", value: "middle" },
                                    { label: "Advance", value: "advance" },
                                ]}
                                value={data.label}
                            />
                            {errors.label && (
                                <CAlert color="danger">{errors.label}</CAlert>
                            )}
                        </CCol>

                        {/*certificate*/}
                        <CCol className="mb-4">
                            <CFormLabel>Certificate Available</CFormLabel>
                            <CFormSelect
                                aria-label="Default select example"
                                onChange={(e) =>
                                    setData("certificate", e.target.value)
                                }
                                options={[
                                    { label: "Open this select menu" },
                                    { label: "Yes", value: "yes" },
                                    { label: "No", value: "no" },
                                ]}
                                value={data.certificate}
                            />
                            {errors.certificate && (
                                <CAlert color="danger">
                                    {errors.certificate}
                                </CAlert>
                            )}
                        </CCol>
                    </div>
                    <div className="flex gap-4 mb-4">
                        {/* Course Price */}
                        <CCol className="mb-4">
                            <CFormLabel>Course Price</CFormLabel>
                            <CFormInput
                                type="number"
                                name="selling_price"
                                value={data.selling_price}
                                onChange={(e) =>
                                    setData("selling_price", e.target.value)
                                }
                                className="w-full"
                            />
                            {errors.selling_price && (
                                <CAlert color="danger">
                                    {errors.selling_price}
                                </CAlert>
                            )}
                        </CCol>

                        {/* Discount Price */}
                        <CCol className="mb-4">
                            <CFormLabel>Discount Price</CFormLabel>
                            <CFormInput
                                type="number"
                                name="discount_price"
                                value={data.discount_price}
                                onChange={(e) =>
                                    setData("discount_price", e.target.value)
                                }
                                className="w-full"
                            />
                            {errors.discount_price && (
                                <CAlert color="danger">
                                    {errors.discount_price}
                                </CAlert>
                            )}
                        </CCol>

                        {/* Course Duration */}
                        <CCol className="mb-4">
                            <CFormLabel>Duration</CFormLabel>
                            <CFormInput
                                type="text"
                                name="duration"
                                value={data.duration}
                                onChange={(e) =>
                                    setData("duration", e.target.value)
                                }
                                className="w-full"
                            />
                            {errors.duration && (
                                <CAlert color="danger">
                                    {errors.duration}
                                </CAlert>
                            )}
                        </CCol>
                    </div>
                    {/* Course Resources */}
                    <CCol className="mb-4">
                        <CFormLabel>Resources</CFormLabel>
                        <CFormInput
                            type="text"
                            name="resources"
                            value={data.resources}
                            onChange={(e) =>
                                setData("resources", e.target.value)
                            }
                            className="w-full"
                        />
                        {errors.resources && (
                            <CAlert color="danger">{errors.resources}</CAlert>
                        )}
                    </CCol>

                    <CCol className="mb-4">
                        <CFormTextarea
                            id="prerequisites"
                            name="prerequisites"
                            label="Prerequisites"
                            value={data.prerequisites}
                            onChange={(e) =>
                                setData("prerequisites", e.target.value)
                            }
                            rows={3}
                        ></CFormTextarea>
                        {errors.prerequisites && (
                            <CAlert color="danger">
                                {errors.prerequisites}
                            </CAlert>
                        )}
                    </CCol>

                    {/**Descritpion */}
                    <CCol className="mb-4">
                        <CFormLabel>Description</CFormLabel>
                        <Editor
                            apiKey="fydw95u38yomn63zffuzszbaykz9poivynwsyde5d2ngz6fb"
                            onEditorChange={handleEditorChange}
                            name="description"
                            value={data.description}
                            init={{
                                plugins: [
                                    // Core editing features
                                    "anchor",
                                    "autolink",
                                    "charmap",
                                    "codesample",
                                    "emoticons",
                                    "image",
                                    "link",
                                    "lists",
                                    "media",
                                    "searchreplace",
                                    "table",
                                    "visualblocks",
                                    "wordcount",
                                    // Your account includes a free trial of TinyMCE premium features
                                    // Try the most popular premium features until Mar 24, 2025:
                                    "checklist",
                                    "mediaembed",
                                    "casechange",
                                    "export",
                                    "formatpainter",
                                    "pageembed",
                                    "a11ychecker",
                                    "tinymcespellchecker",
                                    "permanentpen",
                                    "powerpaste",
                                    "advtable",
                                    "advcode",
                                    "editimage",
                                    "advtemplate",
                                    "ai",
                                    "mentions",
                                    "tinycomments",
                                    "tableofcontents",
                                    "footnotes",
                                    "mergetags",
                                    "autocorrect",
                                    "typography",
                                    "inlinecss",
                                    "markdown",
                                    "importword",
                                    "exportword",
                                    "exportpdf",
                                ],
                                toolbar:
                                    "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                                tinycomments_mode: "embedded",
                                tinycomments_author: "Author name",
                                mergetags_list: [
                                    {
                                        value: "First.Name",
                                        title: "First Name",
                                    },
                                    { value: "Email", title: "Email" },
                                ],
                                ai_request: (request, respondWith) =>
                                    respondWith.string(() =>
                                        Promise.reject(
                                            "See docs to implement AI Assistant"
                                        )
                                    ),
                            }}
                        />
                        {errors.description && (
                            <CAlert color="danger">{errors.description}</CAlert>
                        )}
                    </CCol>

                    <hr />

                    <CCol className="mb-4">
                        <div className="flex justify-around mb-4">
                            {/* Best Seller */}
                            <CFormCheck
                                name="bestseller"
                                label="Best Seller"
                                checked={data.bestseller || false}
                                onChange={(e) =>
                                    setData("bestseller", e.target.checked)
                                }
                            />
                            {/* Featured */}
                            <CFormCheck
                                name="featured"
                                label="Featured"
                                checked={data.featured || false}
                                onChange={(e) =>
                                    setData("featured", e.target.checked)
                                }
                            />
                            {/* Highest Rated */}
                            <CFormCheck
                                name="highestrated"
                                label="Highest Rated"
                                checked={data.highestrated || false}
                                onChange={(e) =>
                                    setData("highestrated", e.target.checked)
                                }
                            />
                        </div>
                    </CCol>

                    <hr />

                    <CCol className="mb-4">
                        <p className="text-lg font-semibold mb-4">
                            Course Goals
                        </p>
                        {data.goals.map((goals, index) => (
                            <div className="flex mb-3 items-center" key={index}>
                                <input
                                    key={index}
                                    type="text"
                                    value={data.goals[index]}
                                    onChange={(e) =>
                                        updateGoal(index, e.target.value)
                                    }
                                    placeholder="Goal"
                                    className="form-control mr-2 w-full border rounded px-2 py-1"
                                />
                                <button
                                    onClick={() => removeGoal(index)}
                                    className="btn btn-danger btn-sm mr-2"
                                    disabled={data.goals.length === 1} // Disable remove if only one goal
                                >
                                    <FaMinusCircle />
                                </button>
                                {index === data.goals.length - 1 && (
                                    <button
                                        onClick={addGoal}
                                        className="btn btn-success btn-sm"
                                    >
                                        <FaPlusCircle />
                                    </button>
                                )}
                            </div>
                        ))}
                    </CCol>

                    {/* Submit Button */}
                    <CButton
                        type="submit"
                        color="primary"
                        className="w-full py-2 text-lg"
                        disabled={processing}
                    >
                        {processing ? "Updating..." : "Update Course"}
                    </CButton>
                </CForm>
            </div>
        </InstructorDashboard>
    );
}
