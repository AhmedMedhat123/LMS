import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
} from '@coreui/react';
import AdminDashboard from '../../AdminDashboard';
import { useForm } from '@inertiajs/react';

const AddCoupon = () => {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    discount: '',
    validity: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('admin.coupon.add.store'));
  };

  return (
    <>
      <AdminDashboard title="Add Coupon">
        <CCard className="w-full md:w-2/3 shadow-lg rounded-lg">
          <CCardBody>
            <CForm onSubmit={handleSubmit}>
              {/* Name Field */}
              <CCol className="mb-3">
                <CFormLabel htmlFor="name">Coupon Name</CFormLabel>
                <CFormInput
                  type="text"
                  id="name"
                  onChange={(e) => setData('name', e.target.value)}
                  placeholder="Enter Coupon name"
                  invalid={!!errors.name}
                />
                {errors.name && <CAlert color="danger">{errors.name}</CAlert>}
              </CCol>

              {/* Discount Field */}
              <CCol className="mb-3">
                <CFormLabel htmlFor="name">Coupon Discount</CFormLabel>
                <CFormInput
                  type="text"
                  id="discount"
                  onChange={(e) => setData('discount', e.target.value)}
                  placeholder="Enter Coupon Discount"
                  invalid={!!errors.discount}
                />
                {errors.discount && (
                  <CAlert color="danger">{errors.discount}</CAlert>
                )}
              </CCol>

              {/* Validity Field */}
              <CCol className="mb-3">
                <CFormLabel htmlFor="name">Coupon Validity Date</CFormLabel>
                <CFormInput
                  type="date"
                  id="validity"
                  onChange={(e) => setData('validity', e.target.value)}
                  placeholder="Enter Coupon validity"
                  invalid={!!errors.validity}
                  min={new Date().toISOString().split('T')[0]}
                />
                {errors.validity && (
                  <CAlert color="danger">{errors.validity}</CAlert>
                )}
              </CCol>

              {/* Submit Button */}
              <CButton
                type="submit"
                color="primary"
                className="m-2"
                disabled={processing}
              >
                {processing ? 'Loading...' : 'Add'}
              </CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </AdminDashboard>
    </>
  );
};

export default AddCoupon;
